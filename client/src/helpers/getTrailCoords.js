import {MASS_SIZE, UNIVERSE_SIZE} from '../data/constants';

const getTrailCoords = (trail) => {
  // CSS displays the object from the upper left corner of the object
  // so, we need to remove 1/2 the height and width
  // and then shift it toward the mid-point of the universe
  const left = trail.x - 0.5 * trail.mass * MASS_SIZE + 0.5 * UNIVERSE_SIZE;

  // const top = trail.y - 50 + (0.5 * UNIVERSE_SIZE);
  const top = trail.y - 0.5 * trail.mass * MASS_SIZE + 0.5 * UNIVERSE_SIZE;

  return [left, top];
};

export default getTrailCoords;