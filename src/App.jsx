import './App.css'

function App() {
  
function handelClick(){
   alert('Hellow react')
}
const handelClick2=()=>{
  alert('handel Click 2')
}
const addToFive = (number)=>{
    alert(number + 5)
}
  return (
    <>
     <h3>React Core Concept 2</h3>
     <button onClick={handelClick}>Click 1</button>
     <button onClick={handelClick2}>Click 2</button>
     <button onClick={()=>{alert('click 3')}}>Click 3</button>
     //parameter pass using arrow function
     <button onClick={()=>addToFive(3)}>AddToFive</button>
    </>
  )
}

export default App
