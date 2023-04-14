import { useEffect, useState } from "react"
import { CountryContext } from "./context/CountryContext";
import { Outlet } from "react-router-dom"


function App() {
  
  const [countries, setCountries] = useState([])
  
  const url ="https://restcountries.com/v3.1/all"
useEffect(() => {
    fetch(url).then((res) => {
      return res.json();
    }).then((data) => {
      setCountries(data)
    
    });
  }, []);

  const addIdToCountry = countries.map((country, index) =>{

    return {...country, id: index+1}
  })
  

  const value = {
   addIdToCountry, setCountries
  }
  return (
    <div>

    <CountryContext.Provider value={value}>

        <Outlet />

    </CountryContext.Provider>
       
    </div>
  );
}



export default App;
