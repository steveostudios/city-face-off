function CityViewer(props) {
  return (
    props.city.name ?
    <div className="viewer">
        <div>
          <h2>{props.city.full_name}</h2>
          <img src={props.city.photo.image.web} alt={props.city.name}/>
          <div className="summary" dangerouslySetInnerHTML={{__html: props.city.summary}} />
          <hr />
          <div className="bars">
          <label htmlFor="cost_of_living" >Cost of Living  </label>
          <progress name="cost_of_living" max="10" value={props.city.cost_of_living}/>
          <span>{props.city.cost_of_living.toFixed(2)}</span>
          <label htmlFor="economy" >Economy</label>
          <progress name="economy" max="10" value={props.city.economy}/>
          <span>{props.city.economy.toFixed(2)}</span>
          <label htmlFor="internet_access" >Internet Access</label>
          <progress name="internet_access" max="10" value={props.city.internet_access}/>
          <span>{props.city.internet_access.toFixed(2)}</span>
          <label htmlFor="environmental_quality" >Environmental Quality</label>
          <progress name="environmental_quality" max="10" value={props.city.environmental_quality}/>
          <span>{props.city.environmental_quality.toFixed(2)}</span>
          <label htmlFor="startups" >Startups</label>
          <progress name="startups" max="10" value={props.city.startups}/>
          <span>{props.city.startups.toFixed(2)}</span>
        </div>
        </div>
        </div> 
        : null
  );
}

export default CityViewer;
