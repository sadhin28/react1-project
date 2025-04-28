import { useState } from "react"

export default function Team(){
    const [team,setTeam]=useState(11);

    const teamStyle={
        border: '2px solid purple',
        margin: '15px',
        padding: '15px',
        borderRadius : '15px'
    }
    return(
        <div style={teamStyle}>
            <h3>Team : {team}</h3>
        </div>
    )
}