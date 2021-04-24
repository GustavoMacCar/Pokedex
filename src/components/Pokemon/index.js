import { Link } from 'react-router-dom'

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
    
    return <div>
        <Link to={`/details/${name}`}><img src={img_path} onClick={() => changeInfo(name)}></img></Link>
        <span>{number}</span>
        <h3>{upperCase(name)}</h3>
        <span>{kind}</span>          
        <div>
        <button type="button" onClick={() => handleFavorites(name)}
        style={{backgroundColor: inFavorites ? 'red' : 'green'}}
        >{buttonText}</button>    
        </div>    
    </div>

}

export default Pokemon;