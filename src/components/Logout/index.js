import styled from 'styled-components'
import {Link} from 'react-router-dom'

const StyledBarra = styled.div `
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
background-color: red;
margin-top: 10px;
border-radius: 30px;
border: 5px solid black;
height: 50px;
justify-content: space-between;
padding-left: 20px;
padding-right: 20px;
`

const StyledButton = styled.button `
height: 30px;
width: 80px;
font-size: 18px;
border: 3px solid white;
border-radius: 15px;
outline: none;
color: white;
background-color: red; 
`

const StyledCoach = styled.h3 `
color: white; 
`

const linkStyle = {
fontSize: "18px",
color: 'white',
textDecoration: "none"
} ;


function Logout( {loginUser, coach} ) 

{

    const handleSubmit = event =>{
        event.preventDefault();
        loginUser('')
    }

    return <form onSubmit={handleSubmit}>
        <StyledBarra>
            <StyledCoach>Olá {coach} !!</StyledCoach>
            <Link to="/favorites/" style={linkStyle}>Meus Favoritos</Link>
            <StyledButton>Sair</StyledButton>
        </StyledBarra>
    </form>

}

export default Logout;