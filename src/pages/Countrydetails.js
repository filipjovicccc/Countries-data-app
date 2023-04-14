import React from 'react';
import { useContext } from 'react';
import { CountryContext } from '../context/CountryContext';
import { useParams } from 'react-router-dom';

function CountryDetails() {
  const { addIdToCountry } = useContext(CountryContext);
  const { id } = useParams();


  const findCountry = addIdToCountry.find(country => parseInt(id) === country.id);


  return (
    <div>
      <h3>{findCountry.name.common}</h3>
      <p>Capital: {findCountry.capital}</p>
      <p>Region: {findCountry.region}</p>
      <img src={findCountry.flags.png} alt="flag"/>
  
    </div>
  );
}

export default CountryDetails;
