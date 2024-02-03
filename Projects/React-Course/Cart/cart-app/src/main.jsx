import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Router from './components/Router.jsx'
import { CartProvider } from './components/Context/CartContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <Router />
    </CartProvider>
  </React.StrictMode>,
);