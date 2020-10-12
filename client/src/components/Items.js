import React, {useEffect, useState} from "react";
import RenderItems from "./DB/RenderItems";
import RenderActions from "./DB/RenderActions";
import axios from "axios";

function Items () {

    const [items, setItems] = useState([1] )
    const [intervalIsSet, setIntervalIsSet] = useState(false)
    const [message, setMessage] = useState(null)

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
            .then((res) => setItems(res.data));
    };

    const putDataToDB = (message) => {
        let currentIds = items.map((data) => data.id);
        let idToBeAdded = 0;
        while (currentIds.includes(idToBeAdded)) {
            ++idToBeAdded;
        }

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
        <div style={{boxShadow: '0 0 5px 10px #555', height: '100%', display: 'flex', flexDirection: 'row'}}>
            <RenderItems items={items} setItems={setItems} deleteItem={deleteFromDB}/>
            <RenderActions handleClick={putDataToDB} message={message} setMessage={setMessage}></RenderActions>
        </div>
    )
}

export default Items