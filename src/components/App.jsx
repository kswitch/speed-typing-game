import React, {useState, useEffect} from 'react'
import TypingArea from './TypingArea'
import TimeRemaining from './TimeRemaining'
import SetTime from './SetTime'
import Button from './Button'

function App() {
  const [gameStarted, setGameStarted] = useState(false)
  const [result, setResult] = useState(false)
  const [gameEnded, setGameEnded] = useState(false)
  const [text, setText] = useState("")
  const [timeInput, setTimeInput] = useState('')
  const [typeTime, setTypeTime] = useState('')
  const [time, setTime] = useState(0)
  const [wordCount, setWordCount] = useState(0)

  function startGame() {
    if (timeInput < 1) {
      return alert('Please set a time')
    }
    setGameStarted(true)
    setTime(timeInput)
    setTypeTime(timeInput)
    setText("")
    setWordCount(0)
    setGameEnded(false)
  }

  function handleChange(e) {
    const textArea = document.querySelector('.typing-area')
    textArea.style.height = 'auto';
    textArea.style.height = textArea.scrollHeight + 'px';

    setText(e.target.value)
    handleWords(e.target.value)
  }

  function handleTimeChange(e) {
    setTimeInput(e.target.value);
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
    setTimeInput('')
    setGameEnded(true)
    // setResult(false)
  }

  useEffect(() => {
    if (!time <= 0) {
      setTimeout(reduceTime, 1000);
    }
    else {
      endGame()
    }
  },[time])

  useEffect(() => {
    if (gameStarted) {
      setResult(true)
      return
    }
  },[gameStarted])

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

      <SetTime 
        gameStarted={gameStarted}
        handleTimeChange={handleTimeChange}
        timeInput={timeInput}
      />

      <TimeRemaining 
        time={time}
      />

      <Button 
        startGame={startGame} 
        gameStarted={gameStarted} 
      />

      <header className='header'>
        <p> Word Count: {wordCount} {result && gameEnded && `words in ${typeTime} secs`} </p>
      </header>
    </div>
  )
}

export default App