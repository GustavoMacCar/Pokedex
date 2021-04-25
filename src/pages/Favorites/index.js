import Pokemon from '../../components/Pokemon/index'

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
    </div>    
    )    

}

export default Favorites;