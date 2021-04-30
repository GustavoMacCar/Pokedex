import styled from 'styled-components'
import Kind from '../../components/Kind/index'

const colors = {
  bug:"#7ED578",
  electric:"#FFF34B",
  fairy:"#FF7EE5",
  fighting:"#F17373",
  fire:"#FFB433",
  flying:"#D7F1E9",
  ghost:"#E2E2E2",
  grass:"#5EFF53",
  ground:"#AA8546",
  ice:"#AEE3FB",
  normal:"#D7DBA8",
  poison:"#CE52F9",
  psychic:"#FFC157",
  rock:"#757575",
  steel:"#A1A1A1",
  water:"#7192FF",
  dragon:"#43372D",
  dark:"#4c2180"
}

const StyledDiv = styled.div `
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
height: 450px;
` 

const PokemonDiv = styled.div `
border: 2px solid black;
border-radius: 10px;
height: 30%;
border: white;
margin: 100px;
`

const AttributesDivTwo = styled.div `
background-image: linear-gradient(45deg, ${props => colors[props.firsttype]}, ${props => colors[props.secondtype]});
border: 2px solid black;
border-radius: 10px;
height: 100%;
width: 40%;
display: flex;
flex-direction: column;
align-items: center
`

const AttributesDiv = styled.div `
background-image: linear-gradient(45deg, white, ${props => colors[props.type]});
border: 2px solid black;
border-radius: 10px;
height: 100%;
width: 40%;
display: flex;
flex-direction: column;
align-items: center
`


const StyledImg = styled.img `
height: 300%;
`

function Details({currentPokemon})
{

  if (currentPokemon.kind !== undefined)
  {
    
    if (currentPokemon.kind.length < 2) {

    return  <StyledDiv>
          <PokemonDiv>
        <StyledImg src={currentPokemon.image_url}></StyledImg>
          </PokemonDiv>
          <AttributesDiv type={currentPokemon.kind[0]}>
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

      return  <StyledDiv>
          <PokemonDiv>
        <StyledImg src={currentPokemon.image_url}></StyledImg>
          </PokemonDiv>
          <AttributesDivTwo firsttype={currentPokemon.kind[0]} secondtype={currentPokemon.kind[1]}>
        <p>Number: {currentPokemon.number}</p>
        <h3>{currentPokemon.name}</h3>
        {currentPokemon.kind.map((type) => (
          <Kind type={type}></Kind>
        ))}
        <p>Height: {currentPokemon.height}</p>
        <p>Weight: {currentPokemon.weight}</p>  
          </AttributesDivTwo>    
    </StyledDiv> 

    }

    } else {

      //console.log(currentPokemon.kind)

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

