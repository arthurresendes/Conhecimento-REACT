import { useState, useEffect } from "react"
import './App.css'

const url = "http://localhost:3000/products/"
function App() {
  const [products, setProducts] = useState([])
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url)
      const data = await response.json()
      setProducts(data)
    }
    fetchData()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const product = {
      name,
      price
    }

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(product)
    })
    location.reload()
  }

  const deleteItem = async (id) => {
    const res = await fetch(`${url}${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(id)
    })
    location.reload()
  }

  return (
    <>
      <h1>Lista de produtos</h1>
      <ul>
        {products.map((prod) => (
          <li key={prod.id}>{prod.name} - R$: {prod.price} - <button onClick={() => deleteItem(prod.id)}>Deletar</button></li>
        ))}
      </ul>

      <div className="add-product">
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="">
            Nome
            <input type="text" name="name" id="" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <label htmlFor="">
            Preço
            <input type="number" name="price" id="" value={price} onChange={(e) => setPrice(e.target.value)} />
          </label>
          <input type="submit" value="Adicionar produto" />
        </form>
      </div>
    </>
  )
}

export default App
