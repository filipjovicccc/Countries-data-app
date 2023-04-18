import { useEffect, useState } from "react"
import { CountryContext } from "./context/CountryContext";
import { FilterCountryContext } from "./context/CountryContext";
import { Outlet } from "react-router-dom"
import { v4 as uuidv4 } from 'uuid';
import Navbar from "./components/Navbar";

function App() {
  
  const [countries, setCountries] = useState([])
  const [filteredCountries, setFilteredCountries] = useState([])
  const [selectedRegion, setSelectedRegion] = useState("All");
  
  
  const url =" https://restcountries.com/v3.1/all"
useEffect(() => {
    fetch(url).then((res) => {
      return res.json();
    }).then((data) => {
     ;

     const countriesWithId = data.map((item) => {
      return {
        ...item,
        id: uuidv4()
      };
    });
      setCountries(countriesWithId)
    
    });
  }, []);


  const handleRegionChange = (event) => {
    const region = event.target.value;
    setSelectedRegion(region);
    if (region === "All") {
      setFilteredCountries(countries);
    } else {
      const filtered = countries.filter((country) => country.region === region);
      setFilteredCountries(filtered);
    }
  };


  return (

    <div>

    <CountryContext.Provider value={{countries, setCountries}}>
       
       <FilterCountryContext.Provider value={{filteredCountries, setFilteredCountries}}>

        <Navbar selectedRegion={selectedRegion} changeRegion={handleRegionChange}/>
        <Outlet />

      </FilterCountryContext.Provider>
    

    </CountryContext.Provider>
       
    </div>
  );
}



export default App;
