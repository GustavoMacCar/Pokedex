import Pokemon from '../components/Pokemon/index'
import Paginas from '../components/Paginas/index'
import styled from 'styled-components'

const StyledPokemon = styled.div `
display: inline-block;
`

const StyledList = styled.li `
display: inline-block;
float: left;
`

const StyledUl = styled.ul `
display: inline-block;
list-style-type: none;
`


function Pokemons({pokemonsList, changePage, changeInfo, currentPage, previousPage, nextPage, handleFavorites})
{
  return (
        <div>
          <StyledPokemon>
            <StyledUl>
              <StyledList> 
              {pokemonsList.map((pokemon) => (
              <Pokemon key={pokemon.id}
              img_path={pokemon.image_url} 
              name={pokemon.name} 
              changeInfo={changeInfo}
              handleFavorites={handleFavorites}
              inFavorites={pokemon.inFavorites}>
              </Pokemon>
            ))}     
              </StyledList>
            </StyledUl>  
          </StyledPokemon>

      <Paginas previousPage={previousPage} nextPage={nextPage} currentPage={currentPage} changePage={changePage}></Paginas>
      </div>    
    )    

}

export default Pokemons;