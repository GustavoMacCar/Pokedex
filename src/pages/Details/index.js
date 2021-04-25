import {Link} from 'react-router-dom'
import styled from 'styled-components'

const StyledDiv = styled.div `
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
` 

const PokemonDiv = styled.div `
background-color: #e8cf89

`

const AttributesDiv = styled.div`
background-color: #f2e6c2

`

function Details({currentPokemon})
{
    return  <StyledDiv>
        <div>
          <PokemonDiv>
        <img src={currentPokemon.image_url}></img>
          </PokemonDiv>
          <AttributesDiv>
        <p>Number: {currentPokemon.number}</p>
        <h3>{currentPokemon.name}</h3>
        <span>{currentPokemon.kind}</span>
        <p>Height: {currentPokemon.height}</p>
        <p>Weight: {currentPokemon.weight}</p>  
          </AttributesDiv>   
        </div>    
        <div>
        </div>
    </StyledDiv>

}

export default Details;