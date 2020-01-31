import React from "react";


export default function CharacterCard(props) {
  return (<div>
    <img src={props.photo} alt="image"/>
    <p>{props.name}</p>
    <p>{props.species}</p>
    <p>{props.gender}</p>
    
  </div>
  );
}
