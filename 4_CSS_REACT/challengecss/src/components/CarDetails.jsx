const CarDetails = () => {
    const cars = [
        { id: 1, name: 'Ferrari', km: 0, },
        { id: 2, name: 'Mercedes', km: 100 }
    ]
    return (
        <div style={{ border: '1px solid black', borderRadius: '20px', margin: '10px', textAlign: 'center' }}>
            {cars.map(car => (
                <h2 key={car.id}>Nome: {car.name}, KM: {car.km}</h2>
            ))}
        </div>
    )
}

export default CarDetails