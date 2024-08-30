import { useState, useEffect, useRef } from 'react'
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

  // const [value,setValue]=useState(0);
  // const [isVisible,setVisible]=useState(true);

  // console.log(useRef(0));
  // const ref1 = useRef();

  // return (
  //   <>
  //     <h1>Value:{ref1.current}</h1>
  //     <input type="text" ref={ref1} />
  //     {/* <button onClick={()=>ref1.current++}>Increment</button> */}
  //   </>
  // )


  // return (
  //   <>
  //     <h1>Value:{value}</h1>
  //     <button onClick={()=>setValue(value+1)}>Increment</button>
  //     {isVisible ==true ? <TestComp /> :<></>}
  //     <button onClick={()=>setVisible(!isVisible)}>Toggle</button>
  //   </>
  // )



  const ref1=useRef();

  const handleClick=()=>{
    ref1.current+=1;
    console.log(ref1.current);
  }

  return(
    <>
    <h1>app</h1>
    <h2>Ref1.current:{ref1.current}</h2>
    <button onClick={handleClick}>Increment</button>
    <hr/>
    <h3>Value: {value}</h3>
    <button onClick={()=>setValue(value+1)}>Increment</button>
    </>
  )






}

export default App
