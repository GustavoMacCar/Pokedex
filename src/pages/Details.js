import {Link} from 'react-router-dom'


function Details( {currentPokemon} )
{
    return  <div>
        <div>
        <img src={currentPokemon.image_url}></img>
        <p>{currentPokemon.number}</p>
        <h3>{currentPokemon.name}</h3>
        <span>{currentPokemon.kind}</span>
        <p>{currentPokemon.height}</p>
        <p>{currentPokemon.weight}</p>     
        </div>    
        <div>
          <Link to="/">Voltar</Link>
        </div>
          <Link to="/favorites">Voltar Favoritos</Link>
    </div>

}

export default Details;