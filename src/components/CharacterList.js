import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [data, setData] = useState([]);

  let api = `https://rickandmortyapi.com/api/character/`

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
    <section className="character-list grid-view">
      <div className='main-div'>
    {
      data.map((ele)=>{
        return <CharacterCard name = {ele.name} status = {ele.status} species = {ele.species} image = {ele.image} />

      })
    }
    </div>
    </section>
  );
}
