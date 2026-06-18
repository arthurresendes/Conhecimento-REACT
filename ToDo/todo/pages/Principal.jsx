import { useState } from "react"

const Principal = () => {
    const [lista, setLista] = useState([])
    const [palavra, setPalavra] = useState("")
    const [update, setUpdate] = useState("")
    const [palavraUpdate, setPalavraUpdate] = useState("")

    const add = () => {
        if (palavra != "") {
            setLista([...lista, { id: Date.now(), nome: palavra }])
            setPalavra("")
        }
    }

    const delet = (id) => {
        const listaAtualizada = lista.filter(item => item.id !== id)
        setLista(listaAtualizada)
    }

    const atualizar = (id) => {
        setUpdate(id)
    }

    const updateWord = (id) => {
        const listaAtualizada = lista.map(item => {
            if (item.id === id) {
                item.nome = palavraUpdate
            }
            return item
        })
        setLista(listaAtualizada)
        setUpdate("")
        setPalavraUpdate("")
    }
    return (
        <div>
            <input type="text" name="" id="" value={palavra} onChange={(e) => setPalavra(e.target.value)} placeholder="Digite sua tarefa" />
            <button onClick={add}>Adicionar</button>

            <br /><br />
            <h2>Listagem: </h2>
            <ul>
                {lista.map((item) => (
                    <li key={item.id}>{item.id} - {item.nome} - <button onClick={() => delet(item.id)}>Deletar</button> - <button onClick={() => atualizar(item.id)}>Atualiza</button>
                        {update === item.id && (
                            <>
                                <input type="text" name="" id="" value={palavraUpdate} onChange={(e) => setPalavraUpdate(e.target.value)} placeholder="Atualize a tarefa" />
                                <button onClick={() => updateWord(item.id)}>Alterar</button>
                            </>
                        )}</li>
                ))}
            </ul>
        </div>
    )
}

export default Principal