import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from "./StateProvider";
import Payment from './Payment';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from './Orders';

const promise = loadStripe('pk_test_51HQvOXI3Uh53RTia512pe6vhHjpbJWnxwx7vOIoM33a54osDwENqcATMv4O6Gk2CRE4E0yMxYgQwNaDzyNNUwEfH001nnqpN3c');

function App() {

  const [{ }, dispath] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log("user is ", authUser)

      if (authUser) {
        //logged in
        dispath({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // the user is logged out
        dispath({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="App">
        <Switch>
        <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
