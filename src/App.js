import React from 'react';
import './App.css';
import { BrowserRouter, HashRouter, Link, Switch, Router, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shoppage';

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
);

function App() {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path="/#/shop" component={ShopPage} />
      <Route path="/#/hats" component={HatsPage} />
    </Switch>
  );
}


export default App;
