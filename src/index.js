import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './styles/index.css';
import './styles/header/Header.css';
import './styles/header/Logo.css';
import './styles/menu/Menu.css';
import './styles/main/Main.css';
import './styles/main/About.css';
import './styles/main/Cart.css';
import './styles/main/Home.css';
import './styles/main/Product.css';
import './styles/main/Products.css';
import './styles/main/PurchaseConfirmation.css';
import './styles/footer/Footer.css';
import './styles/footer/Github.css';

import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
