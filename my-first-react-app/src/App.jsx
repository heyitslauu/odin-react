// import { useState } from 'react'

// import { List } from './PropsPass';
import { Button } from './Button';
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  // const sampleArr = ['Cat', 'Dog', 'Duck', 'Geese'];

  const handleButtonClick = (msg = "Hello") => {
    console.log(msg)
  }

  return (
    <>
      {/* <List animals={sampleArr} /> */}
      {/* <h1>Hello World</h1> */}
      {/* <Button fontSize={12} text="Click me!" color="blue"/>
      <Button fontSize={12} text="Dont Click me!" color="red"/> */}
      <Button fontSize={20} handleClick={handleButtonClick}/>
    </>
  )
}

export default App
