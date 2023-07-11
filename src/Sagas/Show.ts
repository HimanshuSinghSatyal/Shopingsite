import {Action} from "../Actions/index";
import { call, put} from 'redux-saga/effects';
import {castLoadedAction } from "../Actions/show";
import {searchShows, searchShowDetail,searchShowCast } from "../api";
import { showLoadedAction, showDetailAction  } from "../slices/Show";



export function* fetchShow(action:Action) {
  console.log("actionShow",action)
  const shows= yield call(searchShows, action.payload);
  console.log("searchShow")
  yield put(showLoadedAction (shows))
}

export function* fetchDetail(action) {
  console.log("action",action)
  const show= yield call(searchShowDetail,action.payload)
  yield put(showDetailAction  (show))
}

export function* fetchCast(action){
  const showId= yield call(searchShowCast,action.payload )
yield put(castLoadedAction(showId) )
}