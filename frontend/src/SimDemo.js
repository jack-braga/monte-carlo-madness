import React, { useState } from 'react';
import { simulateMonteCarlo } from './APIs/pythonSimulation';

const SimulationComponent = () => {
  const [results, setResults] = useState(null);

  const handleSimulation = async () => {
    const data = await simulateMonteCarlo('normal', [0, 1, 4999], 50);
    setResults(data);
  };

  return (
    <div>
      <button onClick={handleSimulation}>Run Simulation</button>
      {results && (
        <div>
          <h3>Simulation Results</h3>
          <p>Mean: {results.mean}</p>
          <p>Std Dev: {results.stddev}</p>
          <p>Frequencies: {results.frequencies.join(', ')}</p>
        </div>
      )}
    </div>
  );
};

export default SimulationComponent;
