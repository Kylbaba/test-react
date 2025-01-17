import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './components/App';

// const rootElement = document.getElementById('root');
// const reactRoot = ReactDOM.createRoot('rootElement');

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
