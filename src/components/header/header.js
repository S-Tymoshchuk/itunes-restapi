import React, {useState} from 'react'
import "./style.css";

const Header = (props) => {
    const [query, setQuery] = useState(0);
    const onChange = (e) => {
        setQuery(e.currentTarget.value)
    };

    const addItem = (e) => {
        e.preventDefault();
        props.addQuery(query)
    }

    return (
        <div className={"inputForm"}>
            <form>
                <input type="text" onChange={onChange} placeholder={"Поиск артиста"}/>
                <button onClick={addItem}>поиск</button>
            </form>
        </div>
    )
}

export default Header;