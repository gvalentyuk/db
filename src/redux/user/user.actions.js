import { userActionTypes } from "./user.types";

export const setCurrentUser = user => ({
    type: userActionTypes.SET_CURRENT_USER,
    payload: user
})

export const startSignInEmail = credentials => ({
    type: userActionTypes.EMAIL_SIGN_IN_START,
    payload: credentials
})

export const successSignInEmail = user => ({
    type: userActionTypes.EMAIL_SIGN_IN_SUCCESS,
    payload: user
})

export const failureSignInEmail = error => ({
    type: userActionTypes.EMAIL_SIGN_IN_FAILURE,
    payload: error
})


export const startSignInGoogle = () => ({
    type: userActionTypes.GOOGLE_SIGN_IN_START
})

export const successSignInGoogle = user => ({
    type: userActionTypes.GOOGLE_SIGN_IN_SUCCESS,
    payload: user
})

export const failureSignInGoogle = error => ({
    type: userActionTypes.GOOGLE_SIGN_IN_FAILURE,
    payload: error
})

export const checkUserSession = () => ({
    type: userActionTypes.CHECK_USER_SESSION
})

export const startSignOut = () => ({
    type: userActionTypes.START_SIGN_OUT
})

export const successSignOut = () => ({
    type: userActionTypes.SUCCESS_SIGN_OUT
})

export const failureSignOut = error => ({
    type: userActionTypes.FAILURE_SIGN_OUT,
    payload: error
})

export const startSignUp = credentials => ({
    type: userActionTypes.SIGN_UP_START,
    payload: credentials
})

export const successSignUp = credentials => ({
    type: userActionTypes.SIGN_UP_SUCCESS,
    payload: credentials
})

export const failureSignUp = error => ({
    type: userActionTypes.SIGN_UP_FAILURE,
    payload: error
})