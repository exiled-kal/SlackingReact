import React from 'react';
import './App.css';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <div className="app__body">
          <Sidebar />
          <Switch>
            
          </Switch>
          {/* React-Router -> Chat screen */}
        </div>
      </Router>
    </div>
  );
}

export default App;
