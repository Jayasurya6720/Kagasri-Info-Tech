import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'boxicons/css/boxicons.min.css';
import { HelmetProvider } from 'react-helmet-async'; // ✅ import HelmetProvider

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider> {/* ✅ wrap App */}
      <App />
    </HelmetProvider>
  </React.StrictMode>
);

reportWebVitals();
