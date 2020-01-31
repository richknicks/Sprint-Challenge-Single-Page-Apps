import React from "react";
import {Link} from 'react-router-dom';
import styled from 'styled-components';
const Links = styled.div`
text-align: center;
line-height: 2rem;
`;

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <Links><Link to="/">Home</Link></Links>
      <Links><Link to="/CharacterList">Characters</Link></Links>

    </header>
  );
}
