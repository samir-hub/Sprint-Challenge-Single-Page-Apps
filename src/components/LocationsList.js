import React, { useEffect, useState } from "react";
import axios from "axios";
import LocationCard from "./LocationCard";

export default function LocationsList() {
      // TODO: Add useState to track data from useEffect
  const [data, setData] = useState([]);

  let api = `https://rickandmortyapi.com/api/location/`

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
    <section className="location-list grid-view">
      <div className='main-div'>
    {
      data.map((ele)=>{
        return <LocationCard name = {ele.name} type = {ele.type} dimension = {ele.dimension} />

      })
    }
    </div>
    </section>
  );
}
