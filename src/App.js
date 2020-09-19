import React from 'react';
import './App.scss';
import Donation from './containers/Donation';
import Donate from './containers/Donate';

function App() {
    return (
        <div className='App'>
            <Donate limit={50000} />
        </div>
    );
}

export default App;
