import React, {useEffect, useState} from "react";
import RenderItems from "./plantComponents/RenderItems";
import RenderActions from "./plantComponents/RenderActions";
import axios from "axios";
import '../styles/BoxShadows.css'
import {Button, Divider} from 'antd'
import {CheckOutlined} from "@ant-design/icons";

let messages = [];

function Items (props) {

    const [items, setItems] = useState([] )
    const [intervalIsSet, setIntervalIsSet] = useState(false)
    const [message, setMessage] = useState(null)
    const [highestId, setHighestId] = useState(0)
    const [age, setAge] = useState(null)

    useEffect(() => {
        getDataFromDb(props.url);
        if (!intervalIsSet) {
            let interval = setInterval(() => getDataFromDb(props.url), 1000);
            setIntervalIsSet(interval);
        }
        // never let a process live forever
        // always kill a process everytime we are done using it
        return function cleanUp() {
            if (intervalIsSet) {
                clearInterval(intervalIsSet);
                setIntervalIsSet(null);
            }
        }
    }, [intervalIsSet, props])

//http://localhost:5001/shareyourplant-b5c9a/us-central1/app/api

    //http://localhost:3001/api/getData
    const getDataFromDb = (url) => {
        fetch(url)
            .then((data) => data.json())
            .then((res) => {
                setItems(res.data)
                setHighestId(Object.values(res.data).length)
            });
    };

    const putDataToDB = (message) => {

        let idToBeAdded = highestId + 1;


        axios.post(`${props.url}/putData`, {
            id: age,
            message: message,
        });
    };


    const deleteFromDB = (idTodelete) => {
        parseInt(idTodelete);
        let objIdToDelete = null;
        items.forEach((dat) => {
            if (dat.id == idTodelete) {
                objIdToDelete = dat._id;
            }
        });

        axios({
            method: 'delete',
            url: `${props.url}/deleteData`,
            data: {id: objIdToDelete}
        });

    };


    return (
        <div className={'card-3'} style={{height: '100%', display: 'flex', flexDirection: 'row'}}>
            <RenderItems handleClick={putDataToDB} message={message} setMessage={setMessage} setAge={setAge} items={items} setItems={setItems} deleteItem={deleteFromDB} {...props} />
            <div style={{width: '1px', backgroundColor: 'grey'}}>
                <Divider type="vertical" />
            </div>
            <RenderActions handleClick={putDataToDB} message={message} setMessage={setMessage} setAge={setAge}></RenderActions>
        </div>
    )
}

export default Items