
import React, { useState } from 'react'
import Header from '../components/Header'
import SideBar from '../components/SideBar'

const Main = () => {
  const [operDrawer, setOperDrawer] = useState(true);
  
  const toggleDrawer=()=>{
    setOperDrawer(PrevData=>!PrevData)  
  }

  return (
    <div>
        <Header toggleDrawer={toggleDrawer} />
        <SideBar operDrawer={operDrawer}/>
        <div>Display Mails</div>
    </div>
  )
}

export default Main