import { useState } from 'react';
import { Tooltip } from 'react-tooltip';

function Contador(){
    const [contador, setContador] = useState(0)
    return(
        <div>
            <button data-tooltip-id="tooltip" data-tooltip-content="Clique aqui adicionar na contagem!" onClick={() => setContador(contador + 1)}>Adicionar</button>

            <br />
            <p>Contador = {contador}</p>

            <Tooltip id="tooltip" place="right"/>
        </div>
    )
}

export default Contador