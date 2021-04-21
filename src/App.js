import axios from 'axios'
import { useState, useEffect } from "react"
import {BrowserRouter, Route} from 'react-router-dom'
import Pokemon from './components/Pokemon'
import Details from './pages/Details'
import Pokemons from './pages/Pokemons'

function App() {
  
  /*
  const initialPokemon = {
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
  */
  

  const [pokemonsList, setPokemonsList] = useState([]) 
  
  const [page, setPage] = useState('https://pokedex20201.herokuapp.com/pokemons?page=')
  const [info, setInfo] = useState('https://pokedex20201.herokuapp.com/pokemons/')
  const [currentPokemon, setCurrentPokemon] = useState({
    id:'',
        name:'',
        image_url:'',
        number:'',
        weight:'',
        height:'',
        kind:'',
        created_at:'',
        updated_at:''
  })
  
  const changePage = text => {
    //console.log(page)
    setPage('https://pokedex20201.herokuapp.com/pokemons?page='+text)
  }

  const changeInfo = name => {
    setInfo('https://pokedex20201.herokuapp.com/pokemons/'+name)
    //console.log(info)
  }


  useEffect(() => {
    async function getResponse() {
      const response = await axios
      .get(info)

      const detailedPokemon = response.data
      //console.log(detailedPokemon)
     
      setCurrentPokemon(
        {...detailedPokemon}
      )
      
    }
    getResponse()

    return () => {
      setCurrentPokemon({})
    }

  }, [info]);

   
    
  useEffect (() => {
      
  async function getResponse() {
    const response = await axios
    .get(page)
    
    const fetchedPokemons = response.data.data

    setPokemonsList(
    [...fetchedPokemons]
      )
      
    }
  getResponse()
}, [page]) 



  
  return (
    <BrowserRouter>
    <Route path="/" exact>
      <Pokemons changePage={changePage} pokemonsList={pokemonsList} changeInfo={changeInfo}></Pokemons>
    </Route>
    <Route path="/details/">
      <Details currentPokemon={currentPokemon}></Details>      
    </Route>
    </BrowserRouter>
  
  ); 
  
}







export default App;




/*
  return (
    <BrowserRouter>
    <Route path="/d" exact>
      <Details></Details>
    </Route>
    
    <div>
      <div>

      </div>
      <div>
      <ul>
      {pokemonsList.map((pokemon) => (
              <Pokemon key={pokemon.id}
              img_path={pokemon.image_url} 
              number={pokemon.number} 
              name={pokemon.name} 
              kind={pokemon.kind}>
              </Pokemon>
            ))}     
      </ul>      
      <Paginas changePage={changePage}></Paginas>
    </div>
    </div>
  </BrowserRouter>
  );  */




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
    
  

