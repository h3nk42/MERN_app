import React, {useEffect, useState} from "react";
import RenderItems from "./DB/RenderItems";
import RenderActions from "./DB/RenderActions";
import axios from "axios";
import '../styles/BoxShadows.css'
import { Divider } from 'antd'

let messages = [];

function Items () {

    const [items, setItems] = useState([] )
    const [intervalIsSet, setIntervalIsSet] = useState(false)
    const [message, setMessage] = useState(null)
    const [highestId, setHighestId] = useState(0)

    useEffect(() => {
        getDataFromDb();
        if (!intervalIsSet) {
            let interval = setInterval(getDataFromDb, 1000);
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
    }, [intervalIsSet])

    const getDataFromDb = () => {
        fetch('http://localhost:3001/api/getData')
            .then((data) => data.json())
            .then((res) => {
                setItems(res.data)
                setHighestId(Object.values(res.data).length)
            });
    };

    const putDataToDB = (message) => {

        let idToBeAdded = highestId + 1;


        axios.post('http://localhost:3001/api/putData', {
            id: idToBeAdded,
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
            url: 'http://localhost:3001/api/deleteData',
            data: {id: objIdToDelete}
        });

    };


    return (
        <div className={'card-3'} style={{height: '100%', display: 'flex', flexDirection: 'row'}}>
            <RenderItems items={items} setItems={setItems} deleteItem={deleteFromDB}/>
            <div style={{width: '1px'}}>
                <Divider type="vertical" />
            </div>
            <RenderActions handleClick={putDataToDB} message={message} setMessage={setMessage} ></RenderActions>
        </div>
    )
}

export default Items