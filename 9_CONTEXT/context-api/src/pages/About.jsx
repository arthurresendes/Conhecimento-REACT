import React, { useContext } from 'react'
import { useBorderContext } from '../hooks/useBorderContext'

const About = () => {
    const { borderRadius } = useBorderContext()
    return (
        <div>
            <h1>Sobre</h1>
            <div style={{ borderRadius: borderRadius, border: '1px solid black' }}>
                <p>Texto</p>
            </div>
        </div>
    )
}

export default About