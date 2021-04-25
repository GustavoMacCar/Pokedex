import { Link } from 'react-router-dom'
import styled from 'styled-components'


const StyledButton = styled.button `
border-radius: 10px;
border: 2px solid black;
color: white;
font-size: 13px;
outline: none;
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
background-image: linear-gradient(45deg, black, #4287f5);

&:hover {
    background-image: linear-gradient(45deg, black, #f0983a);
    height: 120px;
    width: 120px;
}
`

function Pokemon({img_path, number, name, kind, changeInfo, handleFavorites, inFavorites})
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
    
    return <StyledPokemon>
        <StyledButtonName>
        <Link to={`/details/${name}`}>
            <StyledImage src={img_path} onClick={() => changeInfo(name)}></StyledImage>
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

export default Pokemon;