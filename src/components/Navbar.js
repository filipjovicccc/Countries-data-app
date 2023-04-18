import React from 'react'
import styled from 'styled-components'
import { CountryContext } from '../context/CountryContext'
import { useContext, useState } from 'react'

function Navbar({changeRegion, selectedRegion}) {

  const {countries} = useContext(CountryContext)

  const countryRegions = countries.reduce((acc, country) => {
    if (!acc.includes(country.region)) {
      acc.push(country.region);
    }
    return acc;
  }, []);
  
  countryRegions.unshift("All");
  
  return (
    <NavbarWrapper>
      <h3>Countries Data App</h3>
          {countryRegions.length > 0 && (
            <select value={selectedRegion} onChange={changeRegion}>
             {countryRegions.map(region => (
               <option  key={region} value={region}>
                 {region}
              </option>
              ))}
         </select>
      )}
    </NavbarWrapper>
  );
}

const NavbarWrapper = styled.div`
      
    width: 100%;
    height: 3em;
    background-color: #007bff;
    color: #fff;
    padding-left: 2em;
    padding-right: 2em;
    display: flex;
    justify-content: space-between;


`


export default Navbar

