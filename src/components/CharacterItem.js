import React from 'react'

const CharacterItem = ({character}) => {
    return (
        <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={character.image} alt='' />
        </div>
        <div className='card-back'>
          <h1>{character.name}</h1>
          <ul>
            <li>
              <strong>Species:</strong> {character.species}
            </li>
            <li>
              <strong>Gender:</strong> {character.gender}
            </li>
            <li>
              <strong>Origin:</strong> {character.origin.name}
            </li>
            <li>
              <strong>Status:</strong> {character.status}
            </li>
          </ul>
        </div>
      </div>
    </div>
    )
}

export default CharacterItem
