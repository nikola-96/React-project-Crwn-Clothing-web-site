import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Route } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';

const HatsPage = () => (
  <div>
    <h1>Hats page</h1>
  </div>
)
function App() {
  return (
    <div className="App">
      <Route exact path="/" component={HomePage} />
      <Route exact path="/shop" component={ShopPage} />
    </div>
  );
}

export default App;
