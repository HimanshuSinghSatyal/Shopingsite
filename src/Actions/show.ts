import {ActionCreator } from "."; import {Show} from "../models/Show";

//export const SHOWS_LOADED = "SHOWS_LOADED";

//export const showLoadedAction: ActionCreator<Show []>= (shows:Show[]) => ({
//type: SHOWS_LOADED,
//payload:shows,
//});

//export const SHOW_QUERY_change ="show query change";
//export const showQueryAction:ActionCreator<string> = (query) => ({
//  type: SHOW_QUERY_change,
//  payload: query,
//})


//export const SHOW_DETAIL= "show_Detail_ACTION";

//export const showDetailAction: ActionCreator<Show> =(show:Show) =>({
 // type: SHOW_DETAIL,
 // payload: show,
//})


export const LOADED_DETAIL="LOADED_Detail_ACTION";

export const DetailLoadedAction =(showId)=> ({
  type: LOADED_DETAIL,
  payload: showId,
})

console.log("action is running")


export const  CAST_LOADED =" CAST LOADED ACTION";
export const castLoadedAction= (cast) => ({
  type: CAST_LOADED,
  payload: cast,
})