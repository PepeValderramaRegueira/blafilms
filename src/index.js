import React from 'react'
import ReactDOM from 'react-dom'
import FilmsProvider from './store'
import './index.css'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <FilmsProvider>
      <App />
    </FilmsProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
