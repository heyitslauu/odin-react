// import { useState } from 'react'

// import { List } from './PropsPass';
import { Button } from './Button';
import './App.css'
import { useState } from 'react';

function App() {
  // const [count, setCount] = useState(0)
  // const sampleArr = ['Cat', 'Dog', 'Duck', 'Geese'];

  const [counter, setCounter] = useState(0)

  // const handleButtonClick = (msg = "Hello") => {
  //   console.log(msg)
  // }

  const handleIncrement = () => {
    setCounter(counter + 1);
  }

  return (
    <>
      {/* <List animals={sampleArr} /> */}
      {/* <h1>Hello World</h1> */}
      {/* <Button fontSize={12} text="Click me!" color="blue"/>
      <Button fontSize={12} text="Dont Click me!" color="red"/> */}
      {/* <Button fontSize={20} handleClick={handleButtonClick}/> */}
      <h2>{counter}</h2>
      <Button fontSize={20} handleIncrement={handleIncrement}/>
    </>
  )
}

export default App
