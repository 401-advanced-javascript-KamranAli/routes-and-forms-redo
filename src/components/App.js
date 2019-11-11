import React from 'react';
import {
  BrowserRouter as Router,
  Switch, Route
} from 'react-router-dom';
import Header from './Header/HeaderComp';
import Footer from './Footer/FooterComp';
import HomeContainer from '../containers/HomeContainer';
import ListContainer from '../containers/ListContainer';
import DetailsContainer from '../containers/DetailsContainer';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route path="/list/:name" component={ListContainer} />
        <Route path="/details/:id" component={DetailsContainer} />
      </Switch>
      <Footer />
    </Router>
  );
}
