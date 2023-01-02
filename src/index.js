import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import { store } from './redux/store';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { blogApi } from "./redux/api/apiSlice";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ApiProvider api={blogApi}>
        <App />
      </ApiProvider>
    </Provider>
  </React.StrictMode>
);
