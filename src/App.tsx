import useConfig from './config';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Products from 'screens/products';
import ShoppingCar from 'screens/shoppingCar';

const App = () => {
  const { useStoreConfig, useAxiosInterceptor } = useConfig()
  useAxiosInterceptor()
  const { persistor, store } = useStoreConfig()

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/shopping-car" element={<ShoppingCar />} />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
