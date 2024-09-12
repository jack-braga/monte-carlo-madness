// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
// import SimulationComponent from './SimDemo';
import NavBar from './components/NavBar';
import GraphArea from './components/GraphArea';
import VariableArea from './components/VariableArea';

function App() {
  const [variables, setVariables] = useState([]);

    const addVariable = () => {
        const newVar = {
            distribution: 'normal',
            parameters: [0, 1, 2130],
            id: Date.now() + Math.random(),
        };
        setVariables(prevArray => [...prevArray, newVar]);
    };

    const deleteVariable = (id) => {
        setVariables((prevArray) => prevArray.filter((v) => v.id !== id));
    };

    const changeVariableDistribution = (id, newDistribution) => {
        const updatedVariables = variables.map((v) => {
            return v.id === id ? { ...v, distribution: newDistribution } : v;
        });
        setVariables(updatedVariables);
    }

  return (
    <div className="App">
      {/* <SimulationComponent /> */}
      <NavBar/>
      <div className='areaContainer'>
        <VariableArea variables={variables} onSetDistribution={changeVariableDistribution} onDelete={deleteVariable} addVariable={addVariable}/>
        <GraphArea variables={variables} />
      </div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
