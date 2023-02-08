const MASS_SIZE = 20; // ratio of pixel size to mass
const UNIVERSE_SIZE = 600; // in pixels

const getCSSCoords = (planet) => {
  // CSS displays the object from the upper left corner of the object
  // so, we need to remove 1/2 the height and width
  // and then shift it toward the mid-point of the universe
  const left = planet.x - 0.5 * planet.mass * MASS_SIZE + 0.5 * UNIVERSE_SIZE;
  const top = planet.y - 0.5 * planet.mass * MASS_SIZE + 0.5 * UNIVERSE_SIZE;
  return [left, top];
};

const Planet = (props) => {
  let className = "planet ";
  className += props.planet.color ? props.planet.color : 'yellow';

  const [left, top] = getCSSCoords(props.planet);
  const diameter = `${props.planet.mass * MASS_SIZE}px`;

  const style = {
    top,
    left,
    width: diameter,
    height: diameter
  };

  return (
    <div style={style} className={className}></div>
  );
};

export default Planet;
