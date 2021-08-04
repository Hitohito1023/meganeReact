import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <CookiesProvider>
      <Provider store={store} >
          <App />
      </Provider>
  </CookiesProvider>,
  document.getElementById('root')
)
