import React from 'react';
import './App.css';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import {BrowserRouter as Router, Switch, Route} from 'react'

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <Sidebar />
        {/* React-Router -> Chat screen */}
      </div>
    </div>
  );
}

export default App;
