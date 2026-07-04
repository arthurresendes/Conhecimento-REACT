import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'

const Info = () => {
    const { id } = useParams()
    const url = "http://localhost:3000/products/" + id
    const { data: product } = useFetch(url)
    return (
        <div>
            <h1>Mais informações do produto: {id}</h1>
            {product && (
                <table>
                    <thead>
                        <th>Name</th>
                        <th>Preço</th>
                    </thead>
                    <tbody>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                    </tbody>
                </table>
            )}
        </div>
    )
}

export default Info