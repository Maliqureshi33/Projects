import React from 'react';
import './App.css';

import Home from './components/template/home.js';
import ProductListing from './components/template/productListing.js';
import ProductDetail from './components/template/productDetail.js';
import TopBar from './components/atoms/topBar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Router>
        <img src="/assets/topbanner.png" alt="topbanner" className="topBarImage" />
        <TopBar />
        <Switch>
          <Route exact={true} path="/">
            <Home />
          </Route>
          <Route path="/productListing">
            <ProductListing />
          </Route>
          <Route path="/productDetail/:id">
            <ProductDetail />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
