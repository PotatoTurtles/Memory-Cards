import { useState } from 'react'
import './App.css'
import Cards from './Cards';

function App() {
  const [index, setIndex] = useState([]);

  return (
    <>
      <header>
        <div className="title">
          <h1>Memory Game</h1>
          <p>Get points by clicking on an image but don't click on any more than once!</p>
        </div>
        <div className="score">
          <p>Score: {0}</p>
          <p>Best Score</p>
        </div>
      </header>
      <main>
        <Cards val={index} setVal={setIndex} />
      </main>
    </>
  )
}

export default App
