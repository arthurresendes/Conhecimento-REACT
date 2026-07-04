import { useNavigate } from "react-router-dom"
import { useState } from "react"

const SearchForm = () => {
    const navigate = useNavigate()
    const [query, setQuery] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        navigate("/search?q=" + query)
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="">
                    Busca
                    <input type="text" name="" id="" value={query}
                        onChange={(e) => setQuery(e.target.value)} />
                </label>
                <input type="submit" value="Navegar" />
            </form>
        </div>
    )
}

export default SearchForm