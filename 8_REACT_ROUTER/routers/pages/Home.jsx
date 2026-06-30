import React from 'react'
import { Link } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'

const Home = () => {
    const url = 'http://localhost:3000/products'
    const { data: items, httpConfig } = useFetch(url)
    return (
        <div>
            <h1>Produtos</h1>
            <ul>
                {items && items.map((item) => (
                    <li key={item.id}>{item.name} - {item.price}</li>
                ))}
            </ul>
        </div>
    )
}

export default Home