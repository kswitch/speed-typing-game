import React, {useState, useEffect} from 'react'
import TypingArea from './TypingArea'
import TimeRemaining from './TimeRemaining'
import Button from './Button'


function App() {
  const [gameStarted, setGameStarted] = useState(false)
  const [text, setText] = useState("")
  const [time, setTime] = useState(0)
  const [wordCount, setWordCount] = useState(0)

  function startGame() {
    setGameStarted(true)
    setTime(20)
  }

  function handleChange(e) {
    const textArea = document.querySelector('.typing-area')
    textArea.style.height = 'auto';
    textArea.style.height = textArea.scrollHeight + 'px';

    setText(e.target.value)
    handleWords(e.target.value)
  }

  function handleWords(words) {
    const wordsArr = words.trim('').split(" ")
    setWordCount(wordsArr[0].length ? wordsArr.length : 0)
  }

  function reduceTime() {
    setTime(prevTime => prevTime - 1)
  }

  function endGame() {
    setGameStarted(false)
    setTime(0)
  }

  useEffect(() => {
    if (!time <= 0) {
      setTimeout(reduceTime, 1000);
    }
    else {
      endGame()
    }
  },[time, gameStarted])

  return (
    <div className="App">
      <header className='header'>
        How fast do you type?
      </header>
      <TypingArea 
        gameStarted={gameStarted}
        text={text}
        handleChange={handleChange}
      />
      <TimeRemaining 
        time={time}
      />
      <Button 
        startGame={startGame} 
        gameStarted={gameStarted} 
      />

      <header className='header'>
        Word Count: {wordCount}
      </header>

    </div>
  )
}

export default App