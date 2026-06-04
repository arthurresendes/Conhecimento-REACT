const UserDetails = (props) => {
    {/* Ao inves de colocar props poderia colocar name e age direto que vem do App.jsx */}
    return (
        <div>
            <ul>
                <li>Nome: {props.name}, Idade: {props.age}</li>
                {props.age >= 18 ? <p>Pode tirar carta</p> : <p>Não pode tirar carta</p>}
            </ul>
        </div>
    )
}

export default UserDetails