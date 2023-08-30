import { useState, useEffect } from "react";

export default function Score({input}) {
    const [score, setScore] = useState(0);
    const [userInputArray, setUserInputArray] = useState([]);
    
    useEffect(() => {
        const checkInput = () => {
            if (!userInputArray.includes(input) && input !== ''){
                setScore(score + 1);
                setUserInputArray(
                  [
                    ...userInputArray,
                    input
                  ]
                )
              }
        }
        checkInput()
    }, [input, score, userInputArray])

    return (
        <>
            <p>Score: {score}</p>
        </>
    )
}