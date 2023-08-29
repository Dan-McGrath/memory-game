import { useState, useEffect } from 'react';
import Card from './card/Card.jsx'
import '../styles/app.scss'


function App() {
  const [pokemonArray, setPokemonArray] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);

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

  return (
    <>
      <h1>Hello World</h1>
      <div className='game'>
        <Card index={pokemonArray[0]}/>
        <Card index={pokemonArray[1]}/>
        <Card index={pokemonArray[2]}/>
        <Card index={pokemonArray[3]}/>
        <Card index={pokemonArray[4]}/>
        <Card index={pokemonArray[5]}/>
        <Card index={pokemonArray[6]}/>
        <Card index={pokemonArray[7]}/>
        <Card index={pokemonArray[8]}/>
        <Card index={pokemonArray[9]}/>
        <Card index={pokemonArray[10]}/>
        <Card index={pokemonArray[11]}/>
      </div>
    </>
  )
}

export default App
