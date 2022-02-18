import React from 'react';
import useConfig from './config';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import './App.css';

const App = () => {
  const { useStoreConfig } = useConfig()
  const { persistor, store } = useStoreConfig()
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <div className="App">
          <header className="App-header">
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      </PersistGate>
    </Provider>

  );
}

export default App;
