function Pokemon({img_path, number, name, kind, changeInfo})
{

      
    return <div>
       <img src={img_path} onClick={() => changeInfo(name)}></img>
        <span>{number}</span>
        <h3>{name}</h3>
        <span>{kind}</span>         
    </div>

}

export default Pokemon;