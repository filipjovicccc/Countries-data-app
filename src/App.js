import './App.css';
import { useEffect, useState } from "react"



const url ="https://restcountries.com/v3.1/all"
function App() {
   
  const[countrys, setCountry] = useState([])

useEffect(() => {
    fetch(url).then((res) => {
      return res.json();
    }).then((data) => {
      setCountry(data)
      console.log(data);
    });
  }, []);
  return (
    <div className="App">
  
       
    </div>
  );
}



export default App;
