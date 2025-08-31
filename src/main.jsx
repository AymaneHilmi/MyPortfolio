import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { EasterEggProvider } from './context/EasterEggContext';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <EasterEggProvider>
        <App />
        <Toaster position="bottom-right" />
      </EasterEggProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();

