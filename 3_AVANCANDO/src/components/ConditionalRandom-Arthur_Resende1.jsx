import { useState } from "react"

const ConditionalRandom = () => {
    const [x, setX] = useState(true)
    const [name, setName] = useState("Arthur")

    const trocar = () =>{
        if(x){
            setX(false)
        }else{
            setX(true)
        }
    }

    const trocaNome = () =>{
        if(name === "Arthur"){
            setName("Matheus")
        }else{
            setName("Arthur")
        }
    }

    return (
        <div>
            <h1>Isso será exibido ?</h1>
            {x && <p>Sim</p>}
            <button onClick={trocar}>Trocar o status do exibir</button>

            {name === "Arthur" ? (<p>Nome é Arthur</p>) : (<p>Nome não identificado</p>)}
            <button onClick={trocaNome}>Trocar o nome</button>
        </div>
    )
}

export default ConditionalRandom