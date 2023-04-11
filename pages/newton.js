import React, { useState } from 'react'
import { derivative } from "mathjs";
const newton = () => {
    const [a, setfirstValue] = useState(0)
    const [output, setOutput] = useState(0)
    const [functionEq, setfunctionEq] = useState("")
    const derev = derivative(functionEq, "x").toString();
    const modifiedDer = derev.replace(/\^/g, "**")
    const derevreq = new Function("x", `return ${modifiedDer}`);
    const modifiedEqu = functionEq.replace(/\^/g, "**").toLowerCase();
    const eq = new Function("x", `return ${modifiedEqu}`);
    function newton(a){
    let fun=eq(a)
    let derevFun=derevreq(a)

    while(Math.abs(eq(a))>0.01){
      a=a-(eq(a)/derevreq(a))
      fun=eq(a)
      derevFun=derevreq(a);


    }
    setOutput(a.toFixed(4))
    }
    //    x^2-2*x-3 
      return (
        <div>
           <h1 className='m-2'>enter Function:</h1>
          <input type="text" name="" id="functEq" value={functionEq} onChange={(e)=>setfunctionEq(e.target.value)} placeholder="x^2-2*x - 3" className='border-2  border-black m-2 p-2'/>
          <h1 className='m-2'>enter Xi:</h1>
          <input type="text" name="" id=""   onChange={(e)=>setfirstValue(parseInt(e.target.value))} className='border-2 border-black m-2 p-2'/>
          <h4 className='m-5 p-2'>{output}</h4>
          <button onClick={()=>newton(a)} className="p-2 border-black border-2 rounded-full m-2">calculate</button>
        </div>
      )
}

export default newton