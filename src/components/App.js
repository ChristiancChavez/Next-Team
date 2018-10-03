import React from 'react';
import './App.scss';
import MainContent from './MainContent/MainContent';
import SessionUser from './SessionUser/SessionUser';
import CreateMatch from './CreateMatch/CreateMatch';
import { Route, Link, Switch } from 'react-router-dom';

const App = () => {
    return (
      <div>
        <header>
          <Link to="/">Home</Link>
          <Link to="/about-us">About us</Link>
        </header>

        <main>
          <Switch>
            <Route exact path="/" component={MainContent}/>
            <Route exact path="/session-user" component={SessionUser}/>
            <Route exact path="/create-match" component={CreateMatch}/>
            {/* <Route exact path="/about-us" component={AboutUs} /> */}
          </Switch>
        </main>
      </div>
    );
}

export default App;

