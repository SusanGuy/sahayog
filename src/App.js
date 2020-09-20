import React from "react";
import "./App.scss";
import Campaign from "./containers/Campaign";

import Donate from "./containers/Donate";
import Payment from "./containers/Payment";
import Home from "./containers/Home";
function App() {
  return (
    <div className="App">
      {
        //<Donate target={25000} />
        <Campaign />
        //<Payment />
        //<Home />
      }
    </div>
  );
}

export default App;
