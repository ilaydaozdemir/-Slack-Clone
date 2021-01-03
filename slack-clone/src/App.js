import Header from './component/Header';
import Sidebar from './component/Sidebar';
import './css/App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    //BEM naming convention
    <div className='app'>
      <Router>
        {/* Header*/}
        <Header />
        <div className='app__body'>
          {/* Sidebar*/}
          <Sidebar />
          {/* React-Router->Chat screen*/}
          <Switch>
            <Route path='/room/:roomId'>
              <h1>Chat screen</h1>
            </Route>
            <Route path='/'>
              <h1>Welcome</h1>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
