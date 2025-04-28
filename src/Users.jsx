import { useEffect, useState } from "react"

export default function Users(){
    const [users,setusers]= useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=> res.json())
        .then(data =>{
            setusers(data)
            console.log(data)
        })
        
    },[])
    return(
        <div>
            <h3>users: {users.length}</h3>
        </div>
    )
}
/**
 * 1. declare a state to hold the data
 * 2. use effect eith callback dependency array
 * 3.use fetch for  load data
 */