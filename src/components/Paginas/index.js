import { useState } from "react";
import styled from 'styled-components'


const StyledNumber = styled.button `
border-radius: 10px;
border: 2px solid blue;
background-color: black;
margin-right: 5px;
margin-top: 5px;
color: white;
font-size: 12px;
outline: none;

&:hover {
    background-color: blue; 
}
`
const StyledNext = styled.button `
border-radius: 10px;
border: 2px solid blue;
background-color: black;
margin-right: 7px;
margin-top: 5px;
color: white;
font-size: 12px;
outline: none;

&:hover {
    background-color: blue; 
}
`


const SyteldButtons = styled.div `
display: flex;
flex-direction: row;
margin-bottom: 20px;
margin-left: 5px;
`



function Paginas({ changePage, currentPage, nextPage, previousPage })
{           
    const [value, setValue] = useState('');

    const handleSubmit = event =>{
        event.preventDefault();
        changePage(value)
    } 


    return <div>
        <SyteldButtons>  
        <StyledNext onClick={() => previousPage(currentPage)}>Anterior</StyledNext>                      
            <form onSubmit={handleSubmit}>
            <StyledNumber onClick={() => setValue(1)}>01</StyledNumber>
            <StyledNumber onClick={() => setValue(2)}>02</StyledNumber>
            <StyledNumber onClick={() => setValue(3)}>03</StyledNumber>
            <StyledNumber onClick={() => setValue(4)}>04</StyledNumber>
            <StyledNumber onClick={() => setValue(5)}>05</StyledNumber>
            <StyledNumber onClick={() => setValue(6)}>06</StyledNumber>
            <StyledNumber onClick={() => setValue(7)}>07</StyledNumber>
            <StyledNumber onClick={() => setValue(8)}>08</StyledNumber>
            <StyledNumber onClick={() => setValue(9)}>09</StyledNumber>
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
    <StyledNext onClick={() => nextPage(currentPage)}>Próximo</StyledNext>   
    </SyteldButtons>
    </div>
            

}

export default Paginas;