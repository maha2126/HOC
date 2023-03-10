import { useInput } from "../../hooks/useInput";
import { useState } from "react";

const withSearch = WrappedComponent =>{
    return (props) => {
        const searchText = useInput("text")
        const [filtered, setFiltered] = useState(props.books)
        const handleSubmit = e => {
            e.preventDefault()
            const result = props.books.filter(a => a.title.includes(searchText.value))
            setFiltered(result)
        }
        const showAll = () => {
            setFiltered(props.books)
            searchText.reset()
        }
        return<>
            <button onClick={showAll}>Show All Books</button>
            <form onSubmit={handleSubmit}>
                <input placeholder="search for..." {...searchText}/>
                <button>Search</button>
            </form>
            <WrappedComponent books={filtered}/>
        </>
    }
}
export default withSearch