import { useState } from 'react'
import './App.css'
import Cards from './Cards';

function App() {
  const [score, setScore] = useState(0);
  const [bestscore, setBestscore] = useState(0);

  return (
    <>
      <header>
        <div className="title">
          <h1>Memory Game</h1>
          <p>Get points by clicking on an image but don't click on any more than once!</p>
        </div>
        <div className="score">
          <p>Score: {score}</p>
          <p>Best Score: {bestscore}</p>
        </div>
      </header>
      <main>
        <Cards  score={score} bestscore={bestscore} setScore={setScore} setBestscore={setBestscore}/>
      </main>
    </>
  )
}

export default App
