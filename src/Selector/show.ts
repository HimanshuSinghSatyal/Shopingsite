import {createSelector} from "reselect";

export const showStateSelector= (state) => state.show;

export const  querySelector=createSelector(showStateSelector, (showMap) => showMap.query );

export const showMapSelector=createSelector(showStateSelector,(showMap) => showMap.entities);

export const queryShowMapSelector= createSelector(showStateSelector,(showMap)=> showMap.query_show);

//export const showSelector=createSelector(showMapSelector, (showMap)=> Object.keys(showMap).map((showId)=> showMap[+showId]));

export const castMapSelector= createSelector(showStateSelector,  (showState) => showState.cast);


//export const castMapSelector= createSelector(castSelector,(cast)=> Object.keys(cast).map((showId) => cast[+showId]));

export const  showSelector=createSelector(showMapSelector, querySelector, queryShowMapSelector,(showMap, query, queryShowMap) => queryShowMap[query] ?  queryShowMap[query].map((showId)=> showMap[showId])  : [] );                        