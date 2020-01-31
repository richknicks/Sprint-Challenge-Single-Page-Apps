import React, { useEffect, useState } from "react";
import CharacterCard from './CharacterCard';
import SearchForm from "./SearchForm";
import axios from "axios";
export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter]=useState();
  const [query, setQuery] = useState("");
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get("https://rickandmortyapi.com/api/character/")
    .then(response =>{
      console.log(response.data.results);
      setData(response.data.results);
    })
    .catch(error =>{
      console.log("The data was not returned", error);
    } )
  }, []);

  return (
    <section className="character-list">
      <SearchForm />
      <div>{character.map(characters => {
        return(
        <CharacterCard
        key = {characters.id}
        image = {characters.image}
        name = {characters.name}
        status = {characters.status}
        species = {characters.species}
        type = {characters.type}
        gender = {characters.gender}
        origin = {characters.origin}
        />)
      })}</div>
    </section>
  );
}
