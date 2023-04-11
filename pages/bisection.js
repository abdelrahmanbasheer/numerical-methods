import React, {useState } from 'react'

const bisection = () => { 
let TOLERANCE = 0.01;

 



// Prints root of func(x) with error of EPSILON
function bisection(a, b)
{
    if (eq(a) * eq(b) >= 0)
    {
      console.log("You have not assumed"
                     + " right a and b");
       
    }

    let c = 0;
    while ((b-a) >= TOLERANCE)
    {
        let sum=a+b
        c = sum/2;
       console.log(eq(c))
       console.log(eq(a))
        // Check if middle point is root
        if (eq(c) == 0.0)
            break;

        // Decide the side to repeat the steps
        else if (eq(c)*eq(a) < 0)
            b = c;
        else
            a = c;
    }
            //prints value of c upto 4 decimal places
    console.log("The value of " +
              "root is : "+ c.toFixed(4));

      
 
}

   


const [a, setfirstValue] = useState(0)
const [b, setSecondValue] = useState(0)
const [functionEq, setfunctionEq] = useState("")
const eq = new Function("x", `return ${functionEq}`);

  return (
    <div>
       <h1 className='m-2'>enter Function:</h1>
      <input type="text" name="" id="functEq" value={functionEq} onChange={(e)=>setfunctionEq(e.target.value)} placeholder="x**2-2*x - 3" className='border-2  border-black m-2 p-2'/>
      <h1 className='m-2'>enter A:</h1>
      <input type="text" name="" id=""  value={a} onChange={(e)=>setfirstValue(parseInt(e.target.value))} className='border-2 border-black m-2 p-2'/>
      <h1 className='m-2'>enter B:</h1>
      <input type="text" name="" id="B" value={b} onChange={(e)=>setSecondValue(parseInt(e.target.value))}  className='border-2 border-black m-2 p-2'/>
      <button onClick={()=>bisection(a, b)} className="p-2 border-black border-2 rounded-full ">calculate</button>
      <h4></h4>
     
    </div>
  )
}

export default bisection