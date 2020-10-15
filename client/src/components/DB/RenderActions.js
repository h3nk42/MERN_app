import React, { useState, useEffect } from 'react';
import { Button, Input } from "antd";


function RenderActions (props) {

   const [buttonWait, setButtonWait] = useState(false)


    const returnButton = () => {
        return(
        !buttonWait ?
            <Button onClick={() =>{

                props.handleClick(props.message)
                setButtonWait(true)
                setTimeout(() => {
                    setButtonWait(false)
                }, 1000
                )}
            }> send </Button>
        :
            <Button disabled> send </Button>
        )
    }


    return(
        <div style={{padding: '1% 1%', display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start', alignContent:'flex-start', flexWrap: 'wrap', width: '30%', backgroundColor: 'white'}}>
            <Input style={{minWidth: '100px', width: '50%'}} onChange={(e) => props.setMessage(e.target.value )} placeholder="your message" />
            {returnButton()}
        </div>
    )

}

export default RenderActions