import React, { Fragment, useEffect } from "react";
import "./App.scss";
import { connect } from "react-redux";
import { setAuthToken } from "./utils";
import { loadUser } from "./store/actions/authAction";
import Auth from "./containers/Auth";
import PrivateRoute from "./hoc/PrivateRoute";
import Campaign from "./containers/Campaign";
import Donate from "./containers/Donate";
import Payment from "./containers/Payment";
import MyFundraiser from "./containers/MyFundraiser";
import Home from "./containers/Home";
import { Switch, Route } from "react-router-dom";
import MyDonations from "./containers/MyDonations";
import NewCampaign from "./containers/NewCampaign";
import Hamburger from "./components/Hamburger";
import { setHamBurger } from "./store/actions/hamburgerAction";
if (localStorage.token) {
  setAuthToken(localStorage.token);
}
const App = ({ loadUser, hamBurgerIsVisible, setHamBurger }) => {
  useEffect(() => {
    loadUser();
  }, [loadUser]);
  return (
    <Fragment>
      {hamBurgerIsVisible && <Hamburger />}
      <Switch>
        <Route
          exact
          path="/"
          component={() => (
            <Home
              hamburger={hamBurgerIsVisible}
              setHamBurger={setHamBurger}
            ></Home>
          )}
        />
        <PrivateRoute exact path="/new-campaign" component={NewCampaign} />
        <Route exact path="/campaign/:id" component={Campaign} />
        <PrivateRoute exact path="/donate/:campaignId" component={Donate} />
        <PrivateRoute exact path="/pay/:campaignId" component={Payment} />
        <Route exact path="/login" component={Auth} />
        <Route exact path="/signup" component={Auth} />
        <PrivateRoute
          exact
          path="/my-fundraisers"
          component={() => (
            <MyFundraiser
              hamburger={hamBurgerIsVisible}
              setHamBurger={setHamBurger}
            ></MyFundraiser>
          )}
        />
        <PrivateRoute
          exact
          path="/my-donations"
          component={() => (
            <MyDonations
              hamburger={hamBurgerIsVisible}
              setHamBurger={setHamBurger}
            ></MyDonations>
          )}
        />
        <PrivateRoute
          exact
          path="/my-favorites"
          component={() => (
            <MyDonations
              deleteButton
              hamburger={hamBurgerIsVisible}
              setHamBurger={setHamBurger}
            ></MyDonations>
          )}
        />
        <PrivateRoute
          exact
          path="/logout"
          component={() => <Donate target={5000}> </Donate>}
        />
      </Switch>
    </Fragment>
  );
};

const mapStatetoProps = (state) => {
  return {
    hamBurgerIsVisible: state.hamBurger.hamBurgerIsVisible,
  };
};

export default connect(mapStatetoProps, { setHamBurger, loadUser })(App);
