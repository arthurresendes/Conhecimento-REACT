import { useState } from "react"

const ListRender = () => {
    const [list] = useState([
        {id: 1,name:"Arthur", age: 19}, 
        {id: 2, name: "Matheus", age: 19}, 
        {id: 3, name: "Davi", age: 27}, 
        {id: 4,name: "Caua", age: 20}])
    return (
        <div>
            <h1>Listando</h1>
            <ul>
                {list.map((item) => (
                    <li key={item.id}>{item.name} - {item.age}</li>
                ))}
            </ul>
        </div>
    )
}

export default ListRender