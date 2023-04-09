import React from 'react'
import { useContext } from 'react'
import { CountryContext } from '../context/CountryContext'
import { useParams } from 'react-router-dom'

function CountryDetails() {
  
  const {countries} = useContext(CountryContext)

  const {id} = useParams()
   

  const findCountry = countries.find((country) => id === country.idd.suffixes)
  console.log(findCountry)
  return (
    <div>
      
    </div>
  )
}

export default CountryDetails
