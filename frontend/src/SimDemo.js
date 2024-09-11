import React, { useEffect, useState } from 'react';
import { simulateMonteCarlo } from './APIs/pythonSimulation';
import Histogram from './Histogram';

const SimulationComponent = () => {
  const [results, setResults] = useState(null);
  const [histogramData, setHistogramData] = useState(null);

  const handleSimulation = async () => {
    const data = await simulateMonteCarlo('normal', [0, 1, 4999], 50);
    setResults(data);
    setHistogramData(data);
  };

  useEffect(() => {
    handleSimulation();
  }, []);
  

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
      <div>
      <h1>Monte Carlo Simulation Histogram</h1>
      {histogramData ? (
        <Histogram
          binEdges={histogramData.bin_edges}
          frequencies={histogramData.frequencies}
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
    </div>
  );
};

export default SimulationComponent;
