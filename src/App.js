import './App.css';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import axios from 'axios';
import CharacterGrid from './components/CharacterGrid';
import Search from './components/Search'

const App = () => {
  const [characters, setCharacters] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(()=>{
    const fetchCharacters = async () => {
      const result = await axios(`https://rickandmortyapi.com/api/character/?name=${query}`)

      console.log(result.data.results)
      setCharacters(result.data.results)
      setIsLoading(false)
      
    }

    fetchCharacters();
  }, [query])

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q)=>setQuery(q)}/>
      <CharacterGrid isLoading={isLoading} characters={characters} />
    </div>
  );
}

export default App;
