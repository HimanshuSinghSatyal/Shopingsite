import {combineReducers, createStore, applyMiddleware } from "redux";

import showReducer from "./slices/Show";
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension';
import { call, put, takeEvery, takeLatest , debounce } from 'redux-saga/effects'
import { showQueryChangeAction } from "./slices/Show";
import {LOADED_DETAIL} from "./Actions/show";

import {fetchShow,fetchDetail, fetchCast }  from "./Sagas/Show";

import { configureStore } from '@reduxjs/toolkit'



export type State=ReturnType<typeof store.getState>;

function* rootSaga(){
  yield debounce(100, showQueryChangeAction , fetchShow );
  yield takeEvery(LOADED_DETAIL ,fetchDetail);
 // yield takeEvery(LOADED_DETAIL, fetchCast);
  
}

const sagaMiddleWare= createSagaMiddleware()


// export const reducer=  combineReducers({
 // show: showReducer,
//})

const store = configureStore({ reducer: {show: showReducer},
middleware : [sagaMiddleWare ],
})
sagaMiddleWare.run(rootSaga);
// const store = createStore(reducer,
 //composeWithDevTools(  applyMiddleware (sagaMiddleWare)))
//sagaMiddleWare.run(rootSaga);
                          
export default store;

