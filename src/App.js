import React from 'react';

import Home from './components/Home/Home'

export class App extends React.Component {
    render() {
        return <Home loadMessage={() => {}}/>
    }
}

export default App;
