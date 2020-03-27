import React, { Component } from 'react';
import './App.css';
import { HashRouter, Link, Switch, Router, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shoppage';
import SignInAndRegister from './pages/sign-in-and-register/sign-in-and-register';
import Header from './components/header/header';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';


class App extends Component {
    constructor() {
        super();
        this.state = {
            currentUser: null
        }
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
      this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
        if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth);

          userRef.onSnapshot(snapShot => {
            this.setState({
              currentUser: {
                id: snapShot.id,
                ...snapShot.data()
              }
            });

            console.log(this.state);
          });
        }

        this.setState({ currentUser: userAuth });
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


export default App;
