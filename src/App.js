import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Top from './components/Top';
import Login from './components/Login';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Top} />
        <Route path='/login' component={Login} />
        <Route path='/users/edit' component={edit} />
        <Route path='/users' component={users} />
        <Route path='/users/select' component={select} />
        <Route path='/signup' component={signup} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
