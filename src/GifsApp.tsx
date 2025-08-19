import GifList from './gifs/components/GifList'
import PreviousSearches from './gifs/components/PreviousSearches'
import CustomHeader from './shared/components/CustomHeader'
import SearchBar from './shared/components/SearchBar'
import useGifs from './gifs/hooks/useGifs'

export const GifsApp = () => {

    const { handleSearch, previousTerms, handleTermClicked, gifs } = useGifs();

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