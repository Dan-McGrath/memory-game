import { useState, useEffect } from 'react';
import GameBoard from './gameboard/GameBoard.jsx';
import '../styles/app.scss'


function App() {
  const [pokemonArray, setPokemonArray] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [reset, setReset] = useState(true)

    useEffect(() => {
      const getIndexes = () => {
        const set = new Set();
        while(set.size < 12) {
          set.add(Math.floor(Math.random()* 150) + 1)
        }
        const setArray = Array.from(set)
        setPokemonArray(setArray)
        };
        getIndexes()
    }, [])

    const endRound = () => {
      if(currentScore > highScore) {
        setHighScore(currentScore)
      }
      setCurrentScore(0)
      setReset(true)
    }

    const scoreHandler = () => {
      setCurrentScore(() => currentScore + 1);
      setReset(false)
    }

  return (
    <>
      <h1>Memory Game</h1>
      <div className="score">
        <p>High Score: {highScore}</p>
        <p>Score: {currentScore}</p>
      </div>
      

      <div className='game'>
        <GameBoard reset={reset} array={pokemonArray} scoreHandler={scoreHandler} endRound={endRound}/>
      </div>
    </> 
  )
}

export default App
