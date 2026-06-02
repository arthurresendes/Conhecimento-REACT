import { useState } from "react"

const ConditionalRandom = () => {
    const [x, setX] = useState(true)
    const trocar = () =>{
        if(x){
            setX(false)
        }else{
            setX(true)
        }
    }
    return (
        <div>
            <h1>Isso será exibido ?</h1>
            {x && <p>Sim</p>}
            <button onClick={trocar}>Trocar o status do exibir</button>
        </div>
    )
}

export default ConditionalRandom