import { useState } from "react"
import { useFetch } from "./hooks/useFetch"
import './App.css'

const url = "http://localhost:3000/products/"

function App() {
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const { data: items, httpConfig } = useFetch(url)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const product = { name, price }

    httpConfig(product, "POST")

    setName("")
    setPrice("")
  }

  const deleteItem = async (id) => {
    httpConfig(id, "DELETE")
  }

  return (
    <>
      <h1>Lista de produtos</h1>
      <ul>
        {items && items.map((item) => (
          <li key={item.id}>
            {item.name} - R$: {item.price} - <button onClick={() => deleteItem(item.id)}>Deletar</button>
          </li>
        ))}
      </ul>

      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            Preço
            <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
          </label>
          <input type="submit" value="Adicionar produto" />
        </form>
      </div>
    </>
  )
}

export default App
