import React from 'react'
import Countrys from '../components/Countrys'

function Maincountrys() {
  return (
    <div>
        {countrys.map((country, index) => {
      
      return <Countrys key={index} country={country}
           />
 
     })}
    </div>
  )
}

export default Maincountrys
