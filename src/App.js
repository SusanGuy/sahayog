import React from "react";
import "./App.scss";
import Auth from "./containers/Auth";
import Campaign from "./containers/Campaign";
import Donation from "./containers/Donation";
import Donate from "./containers/Donate";
import Payment from "./containers/Payment";
import Home from "./containers/Home";
import { Switch, Route } from "react-router-dom";
import MyDonations from "./containers/MyDonations";
function App() {
<<<<<<< HEAD
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Auth} />
        <Route exact path="/signup" component={Auth} />
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
||||||| merged common ancestors
    return (
        <div className='App'>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/login' component={Auth} />
                <Route exact path='/signup' component={Auth} />
                <Route exact path='/my-donations' component={MyDonations} />
                <Route exact path='/my-fundraisers' component={Home} />
                <Route exact path='/my-favorites' component={() => <MyDonations deleteButton />} />
                <Route exact path='/logout' component={() => <Donate target={5000}> </Donate>} />
            </Switch>
        </div>
    );
=======
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Payment} />
        <Route exact path="/signup" component={Auth} />
        <Route exact path="/my-donations" component={MyDonations} />
        <Route exact path="/my-fundraisers" component={Home} />
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
>>>>>>> 3c0089ab8caec761461dad70d4246f7f76efe435
}

export default App;
