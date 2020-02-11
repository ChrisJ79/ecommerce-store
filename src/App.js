import React from 'react';
import './App.css';
import { BrowserRouter, HashRouter, Link, Switch, Router, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shoppage';
import SignInAndRegister from './pages/sign-in-and-register/sign-in-and-register';
import Header from './components/header/header';


function App() {
  return (
    <div>
      <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndRegister} />
        </Switch>
    </div>
  );
}


export default App;
