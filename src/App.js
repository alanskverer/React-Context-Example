import logo from './logo.svg';
import './App.css';
import { AppProvider } from './AppContext';
import Consumer from './Consumer';
import Users from './Users';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <AppProvider>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <Consumer />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
          </Switch>
        </Router>
      </div>
    </AppProvider>
  );
}

export default App;
