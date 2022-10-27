import React from 'react'
import { Link } from 'react-router-dom'
import Triangle from '../images/bg-triangle.svg'
import '../styles/Play.scss'

const Play = ({setMychoice}) => {
    const getValue = (e)=>{
        setMychoice(e.target.dataset.id)
        console.log(setMychoice)
    }
  return (
    <div className="play">
        <img src={Triangle} className="triangle" alt="" />

       <div className="play__you">
        <Link to='/game'>
            <div data-id='paper' className="icon icon-paper" onClick={getValue}></div>
        </Link>
        <Link to='/game'>
            <div data-id='scissor' className="icon icon-scissor" onClick={getValue}></div>
        </Link>
        <Link to='/game'>
            <div data-id='rock' className="icon icon-rock" onClick={getValue}></div>
        </Link>
        </div> 
        <div className="play__house">

        </div>
    </div>
  )
}

export default Play