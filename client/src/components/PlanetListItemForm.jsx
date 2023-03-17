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
  const [name, setName] = useState(props.planet.name || 'unknown');
  const [mass, setMass] = useState(props.planet.mass || 1);
  const [color, setColor] = useState(props.planet.color || 'yellow');
  const [x, setX] = useState(Math.floor(props.planet.x) || 200);
  const [y, setY] = useState(Math.floor(props.planet.y) || 200);
  const [Vx, setVx] = useState(Math.floor(props.planet.Vx) || 200);
  const [Vy, setVy] = useState(Math.floor(props.planet.Vy) || 200);

  const handleSubmit = (event) => {
    event.preventDefault();

    props.setPlanet(props.planet.id, {
      ...props.planet,
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
      <button>Cancel</button>
    </form>
  );
};

export default PlanetListItemForm;