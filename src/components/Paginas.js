import { useState } from "react";

function Paginas({ changePage })
{           
    const [value, setValue] = useState('');

    const handleSubmit = event =>{
        event.preventDefault();
        changePage(value)
    } 


    return <form onSubmit={handleSubmit}>
        <button value={value} onClick={event => setValue('1')}>1</button>
        <button value={value} onClick={event => setValue('2')}>2</button>
        <button value={value} onClick={event => setValue("3")}>3</button>
        <button value={value} onClick={event => setValue("4")}>4</button>
        <button value={value} onClick={event => setValue("5")}>5</button>
        <button value={value} onClick={event => setValue("6")}>6</button>
        <button value={value} onClick={event => setValue("7")}>7</button>
        <button value={value} onClick={event => setValue("8")}>8</button>
        <button value={value} onClick={event => setValue("9")}>9</button>
        <button value={value} onClick={event => setValue("10")}>10</button>
        <button value={value} onClick={event => setValue("11")}>11</button>
        <button value={value} onClick={event => setValue("12")}>12</button>
        <button value={value} onClick={event => setValue("13")}>13</button>
        <button value={value} onClick={event => setValue("14")}>14</button>
        <button value={value} onClick={event => setValue("15")}>15</button>
        <button value={value} onClick={event => setValue("16")}>16</button>
        <button value={value} onClick={event => setValue("17")}>17</button>
        <button value={value} onClick={event => setValue("18")}>18</button>
        <button value={value} onClick={event => setValue("19")}>19</button>
        <button value={value} onClick={event => setValue("20")}>20</button>
        <button value={value} onClick={event => setValue("21")}>21</button>
        <button value={value} onClick={event => setValue("22")}>22</button>
        <button value={value} onClick={event => setValue("23")}>23</button>
        <button value={value} onClick={event => setValue("24")}>24</button>
        <button value={value} onClick={event => setValue("25")}>25</button>
        <button value={value} onClick={event => setValue("26")}>26</button>
        <button value={value} onClick={event => setValue("27")}>27</button>
        <button value={value} onClick={event => setValue("28")}>28</button>
        <button value={value} onClick={event => setValue("29")}>29</button>
        <button value={value} onClick={event => setValue("30")}>30</button>
        <button value={value} onClick={event => setValue("31")}>31</button>
        <button value={value} onClick={event => setValue("32")}>32</button>
        <button value={value} onClick={event => setValue("33")}>33</button>
    </form> 
            

}

export default Paginas;