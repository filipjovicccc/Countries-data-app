import React from 'react';
import { useContext , useState, useEffect} from 'react';
import { CountryContext } from '../context/CountryContext';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

function CountryDetails() {
  const { countries} = useContext(CountryContext);
  const { id } = useParams();


 const  findCountry = countries.find((country) => country.id === id)


  return (
    <CountryCard className='App'>
      <h3>Country name: {findCountry?.name.common}</h3>
      <img src={findCountry?.flags.svg} alt="flag"/>
      <h4>Capital: {findCountry?.capital}</h4>
      <h4>Car driving side: {findCountry?.car.side}</h4>
      <h4>Region: {findCountry?.region}</h4>
      <h4>Continent: {findCountry?.continents}</h4>
  
  
    </CountryCard>
  );
}

const CountryCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.799);
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  color: white;

  h3 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  h4 {
    font-size: 1.2rem;
    margin: 0.5rem 0;
  }

  img {
    max-width: 80%;
    height: auto;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5), -2px -2px 10px rgba(0, 0, 0, 0.2), 0px 15px 20px rgba(0, 0, 0, 0.1);
  
    &:hover{
      transform: scale(0.94)
    }
  
  }
 
`;

export default CountryDetails;
