import React from 'react'
import TypingArea from './TypingArea'
import TimeRemaining from './TimeRemaining'
import Button from './Button'


function App() {

  return (
    <div className="App">
      <header className='header'>
        How fast do you type?
      </header>
      <TypingArea />
      <TimeRemaining />
      <Button />
    </div>
  )
}

export default App