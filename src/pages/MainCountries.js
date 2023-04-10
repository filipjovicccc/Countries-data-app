import React from 'react'
import Countrys from '../components/Countrys'
import { useContext } from 'react'
import { CountryContext } from '../context/CountryContext'

function MainCountries() {
   
    const {addIdToCountry} = useContext(CountryContext)

  return (
    <div className="App">
        {addIdToCountry.map((country) => {
      
      return <Countrys key={country.id} country={country}
           />
 
     })}
    </div>
  )
}

export default MainCountries
