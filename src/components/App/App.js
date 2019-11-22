import React, {useState, useEffect} from "react";
import Header from "../header/header";
import BodyTable from "../Body/Body";
import "../Body/style.css";
import {queryApi} from "../Api/Api";


const App = () => {
    const [data, setData] = useState([]);
    const onSubmit = (value) => {
        queryApi.getQuery(value)
            .then(res => {
                setData(res.data.results)
            })
    };

    return (
        <div>
            <Header addQuery={onSubmit}/>
            <BodyTable data={data}/>
        </div>
    )

};

export default App;