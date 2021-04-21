import { useState } from "react";

function Paginas({ changePage })
{           
    const [value, setValue] = useState('');

    const handleSubmit = event =>{
        event.preventDefault();
        changePage(value)
    } 


    return <form onSubmit={handleSubmit}>
        <button value={value} onClick={() => setValue('1')}>1</button>
        <button value={value} onClick={() => setValue('2')}>2</button>
        <button value={value} onClick={() => setValue("3")}>3</button>
        <button value={value} onClick={() => setValue("4")}>4</button>
        <button value={value} onClick={() => setValue("5")}>5</button>
        <button value={value} onClick={() => setValue("6")}>6</button>
        <button value={value} onClick={() => setValue("7")}>7</button>
        <button value={value} onClick={() => setValue("8")}>8</button>
        <button value={value} onClick={() => setValue("9")}>9</button>
        <button value={value} onClick={() => setValue("10")}>10</button>
        <button value={value} onClick={() => setValue("11")}>11</button>
        <button value={value} onClick={() => setValue("12")}>12</button>
        <button value={value} onClick={() => setValue("13")}>13</button>
        <button value={value} onClick={() => setValue("14")}>14</button>
        <button value={value} onClick={() => setValue("15")}>15</button>
        <button value={value} onClick={() => setValue("16")}>16</button>
        <button value={value} onClick={() => setValue("17")}>17</button>
        <button value={value} onClick={() => setValue("18")}>18</button>
        <button value={value} onClick={() => setValue("19")}>19</button>
        <button value={value} onClick={() => setValue("20")}>20</button>
        <button value={value} onClick={() => setValue("21")}>21</button>
        <button value={value} onClick={() => setValue("22")}>22</button>
        <button value={value} onClick={() => setValue("23")}>23</button>
        <button value={value} onClick={() => setValue("24")}>24</button>
        <button value={value} onClick={() => setValue("25")}>25</button>
        <button value={value} onClick={() => setValue("26")}>26</button>
        <button value={value} onClick={() => setValue("27")}>27</button>
        <button value={value} onClick={() => setValue("28")}>28</button>
        <button value={value} onClick={() => setValue("29")}>29</button>
        <button value={value} onClick={() => setValue("30")}>30</button>
        <button value={value} onClick={() => setValue("31")}>31</button>
        <button value={value} onClick={() => setValue("32")}>32</button>
        <button value={value} onClick={() => setValue("33")}>33</button>
    </form> 
            

}

export default Paginas;