import { useState, useEffect } from "react";

import Header from "./components/Header";
import SolarSystem from "./components/SolarSystem";
import Controls from "./components/Controls";

import "./App.css";

import planetData from "./data/planets";

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

  // copy the planet
  const newPlanet = {
    ...planet,
    Vx: planet.Vx + Ax * deltaT,
    Vy: planet.Vy + Ay * deltaT,
    x: planet.x + (planet.Vx + Ax * deltaT),
    y: planet.y + (planet.Vy + Ay * deltaT)
  };

  return newPlanet;
};

const App = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [delay, setDelay] = useState(50);
  const [planets, setPlanets] = useState(planetData);
  const [intervalRef, setIntervalRef] = useState(null);

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

  return (
    <div className="App">
      <Header />
      <SolarSystem planets={planets} />
      <Controls
        isRunning={isRunning}
        onStartClick={onStartClick}
        delay={delay}
        onDelayChange={(event) => setDelay(event.target.value)}
      />
    </div>
  );
};

export default App;
