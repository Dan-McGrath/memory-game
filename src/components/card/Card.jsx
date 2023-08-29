import { useState, useEffect } from "react";

export default function Card({index}) {
    const [pokemonImg, setPokemonImg] = useState('');
    const [pokemonName, setPokemonName] = useState('');

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
    return (
        <div className="card">
            <img src={pokemonImg} alt={pokemonName} />
            <p>{pokemonName}</p>
        </div>
    )
}