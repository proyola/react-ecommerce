import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop-page/shop-page.component';
import Header from './components/header/header.component'
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUp}/>
      </Switch>
    </div>
  );
}

export default App;
