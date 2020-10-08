import React from 'react';
import './App.scss';
import Campaign from './containers/Campaign';
import Donation from './containers/Donation';
import Donate from './containers/Donate';
import Payment from './containers/Payment';
import Home from './containers/Home';
import { Switch, Route } from 'react-router-dom';
import NewCampaign from './containers/NewCampaign';
function App() {
    return (
        <div className='App'>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/my-donations' component={Campaign} />
                <Route exact path='/my-fundraisers' component={Home} />
                <Route exact path='/logout' component={() => <Donate target={5000}> </Donate>} />
                <Route exact path='/campaign/new' component={NewCampaign} />
            </Switch>
        </div>
    );
}

export default App;
