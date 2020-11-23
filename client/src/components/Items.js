import React, {useEffect, useState} from "react";
import RenderItems from "./plantComponents/RenderItems";
import axios from "axios";
import '../styles/BoxShadows.css'
import { message as messagePopup }  from 'antd'
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
       if(props.socket != null) {
            props.socket.on("dbUpdated", data => {
                getDataFromDb(props.url, true);
                messagePopup.info(`db update: ${data}`)
            });
       }
    }, [intervalIsSet, props.url, props.socket])


    //http://localhost:3001/api/getData
    const getDataFromDb = (url, firstTime) => {
        fetch(url+"api/getData")
            .then((data) => data.json())
            .then((res) => {
                setItems(res.data)
                if(firstTime) {setTimeout(() => props.setLoading(false),300)}
            });
    };

    const putDataToDB = (message) => {
        axios.post(`${props.url}api/putData`, {
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
            url: `${props.url}api/deleteData`,
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