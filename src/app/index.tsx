import { Router } from '@app/providers';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';

export { router } from './router';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
