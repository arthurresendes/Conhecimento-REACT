import { useState } from "react"

const ListRender = () => {
    const [list] = useState(["Arthur", "Matheus", "Davi", "Caua"])
    return (
        <div>
            <h1>Listando</h1>
            <ul>
                {list.map((item) => (
                    <li>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default ListRender