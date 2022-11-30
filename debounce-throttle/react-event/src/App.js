import "./app.css";
import Debounce from "./components/debounce/debounce";
import Normal from "./components/normal/normal";
import Throttle from "./components/throttle/throttle";

function App() {
  return (
    <div className="app">
      <Normal />
      <Debounce />
      <Throttle />
    </div>
  );
}

export default App;
