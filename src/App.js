import React from "react";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";
import SearchForm from "./components/SearchForm";
import { Route } from 'react-router-dom';


export default function App() {
  return (
    <main>
      <Header />
      <SearchForm/>
      <Route exact path="/"> <WelcomePage/> </Route>
      <Route path="/CharacterList"> <CharacterList/> </Route>
    </main>
  );
}
