import Pokemon from '../../components/Pokemon/index'
import Paginas from '../../components/Paginas/index'
import styled from 'styled-components'


function Pokemons({pokemonsList, changePage, changeInfo, currentPage, previousPage, nextPage, handleFavorites})
{
  return (
        <div>
          
        <ul>
     {pokemonsList.map((pokemon) => (
              <Pokemon key={pokemon.id}
              img_path={pokemon.image_url} 
              name={pokemon.name} 
              changeInfo={changeInfo}
              handleFavorites={handleFavorites}
              inFavorites={pokemon.inFavorites}>
              </Pokemon>
            ))} 
      </ul>  

      <Paginas previousPage={previousPage} nextPage={nextPage} currentPage={currentPage} changePage={changePage}></Paginas>
      </div>    
    )    

}

export default Pokemons;