import { useState } from "react"


const ManageData = () => {
    const someData = 10
    const [soma, setSoma] = useState(someData)

    const somando = () => {
        const res = soma + 10
        setSoma(res)
    }
    return (
        <div>
            <p>Valor: {soma}</p>
            <br />
            <button onClick={somando}>Mudar valor</button>
        </div>
    )
}

export default ManageData