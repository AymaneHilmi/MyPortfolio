import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { EasterEggProvider } from './context/EasterEggContext';
import { Toaster } from 'react-hot-toast';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <React.StrictMode>
      <EasterEggProvider>
        <App />
        <Toaster position="bottom-right" />
      </EasterEggProvider>
    </React.StrictMode>
  </div>
);

reportWebVitals();
