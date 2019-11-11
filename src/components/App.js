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
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route path="/list/:name" component={list} />
        <Route path="/details/:id" component={details} />
      </Switch>
      <Footer />
    </Router>
  );
}
