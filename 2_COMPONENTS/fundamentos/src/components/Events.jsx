import { useState } from "react";

const Events = () =>{
    const [texto, setTexto] = useState('')
    const handleMyEvent = (e) => {
        console.log(e)
        console.log("Ativou o evento")
    };

    const renderSomething = (x) => {
        if(x){
            return <h1>Renderizando</h1>
        }else{
            return <h1> Tambem posso renderizar</h1>
        }
    }

    const renderHello = () => {
            if(texto == "Ola mundo"){
                setTexto('')
            }else{
                setTexto("Ola mundo")
            }
    }
    return(
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui!</button>
            </div>

            <div>
                <button onClick={() => console.log("Clicou")}>Clique aqui tambem</button>
            </div>

            {renderSomething(true)}
            {renderSomething(false)}

            <div>
                <button onClick={renderHello}>Clique aqui para sumir e aparecer</button>
                <br></br>
                {texto}
            </div>
        </div>
    )
}

export default Events;