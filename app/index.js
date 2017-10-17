import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './components/Routes.jsx';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import DevTools from './containers/DevTools.js';

const initialState = {};

const store = createStore(
  rootReducer,
  initialState,
  DevTools.instrument()
);


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Routes />
        <DevTools />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('main')
);
