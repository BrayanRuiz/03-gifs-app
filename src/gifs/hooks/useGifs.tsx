import { useRef, useState } from 'react'
import { getGifsByQuery } from '../actions/get-gifs-by-query.action';
import type { Gif } from '../interfaces/gif.interface';

// const gifsCache: Record<string, Gif[]> = {};

const useGifs = () => {

    const [gifs, setGifs] = useState<Gif[]>([]);
    const [previousTerms, setpreviousTerms] = useState<string[]>([]);

    const gifsCache = useRef<Record<string, Gif[]>>({});

    const handleTermClicked = async (term: string) => {
        if (gifsCache.current[term]) {
            setGifs(gifsCache.current[term]);
            return;
        }

        const gifs = await getGifsByQuery(term);
        setGifs(gifs);
    };

    const handleSearch = async (query: string) => {
        query = query.trim().toLowerCase();
        if(query.length === 0) return;

        if(previousTerms.includes(query)) {
            setGifs(gifsCache.current[query]);
            return;
        }

        const exist = previousTerms.find(x => x === query);
        if(exist) return;

        if(previousTerms.length > 7) return;

        setpreviousTerms([query, ...previousTerms].splice(0, 8));

        const gifs = await getGifsByQuery(query);
        setGifs(gifs);

        gifsCache.current[query] = gifs;
        console.log(gifs);
    }

    return {
        gifs,
        previousTerms,

        handleTermClicked,
        handleSearch
    }
}

export default useGifs
