import "./app.css";
import Debounce from "./components/debounce/debounce";
import LodashDebounce from "./components/lodashDebounce/debounce";
import LodashThrottle from "./components/lodashThrottle/throttle";
import Normal from "./components/normal/normal";
import Throttle from "./components/throttle/throttle";

function App() {
  return (
    <div className="app">
      <Normal />
      <div style={{ display: "flex" }}>
        <Debounce />
        <LodashDebounce />
      </div>
      <div style={{ display: "flex" }}>
        <Throttle />
        <LodashThrottle />
      </div>
    </div>
  );
}

export default App;
