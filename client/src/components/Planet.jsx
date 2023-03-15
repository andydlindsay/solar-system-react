import getCSSCoords from "../helpers/getCSSCoords";
import { MASS_SIZE } from '../data/constants';

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
