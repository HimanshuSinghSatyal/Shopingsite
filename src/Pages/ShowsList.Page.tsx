import SearchBar from "../Components/SearchBar";
import ShowCard from "../Components/ShowCard";
import {useState,useEffect} from "react";
import {searchShows} from "../api";
import { showQueryChangeAction  } from "../slices/Show";
import {connect,connectedProps} from "react-redux";
import {showSelector, querySelector } from "../Selector/show";





function ShowListPage({show,showQuery,query}) {
console.log("shows in page", show);
 // useEffect(()=>{searchShows(query).then((response) => showLoaded(response))
//},[query])
  return (

    <div className="mt-2">
      <SearchBar value={query}
        onChange={(event)=> showQuery(event.target.value)}
        />
      <div className="flex flex-wrap justify-center">
        {show && show.map((s)=>
        <ShowCard key={s?.id}show={s} />)}
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    show: showSelector(state),
    query: querySelector(state),
  }
};

const mapDispatchToProps={
  showQuery: showQueryChangeAction  ,
};


const connector= connect(mapStateToProps, mapDispatchToProps)

type ReduxProps= connectedProps<typeof connector>

export default connector (ShowListPage);
