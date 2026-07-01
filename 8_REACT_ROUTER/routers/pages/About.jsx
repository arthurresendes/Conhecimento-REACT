import React from 'react'

const About = () => {
    const items = [{ id: 1, name: 'Arthur' }, { id: 3, name: 'Cristiano' }, { id: 3, name: 'Neymar' }]
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