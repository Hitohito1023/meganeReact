import React from 'react';
import { Redirect, BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/header'
import{ useCookies } from "react-cookie"

import Top from './components/main/top';
import login from './components/user/login';
import edit from './components/user/editUser';
import users from './components/user/userList';
import SelectUser from './components/user/selectUser';
import signup from './components/user/signup';

function App() {
  return (
    <BrowserRouter>
    <Header/>
      {/* <Switch> */}
      {/* <Route exact path='/login' component={login} /> */}
      {/* {useCookies('isSignedIn') ? */}
        <Switch>
          <Route exact path='/' component={Top} />
          <Route path='/users/edit' component={edit} />
          <Route exact path='/users' component={users} />
          <Route path='/users/:id' component={SelectUser} />
          <Route path='/signup' component={signup} />
        </Switch>
      {/* :<Redirect to={'/login'} />} */}
        
      {/* </Switch> */}
    </BrowserRouter>
  );
};

export default App;
