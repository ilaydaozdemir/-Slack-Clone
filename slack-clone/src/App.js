import Header from './component/Header';
import Sidebar from './component/Sidebar';
import './css/App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Chat from './component/Chat';
import Login from './component/Login';
import { useStateValue } from './component/StateProvider';

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    //BEM naming convention
    <div className='app'>
      <Router>
        {!user ? (
          <Login />
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
