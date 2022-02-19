import useConfig from './config';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Products from 'screens/products';
import './App.css';

const App = () => {
  const { useStoreConfig, useAxiosInterceptor } = useConfig()
  useAxiosInterceptor()
  const { persistor, store } = useStoreConfig()

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <div className="App">
          <Products />
          <header className="App-header">
            <p>
              Edit <code>src/App.tsx</code> and save to reload Claudia.
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
