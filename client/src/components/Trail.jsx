import {useMemo} from 'react';

import getTrailCoords from "../helpers/getTrailCoords";

const Trail = (props) => {
  const className = "trail";

  const [left, top] = useMemo(() => getTrailCoords(props.trail), [props.trail.x]);
  const diameter = '1px';

  // console.log('trail:', Math.round(props.trail.y), Math.round(top));

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

export default Trail;
