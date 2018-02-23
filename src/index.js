import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import reducers from './Reducers';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
const boundCompose = compose.bind(null, applyMiddleware());
const store = createStore(reducers);








ReactDOM.render( <Provider store={store}>
  <App />
</Provider>, document.getElementById('root'));
registerServiceWorker();