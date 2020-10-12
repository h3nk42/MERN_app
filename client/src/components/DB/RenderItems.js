import React, { useState } from 'react';

import {Row, Col, Button} from 'antd';



function RenderItems (props) {


    const listItems = props.items.map( (data) =>
            <div key={data.id} style={{ margin:'1%', padding: '1%', width: '14%', height: '20%', backgroundColor: 'black'}}>
                <p style={{color: 'white'}}> Msg: {data.message} </p>
                <p style={{color: 'white'}}> id: {data.id} </p>
                <Button danger type="text" onClick={() => {props.deleteItem(data.id)}}> delete </Button>
            </div>
    )

    return(
        <div style={{display: 'flex', flexDirection: 'row', alignContent: 'flex-start', flexWrap: 'wrap', padding: '2%', width: '70%', height: '100%', backgroundColor: 'blue'}}>
            {listItems}
        </div>

    )
}


export default RenderItems