import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './samples/node-api'
import './index.css'
import { configureStore } from '@reduxjs/toolkit'
import globalReducer from './state'
import { Provider } from 'react-redux'

const store=configureStore({
      reducer: {
            global: globalReducer,
      },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <React.StrictMode>
            <Provider store={store}>
                  <App/>
            </Provider>
      </React.StrictMode>
);
   
