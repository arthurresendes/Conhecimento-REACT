const CarDetails = ({brand,km,color,novo}) => {
    return (
        <div>
            <h2>Detalhes do carro</h2>
            <ul>
                <li>Marca: {brand}</li>
                <li>KM: {km}</li>
                <li>Cor: {color}</li>
            </ul>
            {novo ? (<p>Carro é novo</p>) : (<p>Carro não é novo</p>)}
        </div>
    )
}

export default CarDetails