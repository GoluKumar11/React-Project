import { useState } from "react"




function App() {
        const   [color, setColor] = useState("purple")


  return (
    <>
    <div className="w-full h-screen duration-200" style={{backgroundColor:color}} >

      <div className="fixed flex flex-wrap justify-center bottom-20 inset-x-0 px-2">
        <div className="fixed flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          
          <button onClick={() => setColor("red")}className="outLine-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"red"}}>red</button>

          <button onClick={() => setColor("blue")}className="outLine-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"blue"}}>blue</button>

          <button onClick={() => setColor("Green")}className="outLine-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"Green"}}>Green</button>

          <button onClick={() => setColor("white")} className="outLine-none px-4 py-1 rounded-full text-black shadow-black" style={{backgroundColor:"white"}}>white</button>

          <button onClick={() => setColor("Orange")} className="outLine-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"Orange"}}>Orange</button>

          <button onClick={() => setColor("yellow")}className="outLine-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"yellow"}}>yellow</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
