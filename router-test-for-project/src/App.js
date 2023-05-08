import './App.css';
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <button ><Link to="1">1</Link></button>
      <button ><Link to="2">2</Link></button>
    </div>
  );
}

export default App;
