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
      console.log(data);
    });
  }, []);

  const value = {
    countries, setCountries
  }
  return (
    <div>

    <CountryContext.Provider value={value}>
    <Router>
    <Routes>
  
            <Route path="/" element={<MainCountries />} />
            <Route path="/Countrydetails" element={<CountryDetails/>} />
        
        </Routes>
    </Router>
    </CountryContext.Provider>
       
    </div>
  );
}



export default App;
