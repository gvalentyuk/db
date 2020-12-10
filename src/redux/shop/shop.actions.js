import {shopActionTypes} from "./shop.types";

export const startFetchCollections = () => ({
    type: shopActionTypes.START_FETCHING_COLLECTIONS
})

export const successFetchCollections = collections => ({
    type: shopActionTypes.SUCCESS_FETCHING_COLLECTIONS,
    payload: collections
})

export const failureFetchingCollections = error => ({
    type: shopActionTypes.FAILURE_FETCHING_COLLECTIONS,
    payload: error
})
