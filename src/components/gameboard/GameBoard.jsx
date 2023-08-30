import Card from "../card/Card.jsx"

export default function GameBoard({array, scoreHandler, endRound, reset}) {

    const shuffleCards = (arr) => {
        const newArray = arr.slice(0);
        for(let i = 0; i < newArray.length; i += 1) {
            const randInt = Math.floor(Math.random() * arr.length);
           [newArray[i], newArray[randInt]] = [newArray[randInt], newArray[i]];
        }
        return newArray
    }

    const arrayItems = shuffleCards(array).map((ele) => <Card reset={reset} key={ele} index={ele} scoreHandler={scoreHandler} endRound={endRound}/>)

    return (
        <>
        {arrayItems}
        </>
    )
}