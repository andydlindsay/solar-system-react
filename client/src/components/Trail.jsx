import getTrailCoords from "../helpers/getTrailCoords";

const Trail = (props) => {
  const className = "trail";

  const [left, top] = getTrailCoords(props.trail);
  const diameter = '1px';

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
