import { useState } from 'react';

function Contador(){
    const [contador, setContador] = useState(0)
    return(
        <div>
            <button onClick={() => setContador(contador + 1)}>Adicionar</button>

            <br />
            <p>Contador = {contador}</p>
        </div>
    )
}

export default Contador