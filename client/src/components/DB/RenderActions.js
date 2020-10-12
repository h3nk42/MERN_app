import React, { useState } from 'react';
import { Button, Input } from "antd";

function RenderActions (props) {


    return(
        <div style={{ padding: '1% 1%', display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start', width: '30%', backgroundColor: 'red'}}>
            <Input onChange={(e) => props.setMessage(e.target.value )} placeholder="your message" />
            <Button onClick={() =>{props.handleClick(props.message)}}> send </Button>
        </div>
    )

}

export default RenderActions