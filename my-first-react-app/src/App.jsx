// import { useState } from 'react'

import { List } from './PropsPass';
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const sampleArr = ['Cat', 'Dog', 'Duck', 'Geese'];

  return (
    <>
      <List animals={sampleArr} />
      <h1>Hello World</h1>
    </>
  )
}

export default App
