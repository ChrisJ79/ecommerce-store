import React, { Component } from 'react';
import './App.css';
import { HashRouter, Link, Switch, Router, Route } from 'react-router-dom';
import { connect } from "react-redux";
import { setCurrentUser } from './redux/user/user.actions'; 

import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shoppage';
import SignInAndRegister from './pages/sign-in-and-register/sign-in-and-register';
import Header from './components/header/header';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';


class App extends Component {
  
    unsubscribeFromAuth = null;

    componentDidMount() {
      const { setCurrentUser } = this.props;
      this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
        if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth);

          userRef.onSnapshot(snapShot => {
            setCurrentUser({
                id: snapShot.id,
                ...snapShot.data()
            });
          });
        }

        setCurrentUser(userAuth);
      });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }
    render() {
      return (
        <div>
          <Header/>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/shop" component={ShopPage} />
              <Route path="/signin" component={SignInAndRegister} />
            </Switch>
        </div>
      );
    }
}


const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
