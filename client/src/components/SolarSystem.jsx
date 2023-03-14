import Planet from './Planet';

const SolarSystem = (props) => {
  const planetMap = props.planets.map((planet) => {
    return <Planet key={planet.name} planet={planet} />;
  });

  const sun = {
    x: 10,
    y: -40,
    mass: 2.5,
    color: 'yellow'
  };
  
  return (
    <div className="solar-system">
      { planetMap }
      <Planet planet={sun} />
    </div>
  );
};

export default SolarSystem;
