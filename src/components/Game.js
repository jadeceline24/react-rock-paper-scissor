import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Game.scss'

const Game = ({score,mychoice,setScore}) => {
    const [house, setHouse] = useState([])
    const [playerWin, setPlayerWin] = useState('')
    const [count, setCount] = useState(3)

    const houseChoice = () => {
        const choice = ['paper', 'scissor', 'rock']
        setHouse(choice[Math.floor(Math.random()*3)])
        
    }
    useEffect( ()=>{
        houseChoice()
    },[])
    
    const Result = () => {
        if (mychoice === 'rock' && house === 'scissor'){
            setPlayerWin('win')
            setScore(score+1)
        } else if (mychoice === 'rock' && house === 'paper'){
            setPlayerWin('lose')
            setScore(score-1)
        } else if (mychoice === 'scissor' && house === 'paper'){
            setPlayerWin('win')
            setScore(score+1)
        } else if (mychoice === 'scissor' && house === 'rock'){
            setPlayerWin('lose')
            setScore(score-1)
        } else if (mychoice === 'paper' && house === 'rock'){
            setPlayerWin('win')
            setScore(score+1)
        } else if (mychoice === 'paper' && house === 'scissor'){
            setPlayerWin('lose')
            setScore(score-1)
        } else {
            setPlayerWin('draw')
        }
    }
    useEffect( ()=>{
        const timer = count > 0 ? setTimeout( ()=>{
            setCount(count - 1) 
        },1000) : Result()
        return ()=> {clearTimeout(timer)}
    },[count, house])
    
   

  return (
    <div className="game">
        <div className="game__you">
            <div className="text">
                You Picked
            </div>
            <div className="game__icon">
                <div className={`icon icon-${mychoice} ${playerWin === 'win' ? `icon icon-${mychoice}--winner`: ''}`}></div>
            </div> 
        </div>
        {/* onClick is to reset setHouse choices */}
            {playerWin === 'win' &&  <div className="game__result"><div className="text">You Win</div>
            <Link to='/'><div className="play-again" onClick={()=>setHouse()}>Play Again</div></Link>
            </div>}

            {playerWin === 'lose' &&  <div className="game__result"><div className="text">You Lose</div>
            <Link to='/'><div className="play-again" onClick={()=>setHouse()}>Play Again</div></Link>
            </div>}

            {playerWin === 'draw' &&  <div className="game__result"><div className="text">Draw</div>
            <Link to='/'><div className="play-again" onClick={()=>setHouse()}>Play Again</div></Link>
            </div>}
            
        
        <div className="game__house">
            <div className="text">
                The House Picked
            </div>
            {count === 0 ? <div className="game__icon">
                <div className={`icon icon-${house} ${playerWin === 'lose' ? `icon icon-${house}--winner`: ''}`}></div>
            </div> : <div className="count">{count}</div>} 
            
           

        </div>
       

    </div>
  )
}

export default Game