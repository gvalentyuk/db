import { createStore, applyMiddleware } from "redux";
import  { persistStore } from "redux-persist";
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'

import { rootSaga } from "./root.saga";

import persistedReducer from './root.reducer'

const sagaMiddleware = createSagaMiddleware()

const middlewares = [logger, sagaMiddleware]

export const store = createStore(persistedReducer, applyMiddleware(...middlewares))

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)
