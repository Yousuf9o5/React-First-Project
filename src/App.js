import Nav from "./component/Nav bar folder/nav bar";
import JoinSec from "./component/Joining section folder/Join sec";
import Cards from "./component/Card section/Cards";

import "./App.css";

function App(x) {
  return (
    <div>
      <Nav click={x.click} />
      <JoinSec />
      {/* <Cards /> */}
    </div>
  );
}

export default App;
