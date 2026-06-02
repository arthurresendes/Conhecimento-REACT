import { useState } from "react"

const ListRender = () => {
    const [list, setList] = useState([
        {id: 1,name:"Arthur", age: 19}, 
        {id: 2, name: "Matheus", age: 19}, 
        {id: 3, name: "Davi", age: 27}, 
        {id: 4,name: "Caua", age: 20}])
    
    const deleteRandom = () => {
        const tam = list.length 
        const num = Math.floor(Math.random() *tam)
        console.log(num)
        setList((prevUsers) => {
            return prevUsers.filter((item => num !== item.id))
        })
    }
    return (
        <div>
            <h1>Listando</h1>
            <ul>
                {list.map((item) => (
                    <li key={item.id}>{item.name} - {item.age}</li>
                ))}
            </ul>
            <button onClick={deleteRandom}>Delete random user</button>
        </div>
    )
}

export default ListRender