import { useState } from "react";
import styled from 'styled-components'


const StyledNumber = styled.button `
border-radius: 10px;
border: 2px solid blue;
background-color: black;
margin-right: 10px;
margin-top: 5px;
color: white;
font-size: 13px;
outline: none;
`
const StyledNext = styled.button `
border-radius: 10px;
border: 2px solid blue;
background-color: black;
margin-right: 10px;
margin-top: 5px;
color: white;
font-size: 15px;
outline: none;
`


const SyteldButtons = styled.div `
display: flex;
flex-direction: row;

`



function Paginas({ changePage, currentPage, nextPage, previousPage })
{           
    const [value, setValue] = useState('');

    const handleSubmit = event =>{
        event.preventDefault();
        changePage(value)
    } 


    return <div>
        <div>
        <StyledNext onClick={() => previousPage(currentPage)}>Página anterior</StyledNext>                        
        </div>
        <SyteldButtons>
            <form onSubmit={handleSubmit}>
            <StyledNumber onClick={() => setValue(1)}>1</StyledNumber>
            <StyledNumber onClick={() => setValue(2)}>2</StyledNumber>
            <StyledNumber onClick={() => setValue(3)}>3</StyledNumber>
            <StyledNumber onClick={() => setValue(4)}>4</StyledNumber>
            <StyledNumber onClick={() => setValue(5)}>5</StyledNumber>
            <StyledNumber onClick={() => setValue(6)}>6</StyledNumber>
            <StyledNumber onClick={() => setValue(7)}>7</StyledNumber>
            <StyledNumber onClick={() => setValue(8)}>8</StyledNumber>
            <StyledNumber onClick={() => setValue(9)}>9</StyledNumber>
            <StyledNumber onClick={() => setValue(10)}>10</StyledNumber>
            <StyledNumber onClick={() => setValue(11)}>11</StyledNumber>
            <StyledNumber onClick={() => setValue(12)}>12</StyledNumber>
            <StyledNumber onClick={() => setValue(13)}>13</StyledNumber>
            <StyledNumber onClick={() => setValue(14)}>14</StyledNumber>
            <StyledNumber onClick={() => setValue(15)}>15</StyledNumber>
            <StyledNumber onClick={() => setValue(16)}>16</StyledNumber>
            <StyledNumber onClick={() => setValue(17)}>17</StyledNumber>
            <StyledNumber onClick={() => setValue(18)}>18</StyledNumber>
            <StyledNumber onClick={() => setValue(19)}>19</StyledNumber>
            <StyledNumber onClick={() => setValue(20)}>20</StyledNumber>
            <StyledNumber onClick={() => setValue(21)}>21</StyledNumber>
            <StyledNumber onClick={() => setValue(22)}>22</StyledNumber>
            <StyledNumber onClick={() => setValue(23)}>23</StyledNumber>
            <StyledNumber onClick={() => setValue(24)}>24</StyledNumber>
            <StyledNumber onClick={() => setValue(25)}>25</StyledNumber>
            <StyledNumber onClick={() => setValue(26)}>26</StyledNumber>
            <StyledNumber onClick={() => setValue(27)}>27</StyledNumber>
            <StyledNumber onClick={() => setValue(28)}>28</StyledNumber>
            <StyledNumber onClick={() => setValue(29)}>29</StyledNumber>
            <StyledNumber onClick={() => setValue(30)}>30</StyledNumber>
            <StyledNumber onClick={() => setValue(31)}>31</StyledNumber>
            <StyledNumber onClick={() => setValue(32)}>32</StyledNumber>
            <StyledNumber onClick={() => setValue(33)}>33</StyledNumber>
    </form> 
    </SyteldButtons>
    <div>
        <StyledNext onClick={() => nextPage(currentPage)}>Página seguinte</StyledNext>                        
    </div>
    </div>
            

}

export default Paginas;