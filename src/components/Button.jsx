import React from 'react'

export default function Button(props) {

    return (
        <button 
            onClick={props.startGame} 
            className='btn' 
            disabled={props.gameStarted}
        >
            START
        </button>
    )
}