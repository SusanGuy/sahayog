import React from 'react';
import './App.scss';
import Campaign from './containers/Campaign';

import Donate from './containers/Donate';

function App() {
    return (
        <div className='App'>
            {
                // <Donate target={25000} />
                <Campaign />
            }
        </div>
    );
}

export default App;
