import axios from 'axios'
import { useState, useEffect } from "react"
import {BrowserRouter, Route} from 'react-router-dom'
import Pokemon from './components/Pokemon'
import Pokemons from './pages/Pokemons'
import Login from './components/Login'
import Logout from './components/Logout'

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
  const [login, setLogin] = useState('https://pokedex20201.herokuapp.com/users/')/*login guarda as informações do perfil do usuário */
  const [page, setPage] = useState('https://pokedex20201.herokuapp.com/pokemons?page=')/*page guarda em qual página o usuário está */
  const [info, setInfo] = useState('https://pokedex20201.herokuapp.com/pokemons/')
  const [coach, setCoach] = useState(''); /*coach guarda o nome do treinador que está logado */


  
  const changePage = text => {
    console.log(page)
    setPage('https://pokedex20201.herokuapp.com/pokemons?page='+text)
  } /* Função para mudar a página */

  const changeInfo = name => {
    setInfo('https://pokedex20201.herokuapp.com/pokemons/'+name)
    //console.log(info)
  }

  const loginUser = name => {
    setLogin('https://pokedex20201.herokuapp.com/users/'+name)
    setCoach(name)
    
  } /*Função que pega o nome do treinador e coloca em login para receber o perfil*/

  useEffect(() => {
    async function getResponse() {
      try{
        const responde = await axios
          .get(login)
      } catch(error){
        axios({
          method: 'post',
          url: 'https://pokedex20201.herokuapp.com/users',
          headers: {}, 
          data: {
            username: coach, // This is the body part
          }
        });


        //axios.post('https://pokedex20201.herokuapp.com/users', coach);

      }
    }
    getResponse();

  }, [login]); /*Ela recebe da API o perfil do trainador*/


  useEffect(() => {
    async function getResponse() {
      const response = await axios
        .get(info)

      const detailedPokemon = response.data
    }
    getResponse();

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

  getResponse();
}, [page]) /*Atualiza sempre que o usuário mudar de página*/



  if(login === 'https://pokedex20201.herokuapp.com/users/'){ /*Verifica se o usuário fez o login*/
    return(
      
      <Login loginUser={loginUser}></Login>
    )
    
  }
  return (
    <BrowserRouter>
    
      <Logout loginUser={loginUser} coach></Logout>
    <Route path="/" exact>
      <Pokemons changePage={changePage} pokemonsList={pokemonsList} changeInfo={changeInfo}></Pokemons>
    </Route>
    <Route>
      
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
    
  

