function CityPicker(props) {
  const onSelect = (e) => {
    console.log(e.target.value, props.side)
    props.setCity(e.target.value, props.side);
  }

  return (
    <div>
      {props.cities ?
      <select onChange={onSelect}>
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
