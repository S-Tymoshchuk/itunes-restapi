import React, {useState, useEffect} from "react";
import Header from "../header/header";
import BodyTable from "../Body/Body";
import "../Body/style.css";
import {queryApi} from "../Api/Api";


const App = () => {
    const [query, setQuery] = useState(' ');
    const [data, setData] = useState([]);
    const onSubmit = (value) => {
        setQuery(value);
    };

    useEffect(() => {
        queryApi.getQuery(query)
            .then(response => {
                setData(response.data.results);
            })

    }, [query]);


    return (
        <div>
            <Header addQuery={onSubmit}/>
            <BodyTable data={data}/>
        </div>
    )

};

export default App;