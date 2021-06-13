import React from 'react'
import CharacterItem from './CharacterItem'
import Spinner from './Spinner'

const CharacterGrid = ({ characters, isLoading }) => {
    return isLoading ? (
        <div>
            <Spinner />
        </div>
    ) : (
        <section className="cards" >
            {characters.map(character => (
                <CharacterItem key={character.id} character={character}></CharacterItem>
                
            )
            )}
        </section>
    )
}

export default CharacterGrid
