import React from 'react'
import { useContext } from 'react'
import { CounterContext } from '../context/CounterContext'

const ChangeCounter = () => {
    const { counter, setCounter } = useContext(CounterContext)
    return (
        <div>
            <h1>Mudar contador</h1>
            <button onClick={() => setCounter(counter + 1)}>Add ao contador</button>
            <button onClick={() => setCounter(counter - 1)}>Diminuir ao contador</button>
        </div>
    )
}

export default ChangeCounter