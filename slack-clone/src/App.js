import Header from './component/Header';
import Sidebar from './component/Sidebar';
import './css/App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Chat from './component/Chat';

function App() {
  const [user, setUser] = useState(null);
  return (
    //BEM naming convention
    <div className='app'>
      <Router>
        {!user ? (
          <h1>LOGIN page</h1>
        ) : (
          <>
            {/* Header*/}
            <Header />
            <div className='app__body'>
              {/* Sidebar*/}
              <Sidebar />
              {/* React-Router->Chat screen*/}
              <Switch>
                <Route path='/room/:roomId'>
                  <Chat />
                </Route>
                <Route path='/'>
                  <h1>Welcome</h1>
                </Route>
              </Switch>
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
