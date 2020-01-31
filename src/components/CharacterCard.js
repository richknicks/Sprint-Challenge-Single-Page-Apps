import React from "react";


export default function CharacterCard(props) {
  return <div>
    <img src={props.image} alt="image"/>
    <p>{props.key}</p>
    <p>{props.name}</p>
    <p>{props.status}</p>
    <p>{props.species}</p>
    <p>{props.type}</p>
    <p>{props.gender}</p>
    <p>{props.origin}</p>
  </div>
  ;
}
