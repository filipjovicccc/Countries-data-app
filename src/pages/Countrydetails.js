import React from 'react';
import { useContext } from 'react';
import { CountryContext } from '../context/CountryContext';
import { useParams } from 'react-router-dom';

function CountryDetails() {
  const { addIdToCountry } = useContext(CountryContext);
  const { id } = useParams();

  console.log(addIdToCountry)
  console.log(typeof id)
  const findCountry = addIdToCountry.find(country => parseInt(id) === country.id);
  console.log(findCountry);

  return (
    <div>
      <h3>{findCountry.name.common}</h3>
      <p>Capital: {findCountry.capital}</p>
      <p>Region: {findCountry.region}</p>
      {/* add more properties here as needed */}
    </div>
  );
}

export default CountryDetails;
