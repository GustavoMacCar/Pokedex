import { Link } from 'react-router-dom'

function Pokemon({img_path, number, name, kind, changeInfo})
{

      
    return <div>
     <Link to={`/details/${name}`}><img src={img_path} onClick={() => changeInfo(name)}></img></Link>
        <span>{number}</span>
        <h3>{name}</h3>
        <span>{kind}</span>         
    </div>

}

export default Pokemon;