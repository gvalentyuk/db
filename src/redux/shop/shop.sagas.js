import { takeLatest, call, put, all } from 'redux-saga/effects'

import {shopActionTypes} from "./shop.types";
import {convertCollectionsSnapshotToMap, firestore} from "../../firebase/firebase.utils";
import {successFetchCollections, failureFetchingCollections} from "./shop.actions";

function* fetchCollectionsStartAsync() {
    try{
        const collectionRef = firestore.collection('collections')
        const snapShot = yield collectionRef.get()
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapShot)
        yield put(successFetchCollections(collectionsMap))
    } catch (error) {
        yield put(failureFetchingCollections(error))
    }
}


export function* fetchCollectionsStart() {
    yield takeLatest(
        shopActionTypes.START_FETCHING_COLLECTIONS,
        fetchCollectionsStartAsync
    )
}

export function* shopSagas(){
    yield all([call(fetchCollectionsStart)])
}