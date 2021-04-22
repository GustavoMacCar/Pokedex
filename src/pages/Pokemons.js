import Pokemon from '../components/Pokemon'
import Paginas from '../components/Paginas'
import {Link} from 'react-router-dom'

function Pokemons({pokemonsList, changePage, changeInfo})
{
    return (
        <div>
          <Link to="/favorites/">Meus Favoritos</Link>
        <ul>
      {pokemonsList.map((pokemon) => (
              <Pokemon key={pokemon.id}
              img_path={pokemon.image_url} 
              name={pokemon.name} 
              changeInfo={changeInfo}>
              </Pokemon>
            ))}     
      </ul>  

      <Paginas changePage={changePage}></Paginas>
      </div>    
    )    

}

export default Pokemons;