import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";

export default function CharacterList(props) {
  const [characterList, setCharacterList] = useState();
  const [dataToDisplay, setDataToDisplay] = useState();

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/`, {})
      .then(res => {
        setCharacterList(res.data.results);
      })
      .catch(err => {
        console.error(err);
      });
  }, [props.history]);

  useEffect(() => {
    characterList && setDataToDisplay(characterList);
  }, [characterList]);

  if (!dataToDisplay) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <section className="character-list grid-view"></section>
      <SearchForm data={characterList} setDataToDisplay={setDataToDisplay} />
      <div className="main-div">
        {dataToDisplay.map(character => (
          <CharacterCard {...character} key={character.id} />
        ))}
      </div>
      <section />
    </>
  );
}
