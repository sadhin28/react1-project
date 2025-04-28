import { useEffect, useState } from "react"
import './Friends.css'
import Friends from "./Friends"
export default function Friend(){
  
    const [friend,setfriend]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res =>res.json())
        .then(data =>{
            setfriend(data)
        })
    },[])
    return(
        <div className="box">
            <h3>Friends : {friend.length} </h3>
            {
                friend.map(friend => <Friends friend={friend} ></Friends>)
            }
        </div>
    )
}