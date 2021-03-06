import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch,Route} from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import Header from './components/header/header.component';


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
        <Header />
       <Switch>
       <Route exact={true} path='/' component={HomePage}/>
       <Route path='/shop' component={ShopPage}/>
       <Route path='/signin' component={SignInPage}/>
       </Switch>
      </div>
  );
}

export default App;
