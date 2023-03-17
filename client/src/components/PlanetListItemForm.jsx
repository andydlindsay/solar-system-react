import { useState } from "react";

const options = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'purple',
  'white'
];

const PlanetListItemForm = (props) => {
  const [name, setName] = useState(props.planet?.name || 'new planet');
  const [mass, setMass] = useState(props.planet?.mass || 0.8);
  const [color, setColor] = useState(props.planet?.color || 'purple');
  const [x, setX] = useState(Math.floor(props.planet?.x) || 200);
  const [y, setY] = useState(Math.floor(props.planet?.y) || 200);
  const [Vx, setVx] = useState(Math.floor(props.planet?.Vx) || -4);
  const [Vy, setVy] = useState(Math.floor(props.planet?.Vy) || 4);

  const handleSubmit = (event) => {
    event.preventDefault();

    const planetId = props.planet?.id || Math.random().toString(36).substring(2, 5);

    props.setPlanet(planetId, {
      ...props.planet,
      id: planetId,
      trails: props.planet?.trails || [],
      name,
      mass: +mass,
      color,
      x: +x,
      y: +y,
      Vx: +Vx,
      Vy: +Vy
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Planet:</label>
      <input 
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <br/>
      <label>Mass:</label>
      <input 
        type="number"
        value={mass}
        onChange={(event) => setMass(event.target.value)}
      />
      <br/>
      <label>Color:</label>
      <select
        value={color}
        onChange={(event) => setColor(event.target.value)}
      >
        { options.sort().map((option) => {
          return <option key={option} value={option}>{option}</option>;
        }) }
      </select>
      <br/>
      <label>x:</label>
      <input 
        type="number"
        value={x}
        onChange={(event) => setX(event.target.value)}
      />
      <br/>
      <label>y:</label>
      <input 
        type="number"
        value={y}
        onChange={(event) => setY(event.target.value)}
      />
      <br/>
      <label>Vx:</label>
      <input 
        type="number"
        value={Vx}
        onChange={(event) => setVx(event.target.value)}
      />
      <br/>
      <label>Vy:</label>
      <input 
        type="number"
        value={Vy}
        onChange={(event) => setVy(event.target.value)}
      />
      <br/>
      <button type="submit">Save!</button>
      <button onClick={props.onCancel}>Cancel</button>
    </form>
  );
};

export default PlanetListItemForm;