import './App.css';
import ClassComp from './Components/ClassComp';
import FetchApi from './Components/FetchApi';
import FunctionComp from './Components/FunctionComp';
import ParentComp from './Components/ParentComp';

function App() {
  return (
    <div className="App">
      <FunctionComp name="Suresh" />
      <br />
      <FetchApi />
      <ClassComp name="Amala Kutty" />
      <ParentComp />
    </div>
  );
}

export default App;
