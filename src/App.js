/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import TinderCards from './TinderCards';
import SwapeButtons from './SwapeButtons';
import Chats from "./Chats";
import './App.css';


function App() {
  return (
    <div className="App">
      <Router>

        <Switch>
          <Route path="/chat">
            <Header backButton="/" />
            <Chats />
          </Route>
          <Route path="/">
            <Header />
            <TinderCards />
            <SwapeButtons />
          </Route>

        </Switch>


      </Router>

    </div>
  );
}

export default App;

//  {/*Header */}


//       {/* Tinder Cards */}

//       {/* Buttons Below tinder cards */}

//       {/* Chats Screen*/}
//       {/* Individual Chat Screen */}