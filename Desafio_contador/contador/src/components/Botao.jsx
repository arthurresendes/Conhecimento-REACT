const Botao = (props) => {
    return (
        <div>
            <button onClick={props.action}
                style={{ border: '1px solid black', backgroundColor: props.color, borderRadius: '15px', color: 'white', fontWeight: 'bolder', padding: '10px', cursor: 'pointer' }}>
                {props.texto}</button>
        </div>
    )
}

export default Botao