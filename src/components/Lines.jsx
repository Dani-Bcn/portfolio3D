import React from 'react'

export default function Lines() {

    const lines =[20,40,60,370,350,330]
  return (
    <main>
         {
      lines.map((e,i) => {
        return(
        <div
         key={i}
          style={{
          position:"absolute",
         zIndex:1,
          width:2,
          height:4750,
          backgroundColor:"rgba(255,0,255,0.1)",
          marginLeft:e }}
        ></div>
        )})
        }
    </main>
  )
}
