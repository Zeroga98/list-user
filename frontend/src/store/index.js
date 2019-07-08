import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { routerMiddleware } from 'connected-react-router'
import { logger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducers from './reducers';
import rootSaga from './sagas';
import { env_production } from '../common/enviroment';

export default (history) => {

  const sagaMiddleware = createSagaMiddleware();
  const routeMiddleware = routerMiddleware(history)

  let middleware = [sagaMiddleware, routeMiddleware]
  if (!env_production) {
    middleware = [...middleware, logger]
  }

  const store = createStore(
    rootReducers(history),
    composeWithDevTools(
      applyMiddleware(...middleware)
    )
  );
  
  sagaMiddleware.run(rootSaga);
  
  return store
}