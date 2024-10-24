import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

declare global {
  interface Window {
    initFinancialCalculator?: (elementId: string) => void;
  }
}

// Create a global function to initialize the calculator
window.initFinancialCalculator = function(elementId: string) {
  const container = document.getElementById(elementId);
  if (container) {
    createRoot(container).render(<App />);
  }
};