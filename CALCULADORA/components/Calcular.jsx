import { useState } from "react"

const Calcular = () => {
    const [valor, setValor] = useState('')
    const result = () => {
        const res = new Function(`return ${valor}`)(); {/* Cria uma função interna dinamicamente na memoria, transformanto o texto eme executavel */ }
        if (res === Infinity || res === -Infinity || Number.isNaN(res)) {
            setValor('');
        } else {
            setValor(String(res));
        }
    }
    const limpar = () => {
        setValor('')
    }

    return (
        <div className="calculadora-container">
            <div>
                <p style={{ textAlign: 'right', border: '1px solid white', paddingRight: '5px', backgroundColor: 'white', borderRadius: '10px', paddingTop: '15px', paddingBottom: '15px' }}>{valor == '' ? 0 : valor}</p>
            </div>
            <div>
                <button className="btn-calc" onClick={() => setValor(valor + '0')}>0</button>
                <button className="btn-calc btn-operador" onClick={() => setValor(valor + '/')}>/</button>
                <button className="btn-calc btn-limpar" onClick={limpar}>C</button>
                <button className="btn-calc btn-igual" onClick={result}>=</button>
            </div>
            <div>
                <button className="btn-calc" onClick={() => setValor(valor + '9')}>9</button>
                <button className="btn-calc" onClick={() => setValor(valor + '8')}>8</button>
                <button className="btn-calc" onClick={() => setValor(valor + '7')}>7</button>
                <button className="btn-calc btn-operador" onClick={() => setValor(valor + '*')}>*</button>
            </div>
            <div>
                <button className="btn-calc" onClick={() => setValor(valor + '6')}>6</button>
                <button className="btn-calc" onClick={() => setValor(valor + '5')}>5</button>
                <button className="btn-calc" onClick={() => setValor(valor + '4')}>4</button>
                <button className="btn-calc btn-operador" onClick={() => setValor(valor + '-')}>-</button>
            </div>
            <div>
                <button className="btn-calc" onClick={() => setValor(valor + '3')}>3</button>
                <button className="btn-calc" onClick={() => setValor(valor + '2')}>2</button>
                <button className="btn-calc" onClick={() => setValor(valor + '1')}>1</button>
                <button className="btn-calc btn-operador" onClick={() => setValor(valor + '+')}>+</button>
            </div>
        </div>
    )
}

export default Calcular
