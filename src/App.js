import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TrendingMoviesPage from "./pages/TrendingMoviesPage";

function App() {
  return (
    <div className="app">
      <Router>
        <Nav />
        <Switch>
          <div className="app__body">
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/trending">
              <TrendingMoviesPage />
            </Route>
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
