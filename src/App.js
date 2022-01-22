import CityPicker from "./CityPicker";
import './App.css';
import { useEffect, useState } from "react";

function App() {
  const [cities,setCities] = useState()

  useEffect(() => {
    if (!cities) {

      fetch('https://api.teleport.org/api/continents/geonames%3ANA/urban_areas')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setCities(data._links["ua:items"]);
      });
      }
      })

  return (
    <div className="App">
      <header className="App-header">
        City Face-Off
      </header>
      <CityPicker cities={cities}/>
      <CityPicker cities={cities}/>
    </div>
  );
}

export default App;
