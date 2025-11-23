import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import './styles.css'
import { ShopProvider } from './ShopContext.jsx'

createRoot(document.getElementById('root')).render(
  <ShopProvider>
  <BrowserRouter>
    <App />
    </BrowserRouter>
    </ShopProvider>
)
