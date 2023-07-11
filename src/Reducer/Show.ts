import {Show} from "../models/Show";
import produce from "immer";
import {AnyAction} from "redux";
import { SHOWS_LOADED , SHOW_QUERY_change,SHOW_DETAIL, SAGA_DETAIL , CAST_LOADED } from "../Actions/show";
import { schema ,normalize} from "normalizr";
import {Avatar} from "../models/Avatar"



export type State={
  show:{[showId:number]:Show};
  query: string;
 query_show : {[query: string]:number};
  cast: {[cast:number]:any}

}

const intialState={
  show:{},
  query: "",
  query_show:{},
  cast:{},
  
  
}

function showReducer(state=intialState,action:AnyAction):state {
  switch(action.type){
      
   // case SHOWS_LOADED:
      //const payload= action.payload 
    // console.log("payload",payload);

     // const{shows, actors} = action.payload  as {
   //    shows: shows[],
       //  cast: //{[personId:number]:Avatar[]}
 //    };
   //   console.log("shows",shows)
      
   ///  const showEntity= new schema.Entity("show");
 //    const data = normalize(shows,[showEntity]) ;     

 //   const normalizedShows= shows.reduce((prev, curr)=>{
     //   return {
      //    ...prev, [curr.id]: {...curr, cast: [...actors[curr.id]]}}
   // },{})
      
      //console.log("normalizedShows",normalizedShows)
      
   //   return produce(state,(draft)=>{
        
       //   if(!shows || shows.length === 0){
         //   return;  
          //    }
                          
         //draft.query_show[draft.query]= data.result;
   //   draft.show ={...draft.show,...normalizedShows } || {}
       //  })
      
   // case SHOW_QUERY_change:
    //  return produce(state,(draft)=>{ draft.query= action.payload;   
    //  })


   // case SHOW_DETAIL:
    //  const {show,cast}= action.payload ;
    //  console.log("show in reduvcer",show)

     // const normalized= show.reduce((prev, curr)=>{
      //  return {
     //  ...prev,[curr.id]:{ ...curr, cast:cast}}}
  //  ,{})

      //console.log("normalized",normalized)
      
    //  return produce(state,(draft)=>{ draft.show = {
    //    ...draft.show, ...normalized }             
  //   })

    case CAST_LOADED:
      return produce(state,(draft)=>{ const cast = action.payload;        //  const castEntity= new schema.Entity("cast");
  //  const data = normalize(cast,[castEntity]) ;                                   
    //  draft.cast =data.entities.cast || {}
   draft.cast= cast
        
      })
      default:return state;
      
  }
  
}

export default showReducer;