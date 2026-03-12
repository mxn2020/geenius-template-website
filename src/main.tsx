import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { logger } from '~/lib/logger';
import App from './App';
import './index.css';

logger.info('Website template starting');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
