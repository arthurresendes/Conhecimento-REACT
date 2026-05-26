import { useState } from "react";

function JuntarNome() {
    const [first, setFirst] = useState('')
    const [second, setSecond] = useState('')
    const [juncao, setJuncao] = useState(null)

    function juntar() {
        const nome = first + ' ' + second
        setJuncao(nome)
    }
    return (
        <div>
            {/* value -> Pega oq foi digitado ate o momento | onChange -> Evento onde ele manda para a variavel assim que valor tiver na caixa */}
            <input type="text" placeholder="Primeiro nome" value={first} onChange={(e) => setFirst(e.target.value)} />
            <input type="text" placeholder="Segundo nome" value={second} onChange={(e) => setSecond(e.target.value)} />
            <button onClick={juntar}>Ver nome completo</button>
            {juncao !== null && <div>Nome completo: {juncao}</div>}
        </div>
    )


}

export default JuntarNome