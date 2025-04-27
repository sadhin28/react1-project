import { useState } from "react"

export default function Counter(){
    const [count,setcount]=useState(0);

    
    return(
        <div style={
         {
               border:'2px solid green'
         }
        }>
             <h3>Counter : {count} </h3>
             <button>Add</button>
        </div>
    )
}