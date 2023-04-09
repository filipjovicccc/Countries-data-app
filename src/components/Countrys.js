import React from "react"
import styled from 'styled-components';
const Countrys = ({country}) => {

   return <Wrapp>

         <h3>{country.name.common}</h3>

         <img  src={country.flags.png} alt="contrys"/>

          </Wrapp>

}

const Wrapp = styled.div`
   
   width: 15em;
   height: 15em;
   border: 1px solid black;
 


`

export default Countrys