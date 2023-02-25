import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './Global.css';

const root = document.getElementById('root');
const reactRoot = ReactDOM.createRoot(root);

reactRoot.render(<App />);