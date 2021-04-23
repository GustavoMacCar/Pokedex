import Pokemon from '../components/Pokemon'
import {Link} from 'react-router-dom'


function Favorites({pokemonsList, changeInfo, handleFavorites})
{
    return (
        <div>
            <Link to="/">Voltar</Link>
        <ul>
    {pokemonsList.map((pokemon) => (
            <Pokemon key={pokemon.id}
            img_path={pokemon.image_url} 
            number={pokemon.number} 
            name={pokemon.name} 
            kind={pokemon.kind}
            changeInfo={changeInfo}
            handleFavorites={handleFavorites}
            inFavorites={pokemon.inFavorites}>
            </Pokemon>
            ))}     
    </ul>  

    </div>    
    )    

}

export default Favorites;