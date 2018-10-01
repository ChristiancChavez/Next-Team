import React from 'react';
import './App.scss';
import MainContent from './MainContent/MainContent';
import { Route, Link } from 'react-router-dom';

const App = () => {
    return (
      <div>
        <header>
          <Link to="/">Home</Link>
          <Link to="/about-us">About us</Link>
        </header>

        <main>
          <Route exact path="/" component={MainContent}/>
          {/* <Route exact path="/about-us" component={AboutUs} /> */}
        </main>
      </div>
    );
}

export default App;

