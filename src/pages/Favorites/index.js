import Pokemon from '../../components/Pokemon/index'
import {Link} from 'react-router-dom'
import styled from "styled-components"

const linkStyle = {
    fontSize: "18px",
    color: 'white',
    textDecoration: "none"
    } ;

function Favorites({pokemonsList, changeInfo, handleFavorites})
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
        <div>
        <Link to="/">Voltar</Link>
        </div>

    </div>    
    )    

}

export default Favorites;