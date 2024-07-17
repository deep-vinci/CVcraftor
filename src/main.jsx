import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Header from "./Header.jsx"
import MainBody from "./MainBody.jsx"
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <MainBody />
  </React.StrictMode>,
)
