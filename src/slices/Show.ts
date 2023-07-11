import { createSlice, PayloadAction,createEntityAdapter} from '@reduxjs/toolkit';

import {Show} from "../models/Show";

import {Avatar} from "../models/Avatar";

import { schema ,normalize} from "normalizr";

const showAdapter  = createEntityAdapter();

//export type State={
 // show:{[showId:number]:Show};
//  query: string;
 //query_show : {[query: string]:number};
//  cast: {[cast:number]:any}
//}

const initialState = 
  showAdapter.getInitialState({
  show:{},
  query: "",
  query_show:{},
  cast:{},  
  
});

export type State = typeof initialState;

  const showSlice = createSlice({
  name: 'show',
  initialState,
  reducers: {
  loaded,
  queryChange,
  showDetail,
    },
  });
  

function loaded(state: State, action:PayloadAction<Show[]>){


  let showsWithCast = [];

  const {shows, actors} = action.payload ;
  
  console.log("action",action)
  
  //if(!shows || shows.length === 0){
    // return;  
      //    }
  
 const normalizedShows= shows.reduce((prev, curr)=>{
showsWithCast.push( prev);

return {...prev, ...curr, cast: [...actors[curr.id]]}  
   },{})
  
 // 

console.log("normalizedShows",showsWithCast  )
  
  state.query_show[state.query]= shows.map((s)=> s.id);
  
showAdapter.addMany(state,showsWithCast)  
}
  
  // as {
      // shows: shows[],
      //   cast: {[personId:number]:Avatar[]}
   //  };
     // console.log("shows",shows)
      
    //const showEntity= new schema.Entity("show");
 // const data = normalize(shows,[showEntity]) ;     

    //const Showsss= shows.reduce((prev, curr)=>{
     //  return {
     //    ...prev, ...curr, cast: [...actors[curr.id]]}
 //  },{})
      
      //console.log("normalizedShows")
      
        

                          
         //state.query_show[state.query]= Show.map((s)=> s.id);
  
     
      //state.show ={...state.show,...normalizedShows } || {}
  

function showDetail (state: State, action:PayloadAction<Show>) {
  let showsWithCast = [];
const {show,cast}= action.payload ; 
      console.log("show in reduvcer",show);

     const normalized= show.reduce((prev, curr)=>{
       return {
       ...curr, cast:cast}}
   ,{})
       showsWithCast.push(normalized)
    console.log("normalized",normalized);
  showAdapter.addMany(state,showsWithCast)
      
 // state.entities = { ...state.entities, ...normalized }             
}

      

function queryChange ( state: State, action:PayloadAction<string>) {
  
state.query= action.payload ;    
}


export const{ actions, reducer: showReducer}= showSlice;

export const{ loaded: showLoadedAction, queryChange: showQueryChangeAction,  
showDetail: showDetailAction } = actions;

export default showReducer;

      
  
