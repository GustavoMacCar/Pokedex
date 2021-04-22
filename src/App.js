import axios from 'axios'
import { useState, useEffect } from "react"
import {BrowserRouter, Route} from 'react-router-dom'
import Pokemon from './components/Pokemon'
import Details from './pages/Details'
import Pokemons from './pages/Pokemons'
import Login from './components/Login'
import Logout from './components/Logout'
import userEvent from '@testing-library/user-event'
import Favorites from './pages/Favorites'

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
  const [login, setLogin] = useState('https://pokedex20201.herokuapp.com/users/')/*login guarda as informações do perfil do usuário */
  const [page, setPage] = useState('https://pokedex20201.herokuapp.com/pokemons?page=')/*page guarda em qual página o usuário está */
  const [info, setInfo] = useState('https://pokedex20201.herokuapp.com/pokemons/')
  const [coach, setCoach] = useState(''); /*coach guarda o nome do treinador que está logado */
  const [favorite, setFavorite] = useState([]);
  const [newFavorite, setNewFavorite] = useState('')
  const [currentPage, setCurrentPage] = useState(1)  


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
    setCurrentPage(text)
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

  const addToFavorites = name => {
    setNewFavorite(name)
    //console.log(name)
  }

  const previousPage = currentPage => {
    if (currentPage <= 1)
        return
    
    setCurrentPage(currentPage-1)
    console.log(currentPage)
    //setPage(currentPage)

  }

  const nextPage = currentPage => {
    if (currentPage >= 33)
        return
    
    setCurrentPage(currentPage+1)
    console.log(currentPage)
    //setPage(currentPage)
  }

  useEffect(() => {
    changePage(currentPage)   
    //console.log(currentPage) 

  }, [currentPage])

  useEffect(() => {
    async function getResponse() {
      try{
        const response = await axios
          .get(login)
      } catch(error){
        axios({
          method: 'post',
          url: 'https://pokedex20201.herokuapp.com/users',
          headers: {}, 
          data: {
            username: coach, 
          }
        });

      }
    }
    getResponse();

  }, [login]); /*Ela recebe da API o perfil do trainador*/

  useEffect(() => {
    async function newFavoritePokemon() {
      try{
        console.log(newFavorite)
        await axios.post('https://pokedex20201.herokuapp.com/users/'+coach+'/starred/'+newFavorite)
      } catch(error){
        console.log(error)

      }
    }
    newFavoritePokemon(newFavorite)

  }, [newFavorite])


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
    getResponse();

    return () => {
      setCurrentPokemon({})
    }

  }, [info]);

  useEffect(() => {

    async function getFavorite() {
      const response = await axios
        .get(login)
      
      if (!(login === 'https://pokedex20201.herokuapp.com/users/')){
        const favoritePokemons = response.data.pokemons
        const favoritePokemonsList = Object.values(favoritePokemons)
        console.log(favoritePokemonsList[0])
        setFavorite(
          [...favoritePokemonsList]
          )

      }
      
        
      }
    getFavorite();


  }, [login, newFavorite]);
    
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
      <Logout loginUser={loginUser} coach={coach}></Logout>
    <Route path="/" exact>
      <Pokemons currentPage={currentPage} nextPage={nextPage} previousPage={previousPage} changePage={changePage} pokemonsList={pokemonsList} changeInfo={changeInfo} addToFavorites={addToFavorites}></Pokemons>
    </Route>
    <Route path="/details/">
      <Details currentPokemon={currentPokemon}></Details>      
    </Route>
    <Route path="/favorites/" exact>
      <Favorites pokemonsList={favorite} changeInfo={changeInfo}></Favorites>
    </Route>
    </BrowserRouter>
  
  ); 
  
}







export default App;






