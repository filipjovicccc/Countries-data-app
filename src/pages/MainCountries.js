import React from 'react'
import Countrys from '../components/Countrys'
import { useContext } from 'react'
import { CountryContext } from '../context/CountryContext'

function MainCountries() {
   
    const {countries} = useContext(CountryContext)

  return (
    <div className="App">
        {countries.map((country) => {
      
      return <Countrys key={country.idd.suffixes} country={country}
           />
 
     })}
    </div>
  )
}

export default MainCountries