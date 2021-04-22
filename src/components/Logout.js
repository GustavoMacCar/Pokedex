function Logout( {loginUser, coach} ) 
{

    const handleSubmit = event =>{
        event.preventDefault();
        loginUser('')
    }

    return <form onSubmit={handleSubmit}>
        <h3>Olá {coach}</h3>
        <button>Sair</button>
    </form>

}

export default Logout;