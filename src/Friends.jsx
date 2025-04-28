import './friends.css'
export default function Friends({friend}){
   const {name,email,id}=friend;

    return(
        <div className='box'>
            <h4>Name :{name} </h4>
            <p>Email : {email}</p>
            <p>Id: {id}</p>
        </div>
    )
}