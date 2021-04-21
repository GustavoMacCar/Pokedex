import axios from 'axios'
import Pokemon from './components/Pokemon'
import { useState, useEffect } from "react"
import Paginas from './components/Paginas'


function App() {
/*
  const testpokemon = {
    id:1,
    name:"bulbasaur",
    image_url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    number:1,
    weight:69,
    height:7,
    kind:"grass;poison",
    created_at:"2020-05-25T04:48:23.225Z",
    updated_at:"2020-05-25T04:48:23.225Z"
  } */
  

  const [pokemonsList, setPokemonsList] = useState([]) 
  
  
  const [page, setPage] = useState('https://pokedex20201.herokuapp.com/pokemons?page=')
  
  const changePage = text => {
    console.log(page)
    setPage('https://pokedex20201.herokuapp.com/pokemons?page='+text)
  }
    
    
    
  useEffect (() => {
      
  async function getResponse() {
    const response = await axios
    .get(page)
    
    console.log(response)

    const fetchedPokemons = response.data.data

    /*
    setPokemonsList(fetchedPokemons.map = (pokemon => ({
      id: pokemon.id,
      name: pokemon.name,
      image_url: pokemon.image_url,
      number: pokemon.number,
      weight: pokemon.weight,
      height: pokemon.height,
      kind: pokemon.kind,
      created_at: pokemon.created_at,
      updated_at: pokemon.updated_at
    })))  */
    
    setPokemonsList(
    [...fetchedPokemons]
      )
      
      
      
    }
  getResponse()
}, [page]) 
  
  




  return (
    
    <div>
      <ul>
      {pokemonsList.map((pokemon) => (
              <Pokemon 
              img_path={pokemon.image_url} 
              number={pokemon.number} 
              name={pokemon.name} 
              kind={pokemon.kind}> 
              </Pokemon>
            ))}     
      </ul>      
      <Paginas changePage={changePage}></Paginas>
    </div>
  );
}

export default App;

