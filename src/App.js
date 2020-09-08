import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route,Redirect} from 'react-router-dom'
import Homepage from './HomePage/Homepage';

function App() {
  return (
    <div className="App">
      <Route path='/:vId' component={Homepage}/>
      <Route exact path="/" render={() => <Redirect to="/1"/>} />
    </div>
  );
}

export default App;
