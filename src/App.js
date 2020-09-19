import React from 'react';
import './App.scss';
import Campaign from './containers/Campaign';

import Donate from './containers/Donate';
import Payment from './containers/Payment';

function App() {
    return (
        <div className='App'>
            {
                // <Donate target={25000} />
                // <Campaign />
                <Payment />
            }
        </div>
    );
}

export default App;
