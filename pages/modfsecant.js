import React, { useState } from 'react'

const modfsecant = () => {
  const [a, setfirstValue] = useState(0)
    const [b, setSecondValue] = useState(0)
    const [functionEq, setfunctionEq] = useState("")
    const [output, setOutput] = useState(0)
    const modifiedEqu = functionEq.replace(/([a-zA-Z0-9])\^/g, "**").toLowerCase()
    const eq = new Function("x", `return ${modifiedEqu}`);
  let i=0
  function  secant(a,b){
      let N=Math.round(Math.log((b-a)/0.01)/Math.log(2))
      let c = (b - eq(b) * ((b - a) / (eq(b) - eq(a)))).toFixed(4)
      let fqA = eq(a);
      let fqC = eq(c);
    while(i!=N && Math.abs(eq(c))>=0.01){
        a=c
        c = (b - eq(b) * ((b - a) / (eq(b) - eq(a)))).toFixed(4)
        fqA = fqC;
        fqC = eq(c);
        i++
    }
    setOutput(c)
    return c
   }
   
//    x**2-2*x-3 

      return (
        <div>
           <h1 className='m-2'>enter Function:</h1>
          <input type="text" name="" id="functEq"  onChange={(e)=>setfunctionEq(e.target.value)} placeholder="x**2-2*x - 3" className='border-2  border-black m-2 p-2'/>
          <h1 className='m-2'>enter A:</h1>
          <input type="text" name="" id=""   onChange={(e)=>setfirstValue(parseInt(e.target.value))} className='border-2 border-black m-2 p-2'/>
          <h1 className='m-2'>enter B:</h1>
          <input type="text" name="" id="B"  onChange={(e)=>setSecondValue(parseInt(e.target.value))}  className='border-2 border-black m-2 p-2'/>
         
          
          <h4 className='m-5 p-2'>{output}</h4>
          <button onClick={()=>secant(a, b)} className="p-2 border-black border-2 rounded-full m-2">calculate</button>
        </div>
      )
}

export default modfsecant