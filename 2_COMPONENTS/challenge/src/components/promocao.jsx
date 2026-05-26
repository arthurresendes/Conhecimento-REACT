import { useState } from "react";

function PromocaoLoja(){
    const [preco, setPreco] = useState('')
    const [porcentagem, setPorcentagem] = useState('')
    const [desconto, setDesconto] = useState(null)
    const [valorFinal, setValorFinal] = useState(null)

    function calcular(){
        const pre = parseFloat(preco)
        const por = Number(porcentagem)
        
        const valorDoDesconto = pre * (por / 100)
        const valorDoPrecoFinal = pre - valorDoDesconto
        setDesconto(valorDoDesconto)
        setValorFinal(valorDoPrecoFinal)
    }
    return(
        <div>
            <input type="text" value={preco} onChange={(e) => setPreco(e.target.value)}/>
            <input type="number" value={porcentagem} onChange={(e) => setPorcentagem(e.target.value)} />
            <button onClick={calcular}>Calcular</button>
            {desconto !== null &&  valorFinal !== null && <div>Desconto: {desconto} <br></br> Valor final: {valorFinal}</div> }
        </div>
    )
}

export default PromocaoLoja