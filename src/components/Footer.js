import React from 'react'
import { useState } from 'react'
import '../styles/Footer.scss'
import close from '../images/icon-close.svg'
import image1 from '../images/image-rules.svg'

const Footer = () => {
    const [toggle, setToggle] = useState(false)
   

    
  return (
    <div className="footer">
       <div className="rules" onClick={()=>setToggle(!toggle)}>Rules</div> 
       {toggle && <div className="container-modal" onClick={()=>setToggle(!toggle)}>
        <div className='modal'  >
                <div className="title">
                    <div className="text">Rules</div>
                    <div className="icon"><img className='close' src={close} alt="" /></div>
                </div>
                <div className="img-rules">
                  <img  src={image1} alt="" />
                </div>
            </div>
       </div>}
       
        
    </div>
  )
}

export default Footer