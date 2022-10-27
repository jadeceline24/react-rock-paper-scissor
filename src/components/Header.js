import React from 'react'
import '../styles/Header.scss'

const Header = ({score}) => {
  return (
    <div className="header">
        <div className="text">
        <span>Rock</span>
        <span>Paper</span>
        <span>Scissor</span>
        </div>
        <div className="score">
            <span>Score</span>
            <div className="score-board">
                {score}
            </div>
        </div>
    </div>
  )
}

export default Header