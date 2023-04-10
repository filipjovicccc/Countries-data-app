import { useEffect, useState } from "react"
import { CountryContext } from "./context/CountryContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainCountries from "./pages/MainCountries";
import CountryDetails from "./pages/CountryDetails"


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
    <Router>
    <Routes>
  
            <Route path="/" element={<MainCountries />} />
            <Route path="/Countrydetails/:id" element={<CountryDetails/>} />
        
        </Routes>
    </Router>
    </CountryContext.Provider>
       
    </div>
  );
}



export default App;
