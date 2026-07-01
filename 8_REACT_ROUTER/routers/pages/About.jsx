import React from 'react'

const About = () => {
    const items = [{ id: 1, name: 'a' }, { id: 3, name: 'b' }, { id: 3, name: 'c' }]
    return (
        <div>
            <h2>About</h2>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>Nome: {item.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default About