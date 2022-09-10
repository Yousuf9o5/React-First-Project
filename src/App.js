import Nav from "./component/Navbar folder/Navbar";
import JoinSec from "./component/Joining section folder/Join sec";
import Cards from "./component/Card section/Cards";
import { Route, Router } from "react-router-dom";
import "./App.css";

function App(x) {
  return (
    <div>
      <Nav />
      <JoinSec />
      {/* <Cards /> */}
    </div>
  );
}

export default App;
