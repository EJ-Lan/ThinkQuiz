import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { DecksContextProvider } from './context/DecksContext';    

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DecksContextProvider>
      <App />
    </DecksContextProvider>
  </React.StrictMode>
);

