import React from "react"
import styled from 'styled-components';
import { Link } from "react-router-dom";


const Countrys = ({country}) => {

   return <Wrapp>

         <h3>{country.name.common}</h3>
         <h3>{country.id}</h3>
         <img  src={country.flags.png} alt="contrys"/>

         <Link to={`/Countrydetails/${country.id}`}>Details</Link>

          </Wrapp>

}

const Wrapp = styled.div`
   
   width: 17em;
   height: 17em;
   border: 1px solid black;
   
   img {
      height: 8em;
   }


`

export default Countrys