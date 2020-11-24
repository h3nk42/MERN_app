import React from 'react'
import {Button, Input, Select} from "antd";
import {LeftOutlined, CheckOutlined} from "@ant-design/icons";
import PlantSelect from "./PlantSelect";


const AddPlant = (props) => {
    return (
        <div className='flex flex-column items-center justify-center'>
            <Button style={{width: '80px'}} icon={<LeftOutlined />}  onClick={props.handlePlantState}> back </Button>
            <Input style={{minWidth: '100px', width: '50%'}} onChange={(e) => props.setMessage(e.target.value )} placeholder="name" />
            <PlantSelect {...props}></PlantSelect>
            <div style={{height:'20px'}}></div>
            {
                (props.message && props.age ) ?
                    <Button style={{width: '80px'}} icon={<CheckOutlined />}  onClick={() => {
                        props.handleClick(props.message)
                        props.handlePlantState()
                    }
                    }> send </Button>
                    :
                    <Button disabled={true} style={{width: '80px'}} icon={<CheckOutlined />}  onClick={() => {
                        props.handleClick(props.message)
                        props.handlePlantState()
                    }
                    }> send </Button>
            }


        </div>
    )
}

export default AddPlant