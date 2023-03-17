const PlanetListItem = (props) => {
  return (
    <div>
      <h3>Planet: {props.planet.name}</h3>
      <h4>Mass: {props.planet.mass}</h4>
      <h4>Color: {props.planet.color}</h4>
    </div>
  );
};

export default PlanetListItem;
