import React from 'react'
import styled from 'styled-components'
import { CountryContext } from '../context/CountryContext'
import { useContext } from 'react'

function Navbar() {

  const {countries} = useContext(CountryContext)

  const regions = countries.reduce((acc, country) => {
    if (!acc.includes(country.region)) {
      acc.push(country.region);
    }
    return acc;
  }, []);
  
  return (
    <NavbarWrapper>
      <h3>Countries Data App</h3>
      {regions.length > 0 && (
        <select>
          {regions.map(region => (
            <option key={region} value={region}>
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
    padding-left: 2em


`


export default Navbar

