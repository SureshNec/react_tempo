import './App.css';
import ClassComp from './Components/ClassComp';
import ControlComp from './Components/ControlComp';
import CreateRef from './Components/CreateRef';
import FetchApi from './Components/FetchApi';
import FunctionComp from './Components/FunctionComp';
// import LifeCycleA from './Components/LifeCycleA';
import ParentComp from './Components/ParentComp';

function App() {
  return (
    <div className="App">
      <FunctionComp name="Suresh" />
      <br />
      <FetchApi />
      <ClassComp name="Amala Kutty" />
      <ParentComp />
      <ControlComp />
      {/* <LifeCycleA /> */}
      <CreateRef />
    </div>
  );
}

export default App;
