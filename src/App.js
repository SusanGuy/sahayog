import React from "react";
import "./App.scss";
import Auth from "./containers/Auth";
import Campaign from "./containers/Campaign";
import Donate from "./containers/Donate";
import Payment from "./containers/Payment";
import MyFundraiser from "./containers/MyFundraiser";
import Home from "./containers/Home";
import { Switch, Route } from "react-router-dom";
import MyDonations from "./containers/MyDonations";
import NewCampaign from "./containers/NewCampaign";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/new-campaign" component={NewCampaign} />
        <Route exact path="/campaign/:id" component={Campaign} />
        <Route exact path="/donate/:campaignId" component={Donate} />
        <Route exact path="/pay/:campaignId" component={Payment} />
        <Route exact path="/login" component={Auth} />
        <Route exact path="/signup" component={Auth} />
        <Route exact path="/my-fundraisers" component={MyFundraiser} />
        <Route exact path="/my-donations" component={MyDonations} />
        <Route exact path="/my-fundraisers" component={Home} />
        <Route exact path="/payment" component={Payment} />

        <Route
          exact
          path="/my-favorites"
          component={() => <MyDonations deleteButton />}
        />
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
