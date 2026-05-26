import { useState } from 'react';

function Contador(){
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [resultado, setResultado] = useState(null);

    function conta() {
        const n1 = Number(num1);
        const n2 = Number(num2);
        setResultado(n1 + n2);
    }
    return(
        <div>
            <input 
                type="number" 
                value={num1} 
                onChange={(e) => setNum1(e.target.value)} 
            />
            <input 
                type="number" 
                value={num2} 
                onChange={(e) => setNum2(e.target.value)} 
            />
            <button onClick={conta}>Soma</button>
            {resultado !== null && <div>Resultado: {resultado}</div>}
        </div>
    )
}

export default Contador