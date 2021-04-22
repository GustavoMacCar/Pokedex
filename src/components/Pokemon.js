function Pokemon({img_path, number, name, kind, changeInfo})
{
    function upperCase(text) {
        return text.charAt(0).toUpperCase() + text.slice(1);
    } /*Função que coloca a primeira letra em maiúscula das palavra que recebe*/
    
    return <div>
        <img src={img_path} onClick={() => changeInfo(name)}></img>
        <span>{number}</span>
        <h3>{upperCase(name)}</h3>
        <span>{upperCase(kind)}</span>         
    </div>

}

export default Pokemon;