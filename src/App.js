import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch,Route} from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';

const HatsPage = () => (
  <div>
    <h1>
      Hats Page
    </h1>
  </div>
);

function App() {
  return (
      <div>
       <Switch>
       <Route exact={true} path='/' component={HomePage}/>
       <Route path='/shop' component={ShopPage}/>
       </Switch>
      </div>
  );
}

export default App;
