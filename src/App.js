import React, { Fragment } from 'react';
import './App.scss';
import Auth from './containers/Auth';
import PrivateRoute from './hoc/PrivateRoute';
import Campaign from './containers/Campaign';
import Donate from './containers/Donate';
import Payment from './containers/Payment';
import MyFundraiser from './containers/MyFundraiser';
import Home from './containers/Home';
import { Switch, Route } from 'react-router-dom';
import MyDonations from './containers/MyDonations';
import NewCampaign from './containers/NewCampaign';
function App() {
    return (
        <Fragment>
            <Switch>
                <Route exact path='/' component={Home} />
                <PrivateRoute exact path='/new-campaign' component={NewCampaign} />
                <Route exact path='/campaign/:id' component={Campaign} />
                <PrivateRoute exact path='/donate/:campaignId' component={Donate} />
                <PrivateRoute exact path='/pay/:campaignId' component={Payment} />
                <Route exact path='/login' component={Auth} />
                <Route exact path='/signup' component={Auth} />
                <Route exact path='/my-fundraisers' component={MyFundraiser} />
                <Route exact path='/my-donations' component={MyDonations} />

                <PrivateRoute exact path='/my-favorites' component={() => <MyDonations deleteButton />} />
                <PrivateRoute exact path='/logout' component={() => <Donate target={5000}> </Donate>} />
            </Switch>
        </Fragment>
    );
}

export default App;
