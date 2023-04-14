import React from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";

const Countrys = ({country}) => {

   return (
      <Wrapp>
         <ImgWrapper>
            <img src={country.flags.png} alt="contrys"/>
         </ImgWrapper>
         <Title>{country.name.common}</Title>
         <Id>{country.id}</Id>
         <DetailsButton to={`/countryDetails/${country.id}`}>Details</DetailsButton>
      </Wrapp>
   )
}

const Wrapp = styled.div`
   width: 100%;
   max-width: 17em;
   height: auto;
   border: 1px solid black;
   box-sizing: border-box;
   padding: 1em;
   display: flex;
   flex-direction: column;
   align-items: center;
   color: white;
`

const ImgWrapper = styled.div`
   height: 8em;
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: center;

   img {
      height: 100%;
      object-fit: cover;
   }
`

const Title = styled.h3`
   font-size: 1.2rem;
   font-weight: bold;
   margin: 1em 0 0.5em;
`

const Id = styled.h3`
   font-size: 1rem;
   margin: 0.5em 0;
`

const DetailsButton = styled(Link)`
   background-color: #007bff;
   color: white;
   border: none;
   border-radius: 5px;
   padding: 0.5em 1em;
   font-size: 1rem;
   text-align: center;
   text-decoration: none;
   cursor: pointer;
   transition: background-color 0.2s ease;

   &:hover {
      background-color: #0069d9;
   }

   @media (max-width: 768px) {
      font-size: 0.8rem;
   }
`

export default Countrys;