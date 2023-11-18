import './App.css';
import FetchApi from './Components/FetchApi';
import FunctionComp from './Components/FunctionComp';

function App() {
  return (
    <div className="App">
      <FunctionComp name="Suresh" />
      <br />
      <FetchApi />
    </div>
  );
}

export default App;
