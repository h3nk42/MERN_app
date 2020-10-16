import React from 'react'
import {Button, Input, Select} from "antd";
import {LeftOutlined, CheckOutlined} from "@ant-design/icons";
import PlantSelect from "./PlantSelect";


const AddPlant = (props) =>
{

    const handleClick = () => {
        props.setNewPlantState(!props.newPlantState)
}




    return (
        <div className='flex flex-column items-center justify-center'>
            <Button style={{width: '80px'}} icon={<LeftOutlined />}  onClick={handleClick}> back </Button>
            <Input style={{minWidth: '100px', width: '50%'}} onChange={(e) => props.setMessage(e.target.value )} placeholder="name" />
            <PlantSelect {...props}></PlantSelect>
            <div style={{height:'20px'}}></div>
            <Button style={{width: '80px'}} icon={<CheckOutlined />}  onClick={() => props.handleClick(props.message)}> send </Button>

        </div>
    )
}

export default AddPlant