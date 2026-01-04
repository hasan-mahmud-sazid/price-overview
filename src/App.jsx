import "./App.css";
import LineChart from "./components/LineChart/LineChart";
import NavBar from "./components/NavBar/NavBar";
import Phons from "./components/Phons/Phons";
import PriceOptions from "./components/PriceOptions/PriceOptions";
// import DaisyNav from "./components/DaisyNav/DaisyNav";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <Phons></Phons>
      {/* <DaisyNav></DaisyNav> */}
    </>
  );
}

export default App;
