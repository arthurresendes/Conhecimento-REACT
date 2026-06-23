import { useState, useEffect } from "react"

const url = "http://localhost:3000/products/"
function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url)
      const data = await response.json()
      setProducts(data)
    }
    fetchData()
  }, [])
  return (
    <>
      <h1>Lista de produtos</h1>
      <ul>
        {products.map((prod) => (
          <li key={prod.id}>{prod.name} - R$: {prod.price}</li>
        ))}
      </ul>
    </>
  )
}

export default App
