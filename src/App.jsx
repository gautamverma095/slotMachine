import React from "react"
import SlotMachine from "./SlotMachine"



const  App = () => {
  return (
    <>
      <h1 className="heading_style">
      🎰  Welcome to  <span style= {{ fontWeight: 1200 }}>Slot machine game </span> 🎰 
        </h1>
  <div>
         <SlotMachine  x = "😃"  y = "😃" z = "😃" />
        <SlotMachine  x = "🍎"  y = "🍌"  z = "🍎" />
        <SlotMachine  x="🍨"  y = "🍫" z ="🍫"/>
  </div>
       
    </>
  )

}
export default App