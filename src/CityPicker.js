function CityPicker(props) {
  return (
    
    <div>
      City Picker
      {props.cities ?
      <select>
        {props.cities.map(city =>
          <option key={city.name} value="">{city.name}</option>
        )}
      </select>
      : "loading"}
    </div> 
  );
}

export default CityPicker;
