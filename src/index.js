import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import reducer from './reducer/reducer';
import { createStore } from 'redux';
import { CookiesProvider } from 'react-cookie';

const store = createStore(reducer);

ReactDOM.render(
  <CookiesProvider>
      <Provider store={store} >
          <App />
      </Provider>
  </CookiesProvider>,
  document.getElementById('root')
)
