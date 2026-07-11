import React from 'react'
{/*
    import { useContext } from 'react'
import { CounterContext } from '../context/CounterContext'
    */}
import ChangeCounter from '../components/ChangeCounter'
import { useCounterContext } from '../hooks/useCounterContext'
import { useTitleColorContext } from '../hooks/useTitleColorContext'
import { useBorderContext } from '../hooks/useBorderContext'

const Home = () => {
    const { counter } = useCounterContext()
    const { color, dispatch } = useTitleColorContext()
    const { borderRadius, dispatch2 } = useBorderContext()
    const setTitleColor = (color) => {
        dispatch({ type: color })
    }
    const setBorder = (size) => {
        dispatch2({ type: size })
    }
    return (
        <div>
            <h1 style={{ color: color }}>Home</h1>
            <p>Valor do contador: {counter}</p>
            <ChangeCounter />
            <div>
                <button onClick={() => setTitleColor("RED")}>Vermelho</button>
                <button onClick={() => setTitleColor("BLUE")}>Azul</button>
                <button onClick={() => setTitleColor("GREEN")}>Verde</button>
            </div>
            <div style={{ borderRadius: borderRadius, border: '1px solid black' }}>
                <p>Texto</p>
            </div>
            <button onClick={() => setBorder("10%")}>10%</button>
            <button onClick={() => setBorder("20%")}>20%</button>
            <button onClick={() => setBorder("30%")}>30%</button>
            <button onClick={() => setBorder("40%")}>40%</button>
            <button onClick={() => setBorder("50%")}>50%</button>
        </div>
    )
}

export default Home