import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

const store = createStore(
  rootReducer,
  // () => {}, // this is the most basic reducer. A function that returns and object. Replace it.
  applyMiddleware(thunk, logger),
);

ReactDOM.render(
  <Provider store={store}>
  <Router>
  <App />
  </Router>
  </Provider>,
  document.getElementById('root')
);
