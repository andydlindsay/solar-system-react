import { useState, useEffect } from "react";
import { MAX_TRAIL_LENGTH } from "./data/constants";

import Header from "./components/Header";
import SolarSystem from "./components/SolarSystem";
import Controls from "./components/Controls";
import PlanetList from "./components/PlanetList";

import "./App.css";

import planetData from "./data/planets";
import ogPlanetsData from './data/planets';

const calcGravity = (planet) => {
  const Msun = 1000; // mass of the Sun
  const G = 10; // gravitational constant

  const r = Math.sqrt(planet.x ** 2 + planet.y ** 2);
  const f = (G * Msun * planet.mass) / (r * r); // the force due to gravity

  return [(-1 * f * planet.x) / r, (-1 * f * planet.y) / r]; // wtf????
};

const calcNewPosition = (planet) => {
  const [Fx, Fy] = calcGravity(planet);

  // F=MA therefore...
  const Ax = Fx / planet.mass;
  const Ay = Fy / planet.mass;

  // deltaV = a * deltaT
  const deltaT = 1;

  const newX = planet.x + (planet.Vx + Ax * deltaT);
  const newY = planet.y + (planet.Vy + Ay * deltaT);

  let newTrails = [...planet.trails];
  if (newTrails.length === MAX_TRAIL_LENGTH) {
    newTrails.shift();
  }

  // copy the planet
  const newPlanet = {
    ...planet,
    Vx: planet.Vx + Ax * deltaT,
    Vy: planet.Vy + Ay * deltaT,
    x: newX,
    y: newY,
    trails: [...newTrails, { x: newX, y: newY, mass: 1 }],
  };

  return newPlanet;
};

const App = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [delay, setDelay] = useState(50);
  const [planets, setPlanets] = useState(planetData);
  const [intervalRef, setIntervalRef] = useState(null);
  const [ogPlanets, setOgPlanets] = useState(ogPlanetsData);

  const setPlanet = (id, newPlanet) => {
    // check if a planet with that id exists
    const planetIds = planets.map((planet) => planet.id);
    if (!planetIds.includes(id)) {
      return setPlanets((prev) => {
        return [
          ...prev,
          newPlanet
        ];
      });
    }

    setPlanets((prev) => {
      return prev.map((planet) => {
        if (planet.id === id) {
          return newPlanet;
        }
        return planet;
      });
    });
  };
  
  const onClearClick = () => {
    setPlanets((prev) => {
      return prev.map((prevPlanet) => {
        return {
          ...prevPlanet,
          trails: [],
        };
      });
    });
  };

  useEffect(() => {
    if (!isRunning) {
      return;
    }

    const interval = setInterval(() => {
      setPlanets((prev) => prev.map(calcNewPosition));
    }, delay);

    setIntervalRef(interval);

    return () => {
      clearInterval(interval);
    };
  }, [delay, isRunning]);

  const onStartClick = () => {
    if (isRunning) {
      clearInterval(intervalRef);
    }
    setIsRunning(!isRunning);
  };

  const onResetClick = () => {
    setPlanets(ogPlanets);
  };

  return (
    <div className="App">
      <Header />
      <div className="main">
        <div>
          <SolarSystem planets={planets} />
          <Controls
            isRunning={isRunning}
            onStartClick={onStartClick}
            onResetClick={onResetClick}
            onClearClick={onClearClick}
            delay={delay}
            onDelayChange={(event) => setDelay(event.target.value)}
          />
        </div>
        <PlanetList setPlanet={setPlanet} planets={planets}/>
      </div>
    </div>
  );
};

export default App;
