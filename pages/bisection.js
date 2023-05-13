import Hero from '@/components/Hero';
import LowerHero from '@/components/LowerHero';
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
    <Hero></Hero>
     <LowerHero></LowerHero>
    </div>
  )
}

export default bisection