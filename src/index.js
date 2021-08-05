import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import createStore from './store/store';
import { CookiesProvider } from 'react-cookie';

export const store = createStore();

ReactDOM.render(
  <CookiesProvider>
      <Provider store={store} >
          <App />
      </Provider>
  </CookiesProvider>,
  document.getElementById('root')
)
