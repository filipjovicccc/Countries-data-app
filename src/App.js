import { useEffect, useState } from "react"
import { CountryContext } from "./context/CountryContext";
import { Outlet } from "react-router-dom"
import { v4 as uuidv4 } from 'uuid';
import Navbar from "./components/Navbar";

function App() {
  
  const [countries, setCountries] = useState([])
  
  const url =" https://restcountries.com/v3.1/all"
useEffect(() => {
    fetch(url).then((res) => {
      return res.json();
    }).then((data) => {
     ;

     console.log(data)
     const countriesWithId = data.map((item) => {
      return {
        ...item,
        id: uuidv4()
      };
    });
      setCountries(countriesWithId)
    
    });
  }, []);

  return (
    <div>

    <CountryContext.Provider value={{countries, setCountries}}>
    
    <Navbar />
    <Outlet />

    </CountryContext.Provider>
       
    </div>
  );
}



export default App;
