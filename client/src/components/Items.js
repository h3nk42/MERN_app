import React, {useEffect, useState} from "react";
import RenderItems from "./plantComponents/RenderItems";
import axios from "axios";
import '../styles/BoxShadows.css'
import {Button, Divider} from 'antd'
import {CheckOutlined, LoadingOutlined } from "@ant-design/icons";
import PlantPlus from "./plantComponents/AddPlantComponent/PlantPlus";

let messages = [];

function Items (props) {

    const [items, setItems] = useState([] )
    const [intervalIsSet, setIntervalIsSet] = useState(false)
    const [message, setMessage] = useState(null)
    const [age, setAge] = useState(null)


    useEffect(() => {
        getDataFromDb(props.url, true);
        if (!intervalIsSet) {
            let interval = setInterval(() => getDataFromDb(props.url,false), 1000);
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
    }, [intervalIsSet, props.url])

//http://localhost:5001/shareyourplant-b5c9a/us-central1/app/api

    //http://localhost:3001/api/getData
    const getDataFromDb = (url, firstTime) => {
        fetch(url+"/getData")
            .then((data) => data.json())
            .then((res) => {
                setItems(res.data)
                if(firstTime) {setTimeout(() => props.setLoading(false),300)}
            });
    };

    const putDataToDB = (message) => {
        axios.post(`${props.url}/putData`, {
            id: age,
            message: message,
        });
        setMessage(null)
        setAge(null)
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
        props.loading ?
            <div className='flex flex-column justify-start items-center' style={{height: '800px', width: '800px'}}>
                <div className='flex flex-column justify-center items-center' style={{width: '30%', height: '40%', backgroundColor: props.colorScheme.fifth}}>
                    <LoadingOutlined style={{ fontSize: '100px', color: 'white' }} />
                </div>
            </div>
            :
            <div className='flex flex-column'>
                <div  style={{boxShadow: '9px 11px 34px 1px rgba(0,0,0,0.71)', maxWidth: '60%', height: '100%', display: 'flex', flexDirection: 'column'}}>
                    <RenderItems handleClick={putDataToDB} message={message} setMessage={setMessage} age={age} setAge={setAge} items={items} setItems={setItems} deleteItem={deleteFromDB} {...props} />
                </div>
                <div className='self-center pt-4'>
                    <PlantPlus handleClick={putDataToDB} message={message} setMessage={setMessage} age={age} setAge={setAge} items={items} setItems={setItems} {...props} />
                </div>
            </div>
    )
}

export default Items