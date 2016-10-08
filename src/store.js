import { createStore } from 'redux';
import rootReducer from './reducers';
const attachDevTools = () => {
  return window.devToolsExtension ? window.devToolsExtension() : undefined;
};

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, attachDevTools());

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};
