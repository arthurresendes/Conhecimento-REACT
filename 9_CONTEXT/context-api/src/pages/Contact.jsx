import React from 'react'
import { useCounterContext } from '../hooks/useCounterContext'

const Contact = () => {
    const { counter } = useCounterContext()
    return (
        <div>
            <h1>Contato</h1>
            <p>Contador: {counter}</p>
        </div>
    )
}

export default Contact