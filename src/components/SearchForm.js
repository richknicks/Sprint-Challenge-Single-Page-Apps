import React, { useState, useEffect } from "react";
import styled from 'styled-components';
const FormDiv = styled.div`
text-align: center;
`;

export default function SearchForm() {
  
 
  return (
    <section className="search-form">
     <FormDiv action="">
       <label><span>Search: </span></label>
       <input type="text"/>
     </FormDiv>
    </section>
  );
}
