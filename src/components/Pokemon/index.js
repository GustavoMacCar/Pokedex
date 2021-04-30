import { Link } from 'react-router-dom'
import styled from 'styled-components'

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


const StyledButton = styled.button `
border-radius: 10px;
border: 2px solid black;
color: white;
font-size: 13px;
outline: none;

&:hover {
    background-image: linear-gradient(45deg, #d17417, #d17417);
}
`
const StyledPokemon = styled.div `
display: inline;
float: left;
margin: 5px;
width: 200px;
height: 200px;
margin-top: 80px;
`

const StyledButtonName = styled.div `
display: flex;
flex-direction: column;
margin-left: 40px;
`

const StyledImage = styled.img `
border: 2px solid black;
border-radius: 10px;
margin-top: 10px;
background-image: linear-gradient(45deg, white, ${props => colors[props.type]});

&:hover {
    background-image: linear-gradient(45deg, black, #f0983a);
    height: 120px;
    width: 120px;
}
`

const StyledImageTwo = styled.img `
border: 2px solid black;
border-radius: 10px;
margin-top: 10px;
background-image: linear-gradient(45deg, ${props => colors[props.firsttype]}, ${props => colors[props.secondtype]});

&:hover {
    background-image: linear-gradient(45deg, black, #f0983a);
    height: 120px;
    width: 120px;
}
`

function Pokemon({img_path, name, kind, changeInfo, handleFavorites, inFavorites})
{
    function upperCase(text) {
        return text.charAt(0).toUpperCase() + text.slice(1);
    } /*Função que coloca a primeira letra em maiúscula das palavra que recebe*/

    let buttonText = ''
    if (inFavorites === true) {
        buttonText = 'Remover'
    } else {
        buttonText = 'Favoritar'
    }

    if(kind !== undefined)
    {

    if (kind.length < 2){
      
    return <StyledPokemon>
        <StyledButtonName>
        <Link to={`/details/${name}`}>
            <StyledImage src={img_path} onClick={() => changeInfo(name)} type={kind[0]}></StyledImage>
        </Link>
            <h3>{upperCase(name)}</h3>        
            <div>
                <StyledButton type="button" onClick={() => handleFavorites(name)}
                style={{backgroundColor: inFavorites ? 'red' : 'green'}}
                >{buttonText}</StyledButton> 
               
            </div>   
        </StyledButtonName>
    </StyledPokemon>

    } else {

        return <StyledPokemon>
        <StyledButtonName>
        <Link to={`/details/${name}`}>
            <StyledImageTwo src={img_path} onClick={() => changeInfo(name)} firsttype={kind[0]} secondtype={kind[1]}></StyledImageTwo>
        </Link>
            <h3>{upperCase(name)}</h3>        
            <div>
                <StyledButton type="button" onClick={() => handleFavorites(name)}
                style={{backgroundColor: inFavorites ? 'red' : 'green'}}
                >{buttonText}</StyledButton> 
               
            </div>   
        </StyledButtonName>
    </StyledPokemon>

    }
} else {

    return <StyledPokemon>
        <StyledButtonName>
        <Link to={`/details/${name}`}>
            <img src={img_path} onClick={() => changeInfo(name)}></img>
        </Link>
            <h3>{upperCase(name)}</h3>        
            <div>
                <StyledButton type="button" onClick={() => handleFavorites(name)}
                style={{backgroundColor: inFavorites ? 'red' : 'green'}}
                >{buttonText}</StyledButton> 
               
            </div>   
        </StyledButtonName>
    </StyledPokemon>

}
    

}

export default Pokemon;