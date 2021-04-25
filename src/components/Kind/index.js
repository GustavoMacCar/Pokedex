import styled from 'styled-components'

const colors = {
    bug:"#7ED578",
    electric:"#FFF34B",
    fairy:"#FF7EE5",
    fighting:"#F17373",
    fire:"#FFB433",
    flying:"#D7F1E9",
    ghost:"#E2E2E2",
    grass:"#5EFF53",
    ground:"#AA8546",
    ice:"#AEE3FB",
    normal:"#D7DBA8",
    poison:"#CE52F9",
    psychic:"#FFC157",
    rock:"#757575",
    steel:"#A1A1A1",
    water:"#7192FF",
    dragon:"#43372D",
    dark:"#4c2180"
}

const StyledKind = styled.div `
background-color: ${props => colors[props.type]};
border-radius: 20px;
width: 30%;
display: flex;
align-items: right;
justify-content: center;
`


function Kind( {type} ) 
{    

    return <StyledKind type={type}>
        <p>{type}</p>
    </StyledKind>
}

export default Kind;

