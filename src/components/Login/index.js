import { useState } from "react";
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const StyledInput = styled.input `
border-radius: 10px;
padding-left: 7px;
outline: none;
border: 1px solid #ddd;

&:hover {
    border 1px 3px 3px 1px solid #ddd;
}
` 

const StyledButton = styled.button `
margin-top: 10px;
height: 30px;
width: 80px;
font-size: 15px;
border-radius: 15px;
outline: none;
background-color: black; 
border: 2px solid blue;
color: white;

&:hover {
    background-color: blue; 
}
`

const StyledDiv = styled.div `
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`


function Login( {loginUser}) 
{
    const [coach, setCoach] = useState('');

    const handleSubmit = event =>{
        event.preventDefault();
        loginUser(coach)
    }

    return <form onSubmit={handleSubmit}>
        <StyledDiv>
            <h2>Bem vindo à Pokedex!!!!</h2>
            <h3>Digite seu nome de treinador!!</h3>
            <StyledInput value={coach} onChange={event => setCoach(event.target.value)}></StyledInput>
            
            <StyledButton>Enviar</StyledButton> 
            
        </StyledDiv>
        
    </form>

}

export default Login;