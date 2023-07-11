import { FC,useState,useEffect } from "react";
import CastCard from "../Components/CastCard";
import GenrePill from "../Components/GenrePill";
import LoadingSpinner from "../Components/LoadingSpinner";

import withRouter, { WithRouterProps } from "../hocs/withRouter";
import { FiArrowLeft } from "react-icons/fi";
import {Link} from "react-router-dom"
import { searchShowDetail, searchShowCast } from "../api";
import { showDetailAction, DetailLoadedAction , castLoadedAction } from "../Actions/show";
import {connect, connectedProps } from "react-redux";
import {showMapSelector, showStateSelector, castMapSelector } from "../Selector/show";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
//import {  } from "../Sagas/Show";
//import {showDetail} from "../Sagas/Show";



  //{ cast && cast.map((cast)=> <CastCard avatarLink={cast.image.medium} name={cast.name} />)}

type ShowDetailPageProps = WithRouterProps;

const ShowDetailPage: FC<WithRouterProps> = ({params,show, loadDetail,castLoaded, cast }) => {
  
 useEffect(()=>{
 loadDetail(params.showId);
     
//searchShowCast(params.showId).then((r)=>  castLoaded(r));
 },[params.showId])
  console.log("show page",show)

  if(!show){
   return <div className=" flex flex justify-center items-center h-screen text-blue-300 "><LoadingSpinner className="text-5xl"/>  </div>
}
  //if(!cast){
    //return <div> loading...</div>
  //}
  console.log("cast",cast);
  return (
    <div className="mt-2">
    <Link className="flex items-center" to="/">  <FiArrowLeft/> Back to home</Link>
      <h2 className="text-4xl font-semibold tracking-wide">{show?.name}</h2>
      <div className="flex space-x-3 my-2 bg-gray-300 p-2 rounded-sm">
        {show.genres.map((genres)=> <GenrePill name={genres} key={genres}/>)}
      </div>
      <div className="mt-2 flex">
        <img
          src={show.image?.medium}
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72"
        />
        <div className="ml-2">
         <p dangerouslySetInnerHTML= {{__html: show.summary || "" }}>
          </p>
          <p className="mt-2 text-lg font-bold border border-gray-700 rounded-md px-2 py-1 max-w-max">
            Rating: <span className="text-gray-700">{show.rating?.average}/10</span>
          </p>
        </div>
      </div>

      <div className="mt-2">
        <h4 className="text-2xl font-semibold tracking-wide">Cast</h4>
        <div className="flex flex-wrap">
          {show.cast.map((c)=> <CastCard avatarLink={c.image?.medium} name={c?.name} /> ) }
      
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state, ownProps) {
  const showId= ownProps.params.showId;
 return{
    cast: castMapSelector(state),
    show:showMapSelector(state)[+showId],
   
 }}

const mapDispatchToProps= {
 loadDetail:DetailLoadedAction,
 //castLoaded: castLoadedAction,
}


const connector= connect(mapStateToProps,mapDispatchToProps)


type ReduxProps= connectedProps<typeof connector>
  
//export default withRouter(ShowDetailPage)
  
  export default withRouter( 
 connector(ShowDetailPage) );