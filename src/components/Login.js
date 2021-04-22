import { useState } from "react";

function Login( {loginUser}) 
{
    const [coach, setCoach] = useState('');

    const handleSubmit = event =>{
        event.preventDefault();
        loginUser(coach)
    }

    return <form onSubmit={handleSubmit}>
        <h2>Bem vindo!!!!</h2>
        <h3>Digite seu nome treinador!</h3>
        <input value={coach} onChange={event => setCoach(event.target.value)}></input>
        <button>Enviar</button>
    </form>

}

export default Login;