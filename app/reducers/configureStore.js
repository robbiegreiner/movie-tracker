import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './index.js';
import createHistory from '../node_modules/history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';

const history = createHistory();
const middleware = routerMiddleware(history);

const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
  applyMiddleware(middleware)
);

export default store;
