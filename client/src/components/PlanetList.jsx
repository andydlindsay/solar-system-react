import PlanetListItem from './PlanetListItem';
import PlanetListItemForm from './PlanetListItemForm';

const PlanetList = (props) => {
  const mappedPlanets = props.planets.map((planet) => {
    return <PlanetListItem key={planet.id} planet={planet} />;
  });

  return (
    <div>
      <h2>Planets</h2>
      { mappedPlanets }
      <PlanetListItemForm setPlanet={props.setPlanet} planet={props.planets[0]} />
    </div>
  );
};

export default PlanetList;
