import axios from 'axios'
import { useState, useEffect } from "react"
import {BrowserRouter, Route} from 'react-router-dom'
import Details from './pages/Details/index'
import Pokemons from './pages/Pokemons/index'
import Login from './components/Login/index'
import Logout from './components/Logout/index'
import Favorites from './pages/Favorites/index'
import styled from 'styled-components'


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
  const [favorite, setFavorite] = useState([]); /*guarda a lista de favoritos do treinador logado*/
  const [newFavorite, setNewFavorite] = useState('') /*guarda um novo pokemon a ser adicionado na lista de favoritos*/
  const [currentPage, setCurrentPage] = useState(1)  /*guarda o numero da pagina atual*/
  const [removeFavorite, setRemoveFavorite] = useState('')
  const [favoritesToRender, setFavoritesToRender] = useState([])


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

  const removeFromFavorites = name => {
    setRemoveFavorite(name)
  }

  const handleFavorites = name => {

    let i = 0;
        
    for (i = 0; i < favorite.length; i++)
    {
      if (name === favorite[i].name)
      {
        removeFromFavorites(name)
        return
      }
      
    }

    addToFavorites(name)    
  }

  const previousPage = currentPage => {
    if (currentPage <= 1)
        return
    
    setCurrentPage(currentPage-1)
    //setPage(currentPage)

  }

  const nextPage = currentPage => {
    if (currentPage >= 33)
        return
    
    setCurrentPage(currentPage+1)
    //console.log(currentPage)
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
        //console.log(newFavorite)
        await axios.post('https://pokedex20201.herokuapp.com/users/'+coach+'/starred/'+newFavorite)
      } catch(error){
        console.log(error)

      }

      const response = await axios
        .get(login)
      
      if (!(login === 'https://pokedex20201.herokuapp.com/users/')){
        const favoritePokemons = response.data.pokemons
        const favoritePokemonsList = Object.values(favoritePokemons)
        //console.log(favoritePokemonsList)
        setFavorite(
          [...favoritePokemonsList]
          )

      }

      //console.log(favorite)

      
      return () => {
        setFavorite([])
      }      
    }
    newFavoritePokemon(newFavorite)

  }, [newFavorite])


  useEffect(() => {
    async function removePokemon() {
      try{
        //console.log(newFavorite)
        await axios.delete('https://pokedex20201.herokuapp.com/users/'+coach+'/starred/'+removeFavorite)
      } catch(error){
        console.log(error)

      }

      const response = await axios
        .get(login)
      
      if (!(login === 'https://pokedex20201.herokuapp.com/users/')){
        const favoritePokemons = response.data.pokemons
        const favoritePokemonsList = Object.values(favoritePokemons)
        //console.log(favoritePokemonsList)
        setFavorite(
          [...favoritePokemonsList]
          )

      }

      return () => {
        setFavorite([])
      }      


    }
    removePokemon(removeFavorite)

  }, [removeFavorite])















  useEffect(() => {
    async function getResponse() {
      const response = await axios
        .get(info)

      const detailedPokemon = response.data

      if (detailedPokemon.kind !== undefined)
      {
        detailedPokemon.kind = detailedPokemon.kind.split(';')
      }
     
     // console.log(detailedPokemon.kind)
    
      setCurrentPokemon(
        {...detailedPokemon}
      )
      
    }
    getResponse();

    
    return () => {
      setCurrentPokemon({})
    }  

  }, [info, login]);

  useEffect(() => {

    async function getFavorite() {
      const response = await axios
        .get(login)
      
      if (!(login === 'https://pokedex20201.herokuapp.com/users/')){
        const favoritePokemons = response.data.pokemons
        const favoritePokemonsList = Object.values(favoritePokemons)
        //console.log(favoritePokemonsList)
        setFavorite(
          [...favoritePokemonsList]
          )

      }

      //console.log(favorite)

      
      return () => {
        setFavorite([])
      }      
      
        
      }
    getFavorite();


  }, [login]);


  useEffect(() => {

    async function getFavoritesToRender() {
      const response = await axios
        .get(login)
      
      if (!(login === 'https://pokedex20201.herokuapp.com/users/')){
        const favoritePokemons = response.data.pokemons
        const favoritePokemonsList = Object.values(favoritePokemons)
        //console.log(favoritePokemonsList[0])
        let i = 0;

      
      for (i = 0; i < favoritePokemonsList.length; i++)
        {
          favoritePokemonsList[i].inFavorites = true            
        }


        setFavoritesToRender(
          [...favoritePokemonsList]
          )

      }

      //console.log(favoritesToRender)

      
      return () => {
        setFavoritesToRender([])
      }       
      
        
      }
      getFavoritesToRender();


  }, [favorite]);







    
  useEffect (() => {
      
  async function getResponse() {
    const response = await axios
      .get(page)
    
    const fetchedPokemons = response.data.data

    let i = 0;
    let j = 0;

    for (i = 0; i < fetchedPokemons.length; i++)
    {
      fetchedPokemons[i].inFavorites = false
    }


    for (i = 0; i < fetchedPokemons.length; i++)
    {
      for(j = 0; j < favorite.length; j++)
      {
        if (fetchedPokemons[i].name === favorite[j].name)
        {
          fetchedPokemons[i].inFavorites = true
        }
      }
      
    }

    //console.log(fetchedPokemons)    

    setPokemonsList(
    [...fetchedPokemons]
      )
      
    }

  getResponse();
}, [page, login]) /*Atualiza sempre que o usuário mudar de página*/




useEffect (() => {
      
    let i = 0;
    let j = 0;

    for (i = 0; i < pokemonsList.length; i++)
    {
      pokemonsList[i].inFavorites = false
    }


    for (i = 0; i < pokemonsList.length; i++)
    {
      for(j = 0; j < favorite.length; j++)
      {
        if (pokemonsList[i].name === favorite[j].name)
        {
          pokemonsList[i].inFavorites = true
        }
      }
      
    }

    
    

  
}, [favorite]) 


useEffect (() => {


  return () => {
    setFavoritesToRender([])
    setFavorite([])
  }      

    


}, [login]) 





  if(login === 'https://pokedex20201.herokuapp.com/users/'){ /*Verifica se o usuário fez o login*/
    return(
      
      <Login  loginUser={loginUser} ></Login>
    )
    
  }
  return (
    <BrowserRouter>
      <Logout loginUser={loginUser} coach={coach}></Logout>
    <Route path="/" exact>
      <Pokemons currentPage={currentPage} nextPage={nextPage} previousPage={previousPage} changePage={changePage} pokemonsList={pokemonsList} changeInfo={changeInfo} handleFavorites={handleFavorites}></Pokemons>
    </Route>
    <Route path="/details/">
      <Details currentPokemon={currentPokemon}></Details>      
    </Route>
    <Route path="/favorites/" exact>
      <Favorites pokemonsList={favoritesToRender} changeInfo={changeInfo} handleFavorites={handleFavorites}></Favorites>
    </Route>
    </BrowserRouter>
  
  ); 
  
}







export default App;






