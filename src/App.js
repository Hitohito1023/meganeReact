import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import top from './components/main/top';
import login from './components/user/login';
import edit from './components/user/editUser';
import users from './components/user/userList';
import select from './components/user/selectUser';
import signup from './components/user/signup';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={top} />
        <Route path='/login' component={login} />
        <Route path='/users/edit' component={edit} />
        <Route path='/users' component={users} />
        <Route path='/users/select' component={select} />
        <Route path='/signup' component={signup} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
