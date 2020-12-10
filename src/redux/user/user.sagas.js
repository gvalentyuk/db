import {takeLatest, put, call, all} from 'redux-saga/effects'

import {
    successSignInGoogle, failureSignInGoogle, failureSignInEmail,
    successSignInEmail, successSignOut, failureSignOut, successSignUp, failureSignUp
} from './user.actions'
import {userActionTypes} from "./user.types";

import {auth, provider, createUserDocumentProfile, getCurrentUser} from "../../firebase/firebase.utils";

export function* startSignInGoogleAsync() {
    try {
        const {user} = yield auth.signInWithPopup(provider)
        const userRef = yield call(createUserDocumentProfile, user)
        const userShapshot = yield userRef.get()

        yield put(successSignInGoogle({id: userShapshot.id, ...userShapshot.data()}))
    } catch (error) {
        yield put(failureSignInGoogle(error))
    }
}

export function* startGoogleSignIn() {
    yield takeLatest(
        userActionTypes.GOOGLE_SIGN_IN_START,
        startSignInGoogleAsync
    )
}


export function* startSignInEmailAsync({payload: {email, password}}) {
    try {
        const {user} = yield auth.signInWithEmailAndPassword(email, password)
        const userRef = yield call(createUserDocumentProfile, user)
        const userShapshot = yield userRef.get()

        yield put(successSignInEmail({id: userShapshot.id, ...userShapshot.data()}))
    } catch (error) {
        yield put(failureSignInEmail(error))
    }
}

export function* startEmailSignIn() {
    yield takeLatest(
        userActionTypes.EMAIL_SIGN_IN_START,
        startSignInEmailAsync
    )
}

function* isAuthorized() {
    try {
        const userAuth = yield getCurrentUser()
        if (!userAuth) return
        const userRef = yield call(createUserDocumentProfile, userAuth)
        const userShapshot = yield userRef.get()

        yield put(successSignInEmail({id: userShapshot.id, ...userShapshot.data()}))
    } catch (error) {
        yield failureSignInEmail(error)
    }
}

export function* checkUserSession() {
    yield takeLatest(
        userActionTypes.CHECK_USER_SESSION,
        isAuthorized
    )
}

function* startSignOutAsync() {
    try {
        yield auth.signOut()
        yield put(successSignOut())
    } catch (error) {
        yield put(failureSignOut(error))
    }
}

export function* signOutStart() {
    yield takeLatest(
        userActionTypes.START_SIGN_OUT,
        startSignOutAsync
    )
}

function* signUpAsync({payload: { email, password, displayName}}){
    try{
        const { user } = yield auth.createUserWithEmailAndPassword(email, password)
        const userRef = yield call(createUserDocumentProfile, user, {displayName})
        const userShapshot = yield userRef.get()

        yield put(successSignUp({id: userShapshot.id, ...userShapshot.data()}))
    } catch (error) {
        yield put(failureSignUp(error))
    }
}

export function* signUpStart() {
    yield takeLatest(
        userActionTypes.SIGN_UP_START,
        signUpAsync
    )
}

export function* userSagas() {
    yield all([
        call(startGoogleSignIn),
        call(startEmailSignIn),
        call(checkUserSession),
        call(signOutStart),
        call(signUpStart)
    ])
}
