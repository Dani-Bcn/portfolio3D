import React from 'react'
import Home from './components/Home'
import MainScene from './MainScene'

export default function MainHome(props) {

const {activeResponsive} = props
console.log(activeResponsive)
  return (
    <main>
        {
            activeResponsive ?
            <Home/> : <MainScene/>
            
        }
        
       
    </main>
  )
}
