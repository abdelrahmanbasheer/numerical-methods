import React, { useState } from 'react'

const fixed = () => {
    const [a, setfirstValue] = useState(0.0)
    const [b, setSecondValue] = useState(0)
    const [functionEq, setfunctionEq] = useState("")
    const [output, setOutput] = useState(0)
    const modifiedEqu = " (Math.E**-x)-x"
    const modifiedG=modifiedEqu.concat("+","x")
    const eq = new Function("x", `return ${modifiedEqu}`);
    const geq=new Function("x", `return ${modifiedG}`);
    let i=0;
    function fixed(a,b){
        while(i!=5){
            a=geq(a)
           geq(a)

            i++
        }
        setOutput(a.toFixed(4))
        
    }
    return (
        <div>
           <h1 className='m-2'>enter Function:</h1>
          <input type="text" name="" id="functEq" value={""} onChange={(e)=>setfunctionEq(e.target.value)} placeholder="x**2-2*x - 3" className='border-2  border-black m-2 p-2'/>
          <h1 className='m-2'>enter Xi:</h1>
          <input type="text"    typeof="number" step="any" onChange={(e)=>setfirstValue(parseFloat(e.target.value))} className='border-2 border-black m-2 p-2' />
          <h1 className='m-2'>enter no of iterations:</h1>
          <input type="text" name="" id="B"  onChange={(e)=>setSecondValue(parseInt(e.target.value))}  className='border-2 border-black m-2 p-2'/>
         
          
          <h4 className='m-5 p-2'>{output}</h4>
          <button onClick={()=>fixed(a)} className="p-2 border-black border-2 rounded-full m-2">calculate</button>
        </div>
      )
}

export default fixed