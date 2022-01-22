import CityPicker from "./CityPicker";
import './App.css';
import { useEffect, useState } from "react";

function App() {
  const [cities,setCities] = useState();
  const [cityA, setCityA] = useState("");
  const [cityB, setCityB] = useState("");


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
        <h1>
        City Face-Off
        </h1>
      </header>
      <CityPicker cities={cities} setCity={setCityA} city={cityA}/>
      <CityPicker cities={cities} setCity={setCityB} city={cityB} />
    </div>
  );
}

export default App;
