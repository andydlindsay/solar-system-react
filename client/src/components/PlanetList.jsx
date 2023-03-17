import {useState} from 'react';
import PlanetListItem from './PlanetListItem';
import PlanetListItemForm from './PlanetListItemForm';

const PlanetList = (props) => {
  const [showNew, setShowNew] = useState(false);

  const toggleEdit = (planet) => {
    props.setPlanet(planet.id, ({...planet, edit: !planet.edit}));
  };

  const mappedPlanets = props.planets.map((planet) => {
    if (planet.edit) {
      return <PlanetListItemForm key={planet.id} setPlanet={props.setPlanet} planet={planet} onCancel={() => toggleEdit(planet)}/>;
    }
    return <PlanetListItem key={planet.id} planet={planet} onClick={() => toggleEdit(planet)}/>;
  });

  return (
    <div className="planet-list">
      <h2>Planets <span onClick={() => setShowNew(!showNew)}>+</span></h2>
      <hr/>
      { showNew && <PlanetListItemForm setPlanet={props.setPlanet} onCancel={() => setShowNew(false)}/> }
      { mappedPlanets }
    </div>
  );
};

export default PlanetList;
