import { useState } from 'react'
import './MyForms.css'

const MyForms = ({ user }) => {
    const [name, setName] = useState(user ? user.name : '')
    const [email, setEmail] = useState(user ? user.email : '')
    const [texto, setTexto] = useState("")
    const [role, setRole] = useState(user ? user.role : '')
    const [enviou, setEnviou] = useState(false)

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("Enviando forms")
        setEnviou(true)
        {/* Limpar forms
        setName("")
        setEmail("")
        */}
    }

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nome</label>
                    <input type="text" name="name" value={name} id="" placeholder='Digite seu nome' onChange={handleName} />
                </div>
                <label>
                    <span>E-mail</span>
                    <input type="email" name="email" value={email} id="" placeholder='Digite seu e-mail' onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label>
                    <span>Bio:</span>
                    <textarea name="bio" placeholder='Descrição sua' onChange={(e) => setTexto(e.target.value)} value={texto}></textarea>
                </label>
                <label>
                    <span>Opção do sistema</span>
                    <select name="role" id="" onChange={(e) => setRole(e.target.value)} value={role}>
                        <option value="user">Usuario</option>
                        <option value="admin">Admin</option>
                        <option value="ceo">CEO</option>
                    </select>
                </label>
                <input type="submit" value="Enviar" />
            </form>
            {enviou ? <p>Nome: {name} <br /> Email: {email} <br /> Biografia: {texto} <br /> Tipo de visualização: {role}</p> : ''}
        </div>
    )
}

export default MyForms