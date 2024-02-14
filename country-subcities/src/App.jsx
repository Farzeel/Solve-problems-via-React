import { useEffect, useState } from "react";
import "./App.css";
function App() {
  const [city, setCity] = useState("PK");
  const countries = [
    { name: "India", Value: "IN", cities: ["Delhi", "Mumbai"] },
    { name: "pakistan", Value: "PK", cities: ["Lahore", "Karachi"] },
    { name: "England", Value: "Eng", cities: ["London", "Manchester"] },
  ];


  const handleOption = (e) => {
    setCity(e.target.value);
  };

   let selectedCityindex = countries.findIndex(item=>city == item.Value)

  
  return (
    <>
    Country:
      <select name="" id="" onChange={handleOption} >
        {countries.map((item,index) => {
          return (
            <option 
              key={index} 
              value={item.Value}
              selected={index === 1}
              >
              {item.name}
            </option>
          );
        })}
         </select>
         City:
         <select name="" id="" onChange={(e)=>console.log(e.target.value)}>
        {
          countries[selectedCityindex].cities.map(city=>{
            return <option key={city} value={city}>{city}</option>
          })
        }
        </select>
     
     
    </>
  );
}

export default App;
