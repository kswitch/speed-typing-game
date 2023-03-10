import React from 'react'

export default function TimeRemaining(props) {

    return (
      <div className="time">
        Time Remaining: {props.time}secs
      </div>
    )
}