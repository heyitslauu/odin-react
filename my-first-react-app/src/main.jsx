import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Greeting from './Greeting.jsx'
import {TestComponent1, TestComponent2} from "./Test.jsx"

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Greeting/>
    <TestComponent1/>
    <TestComponent2/>
  </React.StrictMode>,
)
