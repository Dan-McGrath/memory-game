import { useState, useEffect } from "react";

export default function Card({index, scoreHandler, endRound, reset}) {
    const [pokemonImg, setPokemonImg] = useState('');
    const [pokemonName, setPokemonName] = useState('');
    const [isSelected, setIsSelected] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}/`)
            const data = await response.json();
            setPokemonImg(data.sprites.front_default)
            // Capitalize first letter
            const pokemonNameTitle = data.name.charAt(0).toUpperCase() + data.name.slice(1);
            setPokemonName(pokemonNameTitle)
        };
        fetchData()
    }, [index]);

    useEffect(() => {
		if (reset) {
			setIsSelected(false);
		}
	}, [reset]);

    const clickHandler = () => {
        setIsSelected(!isSelected);
        if(isSelected) {
            endRound()
        } else {
            scoreHandler()
        }
        
    }


    return (
        <div className="card" onClick={clickHandler} data-name={pokemonName}>
            <img src={pokemonImg} alt={pokemonName}/>
            <p>{pokemonName}</p>
        </div>
    )
}