import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/header'

import Auth from './components/user/auth'

import top from './components/main/top';
import login from './components/user/login';
import edit from './components/user/editUser';
import users from './components/user/userList';
import select from './components/user/selectUser';
import signup from './components/user/signup';

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Switch>
      <Route exact path='/login' component={login} />
      <Auth>
        <Switch>
        <Route path='/' component={top} />
        <Route path='/users/edit' component={edit} />
        <Route path='/users' component={users} />
        <Route path='/users/select' component={select} />
        <Route path='/signup' component={signup} />
        </Switch>
      </Auth>
        
      </Switch>
    </BrowserRouter>
  );
};

export default App;
