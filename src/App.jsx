import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'; // Importez PersistGate
import Router from './router/Router';
import { store, persistor } from './store/store'; // Importez à la fois le store et le persistor

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router />
      </PersistGate>
    </Provider>
  );
}



