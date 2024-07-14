import React from 'react'
import ReactDOM from 'react-dom/client'
import './style/global/global.css'
import AppRouter from './pages/router'
import { ThemeProvider } from './components/global/Theme-provider'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <AppRouter />
    </ThemeProvider>
  </React.StrictMode>
);
