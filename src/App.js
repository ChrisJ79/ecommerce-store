import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, HashRouter, Link, Switch, Router, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shoppage';
import SignInAndRegister from './pages/sign-in-and-register/sign-in-and-register';
import Header from './components/header/header';
import {auth} from './firebase/firebase.utils';


class App extends Component {
    constructor() {
        super();
        this.state = {
            currentUser: null
        }
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
        auth.onAuthStateChanged(user => {
            this.setState({currentUser: user});
            console.log(user);
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }
    render() {
      return (
        <div>
          <Header currentUser={this.state.currentUser} />
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/shop" component={ShopPage} />
              <Route path="/signin" component={SignInAndRegister} />
            </Switch>
        </div>
      );
    }
}


export default App;
