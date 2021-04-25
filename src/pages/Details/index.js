import {Link} from 'react-router-dom'
import styled from 'styled-components'
import Kind from '../../components/Kind/index'

const StyledDiv = styled.div `
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
height: 100%;
` 

const PokemonDiv = styled.div `
background-image: linear-gradient(45deg, black, #4287f5);
border: 2px solid black;
border-radius: 10px;
height: 90px;
border: white;
margin: 100px

`

const AttributesDiv = styled.div `
background-color: blue;
border: 2px solid black;
border-radius: 10px;
height: 100%;
`

function Details({currentPokemon})
{

  if (currentPokemon.kind !== undefined)
  {

  console.log(currentPokemon.kind)

    return  <StyledDiv>
          <PokemonDiv>
        <img src={currentPokemon.image_url}></img>
          </PokemonDiv>
          <AttributesDiv>
        <p>Number: {currentPokemon.number}</p>
        <h3>{currentPokemon.name}</h3>
        {currentPokemon.kind.map((type) => (
          <Kind type={type}></Kind>
        ))}
        <p>Height: {currentPokemon.height}</p>
        <p>Weight: {currentPokemon.weight}</p>  
          </AttributesDiv>    
    </StyledDiv> 

    } else {

      console.log(currentPokemon.kind)

    return  <StyledDiv>
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
    </StyledDiv> 
    }

}

export default Details;

