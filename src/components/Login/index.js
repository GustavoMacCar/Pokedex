import { useState } from "react";
import styled from 'styled-components'

const StyledInput = styled.input `
border-radius: 10px;
padding-left: 7px;
outline: none;
border: 1px solid #ddd;
`

const StyledButton = styled.button `
margin-top: 10px;
height: 30px;
width: 80px;
font-size: 15px;
border: 1px solid black;
border-radius: 15px;
outline: none;
background-color: #ddd; 
}
`

function Login( {loginUser}) 
{
    const [coach, setCoach] = useState('');

    const handleSubmit = event =>{
        event.preventDefault();
        loginUser(coach)
    }

    return <form onSubmit={handleSubmit}>
        <h2>Bem vindo!!!!</h2>
        <h3>Digite seu nome treinador!!</h3>
        <StyledInput value={coach} onChange={event => setCoach(event.target.value)}></StyledInput>
        <StyledButton>Enviar</StyledButton>
    </form>

}

export default Login;