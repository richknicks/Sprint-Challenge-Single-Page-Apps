import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from "./CharacterCard"
import styled from "styled-components"
const SearchBar = styled.div`
text-align:center
margin-bottom: 20px;
`;

export default function CharacterList() {
const [data, setData] = useState([])
const [query, setQuery] = useState("");
  useEffect(() => {
    axios
     .get("https://rickandmortyapi.com/api/character/")
     .then(response => {
      console.log(response.data.results)
       const characters = response.data.results.filter(character =>
        character.name.toLowerCase().includes(query.toLowerCase())
        );
        // console.log("harry potter characters", response);
        setData(characters);
      });
  }, [query]);
  const handleInputChange = event => {
    setQuery(event.target.value);
  };
  return (
    <div>
    <SearchBar>
    <input 
    type="text"
    onChange={handleInputChange}
    value={query}
    placeholder="search here"
    />
    </SearchBar>
    <div className="grid-view">
    {data.map(characters => {
      return (
      <CharacterCard
        id={characters.id}
        name={characters.name}
        status={characters.status}
        species={characters.species}
        image={characters.image}
        gender={characters.gender}
      />
      )
    })}
    </div>
  </div>
  )}