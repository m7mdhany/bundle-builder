import "./styles/variables.css";

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import BundleProvider from './context/BundleProvider.jsx'

createRoot(document.getElementById('root')).render(
    <BundleProvider>
      <App />
    </BundleProvider>
)
