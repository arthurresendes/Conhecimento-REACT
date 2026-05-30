const Events = () =>{
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
            return <h1> Ola mundo </h1>
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
                {renderHello()}
            </div>
        </div>
    )
}

export default Events;