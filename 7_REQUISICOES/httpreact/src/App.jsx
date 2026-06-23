import { useState } from "react"
import { useFetch } from "./hooks/useFetch"
import './App.css'

const url = "http://localhost:3000/products/"

function App() {
  const [id, setId] = useState("")
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [nameUpdate, setNameUpdate] = useState("")
  const [priceUpdate, setPriceUpdate] = useState("")
  const [update, setUpdate] = useState(false)
  const { data: items, httpConfig } = useFetch(url)


  const handleSubmit = async (e) => {
    e.preventDefault()
    const product = { name, price }

    httpConfig(product, "POST")

    setName("")
    setPrice("")
  }

  const handleUpdate = async (e) => {
    e.preventDefault()
    const product = { id, name: nameUpdate, price: priceUpdate }

    httpConfig(product, "PATCH")

    setNameUpdate("")
    setPriceUpdate("")
    setUpdate(false)
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
            - <button onClick={() => { setUpdate(true), setNameUpdate(item.name), setPriceUpdate(item.price), setId(item.id) }}>Atualizar</button>
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

      {update &&
        <div className="add-product">
          <form onSubmit={handleUpdate}>
            <label>
              Nome
              <input type="text" value={nameUpdate} onChange={(e) => setNameUpdate(e.target.value)} />
            </label>
            <label>
              Preço
              <input type="number" value={priceUpdate} onChange={(e) => setPriceUpdate(e.target.value)} />
            </label>
            <input type="submit" value="Atualizar produto" />
          </form>
        </div>}
    </>
  )
}

export default App
