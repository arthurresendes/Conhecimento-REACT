import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import { Link } from 'react-router-dom'

const Product = () => {
    const { id } = useParams()
    const url = "http://localhost:3000/products/" + id
    const { data: product } = useFetch(url)
    return (
        <div>
            <p>Id do produto: {id}</p>
            {product && (
                <div>
                    <p>{product.name} - {product.price}</p>
                    <Link to={`/products/${product.id}/info`}>Mais informações</Link>
                </div>
            )}
        </div>
    )
}

export default Product