const Controls = (props) => {
  const leftPad = (input) => {
    return String(input).padStart(3, '0');
  };

  return (
    <div className="controls">
      <div className="start-stop">
        <button onClick={props.onStartClick}>Start/Stop</button>
        <span>{props.isRunning ? 'Running' : 'Paused'}</span>
      </div>
      <button
        onClick={props.clearTracks}
      >Clear Tracks</button>
      <div className="delay-slider">
        <input 
          type="range" 
          min="1" 
          max="100" 
          value={props.delay}
          onChange={props.onDelayChange} 
        />
        <span className="delay">{leftPad(props.delay)}ms</span>
      </div>
    </div>
  );
};

export default Controls;
