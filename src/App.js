import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TrendingMoviesPage from "./pages/TrendingMoviesPage";
import ActionPage from "./pages/ActionPage";
import ComedyPage from "./pages/ComedyPage";
import HorrorPage from "./pages/HorrorPage";
import RomancePage from "./pages/RomancePage";
import DocumentaryPage from "./pages/DocumentaryPage";

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
            <Route exact path="/action">
              <ActionPage />
            </Route>
            <Route exact path="/comedy">
              <ComedyPage />
            </Route>
            <Route exact path="/horror">
              <HorrorPage />
            </Route>
            <Route exact path="/romance">
              <RomancePage />
            </Route>
            <Route exact path="/documentaries">
              <DocumentaryPage />
            </Route>
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
