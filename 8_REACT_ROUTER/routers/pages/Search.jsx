import { useSearchParams, Link } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"

const Search = () => {
    const [searchParams] = useSearchParams()
    const query = searchParams.get("q") || ""
    const url = `http://localhost:3000/products?name=${encodeURIComponent(query)}`
    const { data: items } = useFetch(url)
    return (
        <div>
            <h1>Items</h1>
            <ul>
                {items && items.map((item) => (
                    <li key={item.id}>{item.name} - {item.price}
                        - <Link to={`/products/${item.id}`}>Detalhes</Link></li>
                ))}
            </ul>
        </div>
    )
}

export default Search