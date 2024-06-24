import React from 'react'
import ReactDOM from 'react-dom/client'
import './style/global/global.css'
import AppRouter from './pages/router'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
)
