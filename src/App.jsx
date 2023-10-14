import Home from "./Component/Home"
import { Route,Routes } from "react-router-dom"
import Room from "./Component/Room"

function App() {
 

  return (
    <>
     <Routes>
     <Route exact path="/" element={ <Home/>}/>
     <Route exact path="/room/:roomId" element={ <Room/>}/>

     </Routes>
    </>
  )
}

export default App
