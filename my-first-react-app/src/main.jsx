import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Greeting from './Greeting.jsx'
import {TestComponent1, TestComponent2} from "./Test.jsx"
import { Rule1, Rule2 } from './Rules.jsx'
import { Template } from './Template.jsx'
import {Animals, Brands} from './List.jsx';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <Greeting/>
    <Animals/>
    <Brands/>
    <TestComponent1/>
    <TestComponent2/>
    <Rule1/>
    <Rule2/>
    <Template/> */}
    
  </React.StrictMode>,
)
