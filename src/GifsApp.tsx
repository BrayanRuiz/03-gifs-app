import { useState } from 'react'
import GifList from './gifs/components/GifList'
import PreviousSearches from './gifs/components/PreviousSearches'
import CustomHeader from './shared/components/CustomHeader'
import SearchBar from './shared/components/SearchBar'
import { getGifsByQuery } from './gifs/actions/get-gifs-by-query.action'
import type { Gif } from './gifs/interfaces/gif.interface'

export const GifsApp = () => {

    const [gifs, setGifs] = useState<Gif[]>([]);
    const [previousTerms, setpreviousTerms] = useState<string[]>([]);

    const handleTermClicked = (term: string) => {
        console.log({term});
    };

    const handleSearch = async (query: string) => {
        query = query.trim().toLowerCase();
        if(query.length === 0) return;

        const exist = previousTerms.find(x => x === query);
        if(exist) return;

        if(previousTerms.length > 7) return;

        setpreviousTerms([query, ...previousTerms].splice(0, 8));

        const gifs = await getGifsByQuery(query);
        console.log(gifs);
        setGifs(gifs);
    }

    return (
        <>
            <CustomHeader title='Buscador de Gifs' description='Descubre y comparte el Gif perfecto' />

            <SearchBar 
                placeholder='Buscar gifs' 
                onQuery={handleSearch}
            />

            <PreviousSearches 
                seaches={previousTerms} 
                onLabelClicked={handleTermClicked}
            />

            <GifList gifs={gifs} />
        </>
    )
}