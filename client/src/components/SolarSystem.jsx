import Planet from './Planet';
import Trail from './Trail';

const SolarSystem = (props) => {
  const planetMap = props.planets.map((planet) => {
    return <Planet key={planet.id} planet={planet} />;
  });

  let trails = [];
  for (const planet of props.planets) {
    trails = [...trails, ...planet.trails];
  }
  const mappedTrails = trails.map((trail, index) => {
    return <Trail key={index} trail={trail} />;
  });

  const sun = {
    x: 0,
    y: 0,
    mass: 2.5,
    color: 'white'
  };
  
  return (
    <div className="solar-system">
      { planetMap }
      <Planet planet={sun} />
      { mappedTrails }
    </div>
  );
};

export default SolarSystem;
