import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {Provider} from 'react-redux';
import ImageProvider from './components/ImageProvider';
import createSagaMiddleware from 'redux-saga';
import {createStore, applyMiddleware} from 'redux';
import {routerMiddleware, ConnectedRouter} from 'react-router-redux';
import reducers from './reducers';
import rootSaga from './sagas/root-saga';
import createHistory from 'history/createBrowserHistory';
import ErrorBoundary from './components/ErrorBoundary';
import config from 'client/javascripts/config';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const sagaMiddleware = createSagaMiddleware();
const history = createHistory();
const middlewares = applyMiddleware(
  sagaMiddleware,
  routerMiddleware(history),
);

const store = createStore(reducers, composeEnhancers(middlewares));
sagaMiddleware.run(rootSaga);


ReactDOM.render(
  <ImageProvider source={`${config.cdnUrl}${config.appRoute}/images`}>
    <Provider store={store}>
      <ErrorBoundary>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </ErrorBoundary>
    </Provider>
  </ImageProvider>,
  document.getElementById('app')
);