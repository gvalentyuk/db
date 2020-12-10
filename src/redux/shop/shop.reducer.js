import { shopActionTypes } from "./shop.types";

const INITIAL_STATE = {
    collections: null,
    isFetching: false,
    error: null
}

const shopReducer = ( state = INITIAL_STATE, action) => {
    switch (action.type){
        case shopActionTypes.START_FETCHING_COLLECTIONS:
            return {
                ...state,
                isFetching: true
            }
        case shopActionTypes.FAILURE_FETCHING_COLLECTIONS:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        case shopActionTypes.SUCCESS_FETCHING_COLLECTIONS:
            return {
                ...state,
                isFetching: false,
                collections: action.payload
            }
        default: return state
    }
}

export default shopReducer