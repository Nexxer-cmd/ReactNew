import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] = useState(5)

  //let counter = 5

  const addValue = () => {
    setCounter(counter => counter + 1)
    setCounter(counter => counter + 1)
    setCounter(counter => counter + 1)
    setCounter(counter => counter + 1)
    if(counter>=20){
      setCounter(20)
    }
  }

  const removeValue = () => {
    setCounter(counter-1)
    if(counter<=0){
      setCounter(0)
    }
  }

  return (
    <>
     <h1>Chai aur react</h1> 
     <h2>Counter Value :{counter} </h2>

     <button onClick={addValue}>Add Value by 1</button>
     <br />
     <button onClick={removeValue}>Remove Value by 1</button>
    </>
  ) 
}

export default App
