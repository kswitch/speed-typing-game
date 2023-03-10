import React from 'react'

export default function SetTime(props) {
    return (
        <label className='time-label'>
            Set Your Time:
            <input
                className='time-input' 
                type="number" 
                onChange={e => props.handleTimeChange(e)} 
                disabled={props.gameStarted}
                value={props.timeInput}
                min={1}
                max={99999}
            />
        </label>
    )
}