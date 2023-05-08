import './App.css';
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <button ><a href={`routerTest/1`}>1</a></button>
      <button ><a href={`2`}>2</a></button>
      <Link to="/1">About</Link>
      <Link to="1">About</Link>
      <Link to="routerTest/1">About</Link>
      <Link to="/routerTest/1">About</Link>
    </div>
  );
}

export default App;
