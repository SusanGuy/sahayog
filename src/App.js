import React from "react";
import "./App.scss";
import Campaign from "./containers/Campaign";

function App() {
  return (
    <div className="App">
      <Donate limit={50000} />
    </div>
  );
}

export default App;
