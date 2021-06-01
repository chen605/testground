import React, { useEffect } from 'react';
import './App.css';
import Nav from './components/Nav';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TrendingMoviesPage from './pages/TrendingMoviesPage';
import ActionPage from './pages/ActionPage';
import ComedyPage from './pages/ComedyPage';
import HorrorPage from './pages/HorrorPage';
import RomancePage from './pages/RomancePage';
import DocumentaryPage from './pages/DocumentaryPage';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import LandingPage from './pages/LandingPage';
import { auth } from './firebase/firebase';
import ProfilePage from './pages/ProfilePage';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //logged in
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        // logged out
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <LandingPage />
        ) : (
          <>
            <Nav />
            <Switch>
              <div className="app__body">
                <Route exact path="/">
                  <HomePage />
                </Route>
                <Route path="/profile">
                  <ProfilePage />
                </Route>
                <Route path="/trending">
                  <TrendingMoviesPage />
                </Route>
                <Route path="/action">
                  <ActionPage />
                </Route>
                <Route path="/comedy">
                  <ComedyPage />
                </Route>
                <Route path="/horror">
                  <HorrorPage />
                </Route>
                <Route path="/romance">
                  <RomancePage />
                </Route>
                <Route path="/documentaries">
                  <DocumentaryPage />
                </Route>
              </div>
            </Switch>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
