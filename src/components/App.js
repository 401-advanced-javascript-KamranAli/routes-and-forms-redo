import React from 'react';
import {
  BrowserRouter as Router,
  Switch, Route
} from 'react-router-dom';
import Header from './Header/HeaderComp';
import Footer from './Footer/FooterComp';
import HomeContainer from '../containers/HomeContainer';

export default function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={HomeContainer} />
          <HomeContainer />
        </Switch>
      </Router>
      <Footer />
    </>
  );
}
