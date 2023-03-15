import {MASS_SIZE, UNIVERSE_SIZE} from '../data/constants';

const getCSSCoords = (planet) => {
  // CSS displays the object from the upper left corner of the object
  // so, we need to remove 1/2 the height and width
  // and then shift it toward the mid-point of the universe
  const left = planet.x - 0.5 * planet.mass * MASS_SIZE + 0.5 * UNIVERSE_SIZE;
  const top = planet.y - 0.5 * planet.mass * MASS_SIZE + 0.5 * UNIVERSE_SIZE;
  return [left, top];
};

export default getCSSCoords;
