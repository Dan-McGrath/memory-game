import { useState, useEffect } from 'react';
import Card from './card/Card.jsx'
import Button from './button/Button.jsx';
import Score from './score/Score.jsx';
import '../styles/app.scss'


function App() {
  const [pokemonArray, setPokemonArray] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  const [startGame, setStartGame] = useState(false)
  const [input, setInput] = useState('');

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

    const startGameHandler = () => {
      setStartGame(!startGame)
    }

    const resetGameHandler = () => {
      setStartGame(!startGame)
    }

    const inputHandler = (e) => {
      setInput(e.currentTarget.dataset.name);
    }

  const arrayItems = pokemonArray.map((ele) => <Card handler={inputHandler} key={ele} index={ele}/>)

  return (
    !startGame ?
    <>
      <h1>Hello World</h1>
      <div className='game'>
        {arrayItems}
      </div>
      <Button text='Start Game' handler={startGameHandler}/>
    </> :

    <>
      <div className='score'>
        <Score input={input}/>
      </div>
      <div className='game'>
        {arrayItems}
      </div>
      <Button text='Reset Game' handler={resetGameHandler}/>
    </>
  )
}

export default App
