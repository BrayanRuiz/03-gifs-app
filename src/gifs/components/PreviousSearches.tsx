import type { FC } from "react";

interface Props {
    seaches: string[];
    onLabelClicked: (term: string) => void;
}

const PreviousSearches: FC<Props> = ({ seaches, onLabelClicked }) => {
    return (
        <>
            {/* Busquedas previas */}
            <div className='previous-searches'>
                <h2>Búsquedas previas</h2>
                <ul className='previous-searches-list'>
                    {
                        seaches.map((term) => (
                            <li key={term} onClick={() => onLabelClicked(term)}>{term}</li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}

export default PreviousSearches
