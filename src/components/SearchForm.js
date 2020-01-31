import React, { useState } from "react";
import styled from 'styled-components';
const FormDiv = styled.div`
text-align: center;
`;

export default function SearchForm() {
 
  return (
    <section className="search-form">
     <FormDiv action="">
       <lable><span>Search: </span></lable>
       <input type="text"/>
     </FormDiv>
    </section>
  );
}
