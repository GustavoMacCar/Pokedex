import axios from 'axios'
import Pokemon from './components/Pokemon'
import { useState, useEffect } from "react"


function App() {

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
  }
  

  const [pokemonsList, setPokemonsList] = useState(testpokemon)
  const [testList, setTestList] = useState('')
  let mylist = '123'
  setTestList(
    mylist
  )
/*
  useEffect (() => {

    async function getResponse() {
    const response = await axios
      .get('https://pokedex20201.herokuapp.com/pokemons?page=2')
      console.log(response)

    const fetchedPokemons = response.data
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
    })))
  }
  getResponse()
  }, []) 


  {pokemonsList.map((pokemon) => (
              <Pokemon img_path={pokemon.image_url} 
              number={pokemon.number} 
              name={pokemon.name} 
              kind={pokemon.kind}> 
              </Pokemon>
            ))}    
  
  
  */




  return (
    
    <div>
      
    </div>
  );
}

export default App;

