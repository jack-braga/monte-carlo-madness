import React, { useEffect, useState } from "react";
import { simulateMonteCarlo } from "../APIs/pythonSimulation";
import Histogram from "./Histogram";
import GraphTypeSelector from "./GraphTypeSelector";
import Slider from "./Slider";

const GraphArea = ({ variables }) => {
  const [results, setResults] = useState(null);
  const [histogramData, setHistogramData] = useState(null);

  const handleSimulation = async () => {
    const data = await simulateMonteCarlo(variables, 2130, 50);
    setResults(data);
    setHistogramData(data);
  };

  useEffect(() => {
    handleSimulation();
  }, []);

  return (
    <div className="graphArea">
      {/* <h1>Monte Carlo Simulation Histogram</h1> */}
      <GraphTypeSelector />
      <div className="graphOptions">
        <Slider />
        {/* Number of Bins slider */}
        {/* Number of Simulations slider */}
        <button onClick={handleSimulation}>Run Simulation</button>
      </div>
      <div className="histogram">
        {histogramData ? (
          <Histogram
            binEdges={histogramData.bin_edges}
            frequencies={histogramData.frequencies}
          />
        ) : (
          <p>Loading...</p>
        )}
      </div>
      {/* <div className='resultsSummary'>
            {results && (
            <div>
                <h3>Simulation Results</h3>
                <p>Mean: {results.mean}</p>
                <p>Std Dev: {results.stddev}</p>
                <p>Frequencies: {results.frequencies.join(', ')}</p>
            </div>
            )}
        </div> */}
    </div>
  );
};

export default GraphArea;
