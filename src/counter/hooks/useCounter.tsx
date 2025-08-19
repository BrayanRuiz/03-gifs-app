import { useState } from 'react'

const useCounter = ( initialValue: number = 10 ) => {

    const [counter, setCounter] = useState(initialValue);

    const handleAdd = () => {
        setCounter(counter + 1);
    };

    const handleSubtract = () => {
        setCounter((prevState: number) => prevState - 1);
    };

    const handleReset = () => {
        setCounter(initialValue);
    }

    return {
        // Values
        counter,

        // Methods or Functions
        handleAdd,
        handleSubtract,
        handleReset,
    }
}

export default useCounter
