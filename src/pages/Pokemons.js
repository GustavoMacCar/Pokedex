import Pokemon from '../components/Pokemon'
import Paginas from '../components/Paginas'

function Pokemons({pokemonsList, changePage, changeInfo})
{
    return (
        <div>
        <ul>
      {pokemonsList.map((pokemon) => (
              <Pokemon key={pokemon.id}
              img_path={pokemon.image_url} 
              number={pokemon.number} 
              name={pokemon.name} 
              kind={pokemon.kind}
              changeInfo={changeInfo}>
              </Pokemon>
            ))}     
      </ul>  

      <Paginas changePage={changePage}></Paginas>
      </div>    
    )    

}

export default Pokemons;