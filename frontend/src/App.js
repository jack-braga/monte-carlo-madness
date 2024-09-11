// import logo from './logo.svg';
import './App.css';
// import SimulationComponent from './SimDemo';
// import NavBar from './components/NavBar';
import GraphArea from './components/GraphArea';
import VariableArea from './components/VariableArea';

function App() {
  return (
    <div className="App">
      {/* <SimulationComponent /> */}
      {/* <NavBar/> */}
      <div className='areaContainer'>
        <VariableArea/>
        <GraphArea/>
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
