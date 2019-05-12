import React from 'react';
import Home from './components/Home/Home'

export class App extends React.Component {
    render() {
        const msg = 'from App.js'
        return <Home loadMessage={ () => alert('I\'m passed from App to Home') } message={msg}/>
    } 
}

export default App;
