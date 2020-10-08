import React from "react";
import "./App.scss";
import Auth from "./containers/Auth";
import Campaign from "./containers/Campaign";
import Donation from "./containers/Donation";
import Donate from "./containers/Donate";
import Payment from "./containers/Payment";
import Home from "./containers/Home";
import { Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Auth} />
        <Route exact path="/signup" component={Auth} />
        <Route exact path="/my-donations" component={Payment} />
        <Route exact path="/my-fundraisers" component={Home} />
        <Route
          exact
          path="/logout"
          component={() => <Donate target={5000}> </Donate>}
        />
      </Switch>
    </div>
  );
}

export default App;
