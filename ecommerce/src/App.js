import React from 'react';
import './App.css';

import Home from './components/template/home.js';
import ProductListing from './components/template/productListing.js';
import ProductDetail from './components/template/productDetail.js';
import TopBar from './components/atoms/topBar';
import { Provider } from 'react-redux';
import {configureStore} from './redux/store/index'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const store = configureStore()
  return (
    <div className="App">
      <Provider store={store}>

      <Router>
        <Route exact={true} path="/">
          <img src="/assets/topbanner.png" alt="topbanner" className="topBarImage" />
        </Route>
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
      </Provider>
    </div>
  );
}

export default App;
