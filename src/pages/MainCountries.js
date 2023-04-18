import React from 'react'
import Countrys from '../components/Countrys'
import { useContext } from 'react'
import { CountryContext } from '../context/CountryContext'
import { FilterCountryContext } from '../context/CountryContext'

function MainCountries() {
   
    const {countries} = useContext(CountryContext)
    const {filteredCountries} = useContext(FilterCountryContext)
     
    const countriesForUse = filteredCountries.length > 0 ? filteredCountries : countries
  return (
    <div className="App">
        {countriesForUse.length && countriesForUse.map((country) => {
      
      return <Countrys key={country.name.common} country={country}
           />
 
     })}
    </div>
  )
}

export default MainCountries
