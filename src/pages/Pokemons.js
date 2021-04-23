import Pokemon from '../components/Pokemon'
import Paginas from '../components/Paginas'
import {Link} from 'react-router-dom'

function Pokemons({pokemonsList, changePage, changeInfo, currentPage, previousPage, nextPage, handleFavorites})
{
    return (
        <div>
          <Link to="/favorites/">Meus Favoritos</Link>
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