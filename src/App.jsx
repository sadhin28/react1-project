import './App.css'

function App() {
  
function handelClick(){
   alert('Hellow react')
}
const handelClick2=()=>{
  alert('handel Click 2')
}
  return (
    <>
     <h3>React Core Concept 2</h3>
     <button onClick={handelClick}>Click 1</button>
     <button onClick={handelClick2}>Click 2</button>
    </>
  )
}

export default App
