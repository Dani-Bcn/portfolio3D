import React, { useState } from 'react'
import {motion as m} from "framer-motion"
export default function NavHamburguer(props) {

const {handleClick} = props   
const [activeMenu, setActiveMenu] = useState(true)

  return (
    <m.main className='cnt-navHamburguer'> 
        <ul  onClick={()=>handleClick()}>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </m.main>
  )
}
