import { useState } from 'react'
import './MyForms.css'

const MyForms = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const handleName = (e) => {
        setName(e.target.value)
    }

    return (
        <div>
            <form action="">
                <div>
                    <label htmlFor="name">Nome</label>
                    <input type="text" name="name" id="" placeholder='Digite seu nome' onChange={handleName} />
                </div>
                <label>
                    <span>E-mail</span>
                    <input type="email" name="email" id="" placeholder='Digite seu e-mail' onChange={(e) => setEmail(e.target.value)} />
                </label>
                <input type="submit" value="Enviar" />
            </form>
            <p>Nome: {name} Email: {email}</p>
        </div>
    )
}

export default MyForms