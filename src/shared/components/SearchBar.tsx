import { useEffect, useState } from "react";

interface Props {
    placeholder?: string;
    onQuery: (query: string) => void;
}

const SearchBar = ({ placeholder = 'Busca algo...', onQuery }: Props) => {

    const [query, setquery] = useState('');

    // Debounce nativo
    useEffect(() => {
        const timeOutId = setTimeout(() => {
            onQuery(query)
        }, 700);

        return() => {
            clearTimeout(timeOutId);
        }
    }, [query, onQuery]);

    const handleSearch = () => {
        onQuery(query);
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    }

    return (
        <>
            {/* Search */}
            <div className='search-container'>
                <input
                    type='text'
                    placeholder={placeholder}
                    value={query}
                    onChange={(e) => setquery(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <button onClick={handleSearch}>Buscar</button>
            </div>
        </>
    )
}

export default SearchBar
