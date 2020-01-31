import React from "react";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";
import CharacterCard from "./components/CharacterCard";
import SearchForm from "./components/SearchForm";


export default function App() {
  return (
    <main>
      <Header />
      <SearchForm/>
      <WelcomePage/>
      <CharacterCard/>
    </main>
  );
}
