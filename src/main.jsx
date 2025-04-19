import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Add Ionicons (for mobile menu icons)
import { addIcons } from "ionicons";
import { menuOutline, closeOutline } from "ionicons/icons";

addIcons({
  "menu-outline": menuOutline,
  "close-outline": closeOutline,
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)