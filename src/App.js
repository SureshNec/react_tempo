import './App.css';
import ClassComp from './Components/ClassComp';
import ClickCount from './Components/ClickCount';
import ClickHover from './Components/ClickHover';
import CompA from './Components/useContext/CompA';
import { UserProvider } from './Components/useContext/CompContext';
import ControlComp from './Components/ControlComp';
import CreateRef from './Components/CreateRef';
import FetchApi from './Components/FetchApi';
import FunctionComp from './Components/FunctionComp';
// import LifeCycleA from './Components/LifeCycleA';
import ParentComp from './Components/ParentComp';
import UseStateHook from './Components/Hooks/UseStateHook';
import UseEffeckHook from './Components/Hooks/UseEffectHook';

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
      <ClickCount name="Suresh" />
      <ClickHover name="Amala" />
      <UserProvider value="Kutty">
        <CompA />
      </UserProvider>
      <UseStateHook />
      <UseEffeckHook />
    </div>
  );
}

export default App;
