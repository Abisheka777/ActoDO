import axios from "axios"
import { useEffect, useState } from "react";
function App() {
  const [evalue, setevalue] = useState("")
  const [chocolate, setchocolate] = useState([])

  useEffect(function () {
    axios.get("http://localhost:5000/chocolist").
      then(function (data) {

        setchocolate(data.data)
      })
  },[])



  function handlevalue(event) {
    setevalue(event.target.value)
  }
  function add() {
    axios.post("http://localhost:5000/addchoco",{newchoco:evalue})
    setchocolate([...chocolate, {name:evalue}])
    setevalue("")

  }

  return (
    <div>
      <input onChange={handlevalue}></input>
      <button onClick={add}>Add</button>
      {chocolate.map(function (item, index) {
        return <h1 key={index}> {item.name} </h1>
      })}


    </div>

  )

}
export default App;

