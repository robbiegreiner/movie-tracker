import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './components/Routes.jsx';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './reducers/configureStore.js';
require('./styles/main.scss');

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Routes />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('main')
);
