import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledDiv = styled.div `
display: inline
float: left
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
    
    return <StyledDiv>
        <Link to={`/details/${name}`}><img src={img_path} onClick={() => changeInfo(name)}></img></Link>
        <span>{number}</span>
        <h3>{upperCase(name)}</h3>
        <span>{kind}</span>          
        <div>
        <button type="button" onClick={() => handleFavorites(name)}
        style={{backgroundColor: inFavorites ? 'red' : 'green'}}
        >{buttonText}</button>    
        </div>    
    </StyledDiv>

}

export default Pokemon;