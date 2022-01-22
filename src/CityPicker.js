function CityPicker(props) {
  return (
    <div>
      City Picker
      {props.cities ?
      <select onChange={e=> e.target.value}>
        <option>Select a city</option>
        {props.cities.map(city =>
          <option key={city.name} value={city.name}>{city.name}</option>
        )}
      </select>
      : "loading"}
    </div> 
  );
}

export default CityPicker;
