function Pokemon({img_path, number, name, kind})
{
    return <li>
        <img src={img_path}></img>
        <span>{number}</span>
        <h3>{name}</h3>
        <span>{kind}</span>         
    </li>

}

export default Pokemon;