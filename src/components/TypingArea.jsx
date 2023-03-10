import React from 'react'

export default function TypingArea(props) {
    return (
        <textarea 
            ref={props.typingArea}
            onChange={e => props.handleChange(e)} 
            className="typing-area" 
            disabled={!props.gameStarted}
            value={props.text}
        />
    )
}