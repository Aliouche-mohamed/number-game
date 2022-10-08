import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GameProvider } from './components/Context/GameContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GameProvider>
    <App />
  </GameProvider>
);
