import axios from "axios";
import {Show } from "./models/Show";

export const searchShows = async (keyword: string) => {
const response=await axios.get<{show: Show}[]>("https://api.tvmaze.com/search/shows?q=" + keyword)
const shows= response.data.map((item)=> item.show)
console.log("shows",shows)

  
  let actors={}
 console.log("showid",shows.id)
  for (let i = 0; i < shows.length; i++) {
    console.log("showid1",shows[i].id);
    
    const castResponse = await axios.get("https://api.tvmaze.com/shows/"+ shows[i].id +"/cast")    
    const cast = castResponse.data.map((item)=>item.person);

    
    
    actors[shows[i].id]= cast
  }
console.log("shows in ",{shows,actors});
  return {shows,actors};
 
  };

      
export const searchShowDetail= async(showId: number)=> { 
  let showArray= []
 const showResponse = await axios.get<{show:Show}>("https://api.tvmaze.com/shows/"+ showId);
  const show = showResponse.data

  const castResponse = await axios.get("https://api.tvmaze.com/shows/"+ showId +"/cast ")
   
  const cast = castResponse.data.map((item)=> item.person)
 showArray.push(show);
  
  const response=  {show:showArray, cast}
  
  console.log("data in detail",response)
  return  response;
};





export const searchShowDetail3= async(showId: number)=> { 
  
 const response = await axios.get<{show:Show}>("https://api.tvmaze.com/shows/"+ showId);
  return response.data
};



export const searchShowCast=async(showId: number)=> {
  
 const response = await axios.get("https://api.tvmaze.com/shows/"+ showId +"/cast ")
   
  const data = response.data.map((item)=> item.person)

  return data;
}

//.then((response)=> response.data.map((item)=> item.show));