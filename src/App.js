import CityPicker from "./CityPicker";
import CityViewer from "./CityViewer";
import './App.css';
import { useEffect, useState } from "react";

function App() {
  const [cities,setCities] = useState();
  const [cityA, setCityA] = useState({});
  const [cityB, setCityB] = useState({});


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

  const fetchCity = (city, side) => {
    const cityObject = cities.find(item => item.name === city);
    fetch(cityObject.href)
      .then(response => response.json())
      .then((data) => Promise.all([
fetchCityName(data),
        fetchCitySalaries(data._links), 
        fetchCityImage(data._links), 
        fetchCityScores(data._links)
      ]))
      .then(data => {
          const cityJson = {...data[0], ...data[1], ...data[2], ...data[3]};
          if(side === "a") {
            setCityA(cityJson);
          } else {
            setCityB(cityJson)
          }
        });
    }

    const fetchCityName = (data) => {
      return new Promise((res, rej) => {
        res({name: data.name, slug: data.slug, full_name: data.full_name})
      })
    }

    const fetchCityImage = (links) => {
      return new Promise((res, rej) => {
        fetch(links["ua:images"].href)
        .then(response => response.json())
        .then(data => res({photo: data.photos[0]}))
      });
    }

    const fetchCitySalaries = (links) => {
      return new Promise((res, rej) => {
        fetch(links["ua:salaries"].href)
        .then(response => response.json())
        .then(data => res({salary: data.salaries.find(item => item.job.id === "WEB-DEVELOPER").salary_percentiles}))
      });
    }

    const fetchCityScores = (links) => {
      return new Promise((res, rej) => {
        fetch(links["ua:scores"].href)
        .then(response => response.json())
        .then(data => res({
          summary: data.summary, 
          "cost_of_living": data.categories.find(item => item.name === "Cost of Living").score_out_of_10, 
          "environmental_quality": data.categories.find(item => item.name === "Environmental Quality").score_out_of_10, 
          "economy": data.categories.find(item => item.name === "Economy").score_out_of_10,
          "internet_access": data.categories.find(item => item.name === "Internet Access").score_out_of_10,
          "startups": data.categories.find(item => item.name === "Startups").score_out_of_10
        }))
      });
    }


  return (
    <div className="App">
      <header className="App-header">
        <h1>
        City Face-Off
        </h1>
        <p><a href="https://github.com/steveostudios/city-face-off">Github</a></p>
      </header>
      <div class="ring">
      <div className="city">
      <CityPicker cities={cities} side="a" setCity={fetchCity} city={cityA} />
      <CityViewer city={cityA}/>
      </div>
      <div className="city">
      <CityPicker cities={cities} side="b" setCity={fetchCity} city={cityB} />
      <CityViewer city={cityB}/>
      </div>
      </div>
    </div>
  );
}

export default App;
