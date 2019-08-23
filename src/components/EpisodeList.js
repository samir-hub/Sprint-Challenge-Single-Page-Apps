import React, { useEffect, useState } from "react";
import axios from "axios";
import EpisodeCard from "./EpisodeCard";

export default function EpisodeList() {
    // TODO: Add useState to track data from useEffect
    const [data, setData] = useState([]);
  
    let api = `https://rickandmortyapi.com/api/episode/`
  
    useEffect(() => {
      // TODO: Add API Request here - must run in `useEffect`
      //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
      axios
      .get(api)
      .then(response => {
        console.log(response.data.results);
        setData(response.data.results);
      })
    }, []);
  
    return (
      <section className="episode-list grid-view">
        <div className='main-div'>
      {
        data.map((ele)=>{
          return <EpisodeCard name = {ele.name} air_date = {ele.air_date} episode = {ele.episode} />
  
        })
      }
      </div>
      </section>
    );
  }
  