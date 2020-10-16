import React, { useState, useEffect } from 'react';
import { Button, Input } from "antd";
import {CheckOutlined, PlusCircleOutlined} from '@ant-design/icons';
import Plus from "../../img/Plus";
import AddPlant from "./AddPlantComponent/AddPlant";


function RenderActions (props) {

   const [buttonWait, setButtonWait] = useState(false)
    const [newPlantState, setNewPlantState] = useState( false)


    const returnButton = () => {
       return <Button  icon={<PlusCircleOutlined />} onClick={handleClick}> plant </Button>
    }

    const handleClick = () => {
       setNewPlantState(!newPlantState)
        console.log(newPlantState)

    }

   /* const returnButton = () => {
        return(
        !buttonWait ?
            <Button onClick={() =>{

                props.handleClick(props.message)
                setButtonWait(true)
                setTimeout(() => {
                    setButtonWait(false)
                }, 1000
                )}
            }
                    icon={<PlusCircleOutlined />}
            > plant </Button>
        :
            <Button disabled> plant </Button>
        )
    }*/
// <Input style={{minWidth: '100px', width: '50%'}} onChange={(e) => props.setMessage(e.target.value )} placeholder="your message" />

    return(
        <div className='flex flex-column justify-start items-center' style={{padding: '1% 1%', flexWrap: 'wrap', width: '30%', backgroundColor: 'white'}}>
            {
                newPlantState ?
                    <div>
                        <AddPlant newPlantState={newPlantState} setNewPlantState={setNewPlantState} {...props} ></AddPlant>
                    </div>
                    :
                    <div>
                        {returnButton()}
                    </div>
            }
        </div>
    )

}

export default RenderActions