import React from 'react';
import './App.css';
import { BrowserRouter, HashRouter, Link, Switch, Router, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shoppage';
import Header from './components/header/header';

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
);

function App() {
  return (
    <div>
      <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/hats" component={HatsPage} />
        </Switch>
    </div>
  );
}


export default App;
