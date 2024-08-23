import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import TestComp from './components/Testcomp'
import './App.css'

function App(){
  // const [count, setCount] = useState(0)

  // const TestComp = () => {
  //   const [value,setValue]=useState(0)
  // }
  //   useEffect(() => {
  //     console.log('useEffect');
  //   }, [])
  //   useEffect(() => {
  //     console.log('Value changed',value);
  //   },[value])

  const [value,setValue]=useState(0);
  const [isVisible,setVisible]=useState(true);


  return (
    <>
      <h1>Value:{value}</h1>
      <button onClick={()=>setValue(value+1)}>Increment</button>
      {isVisible ==true ? <TestComp />:<></>}
      <button onClick={()=>setVisible(!isVisible)}>Toggle</button>
    </>
  )
}

export default App
