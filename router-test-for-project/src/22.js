import { Link } from "react-router-dom";
export default function SecondComponent() {
  return (
    <>
      <div>Second Page</div>
      <button ><Link to="1">1</Link></button>
      <button ><Link to="/routerTest/1">1</Link></button>
      <a href={`/1`}>1</a>
    </>
  );
}