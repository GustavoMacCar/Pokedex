import { useState } from "react";
import styled from 'styled-components'


const StyledNumber = styled.div `
display: flex;
flex-direction: row;
border-radius: 30px;
width: 100%;

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
        <button onClick={() => previousPage(currentPage)}>Página anterior</button>                        
        </div>
        <StyledNumber>
            <form onSubmit={handleSubmit}>
            <button onClick={() => setValue(1)}>1</button>
            <button onClick={() => setValue(2)}>2</button>
            <button onClick={() => setValue(3)}>3</button>
            <button onClick={() => setValue(4)}>4</button>
            <button onClick={() => setValue(5)}>5</button>
            <button onClick={() => setValue(6)}>6</button>
            <button onClick={() => setValue(7)}>7</button>
            <button onClick={() => setValue(8)}>8</button>
            <button onClick={() => setValue(9)}>9</button>
            <button onClick={() => setValue(10)}>10</button>
            <button onClick={() => setValue(11)}>11</button>
            <button onClick={() => setValue(12)}>12</button>
            <button onClick={() => setValue(13)}>13</button>
            <button onClick={() => setValue(14)}>14</button>
            <button onClick={() => setValue(15)}>15</button>
            <button onClick={() => setValue(16)}>16</button>
            <button onClick={() => setValue(17)}>17</button>
            <button onClick={() => setValue(18)}>18</button>
            <button onClick={() => setValue(19)}>19</button>
            <button onClick={() => setValue(20)}>20</button>
            <button onClick={() => setValue(21)}>21</button>
            <button onClick={() => setValue(22)}>22</button>
            <button onClick={() => setValue(23)}>23</button>
            <button onClick={() => setValue(24)}>24</button>
            <button onClick={() => setValue(25)}>25</button>
            <button onClick={() => setValue(26)}>26</button>
            <button onClick={() => setValue(27)}>27</button>
            <button onClick={() => setValue(28)}>28</button>
            <button onClick={() => setValue(29)}>29</button>
            <button onClick={() => setValue(30)}>30</button>
            <button onClick={() => setValue(31)}>31</button>
            <button onClick={() => setValue(32)}>32</button>
            <button onClick={() => setValue(33)}>33</button>
    </form> 
    </StyledNumber>
    <div>
        <button onClick={() => nextPage(currentPage)}>Página seguinte</button>                        
    </div>
    </div>
            

}

export default Paginas;