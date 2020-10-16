import React, { useState } from 'react';

import {Row, Col, Button, Card, Avatar} from 'antd';
import { DeleteOutlined,  EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
const { Meta } = Card


function RenderItems (props) {

    const listItems = props.items.map( (data) =>
        <Card
            key={data.id}
            style={{ width: 200, margin: '0.5%' }}
            cover={
                <img
                    alt="example"
                    src='https://i.ibb.co/hR0KZxL/Kisspng-swiss-cheese-plant-leaf-tropical-garden-plant-stem-5c7429221e11b9-0010663715511165781232.png'
                />
            }
            actions={[

                <DeleteOutlined onClick={() => {props.deleteItem(data.id)}} key="ellipsis" />,
            ]}
        >
            <Meta
                title={data.message}
                description= {data.id}
            />
        </Card>
    )

    return(
        <div style={{display: 'flex', flexDirection: 'row', alignContent: 'flex-start', flexWrap: 'wrap', padding: '2%', width: '70%', height: '100%', backgroundColor: 'white'}}>
                {listItems}
        </div>

    )
}


export default RenderItems


/*
style={{ margin:'1%', padding: '1%', width: '14%', height: '20%', backgroundColor: 'black'}}
 <div key={data.id}>
                <p style={{color: 'white'}}> Msg: {data.message} </p>
                <p style={{color: 'white'}}> id: {data.id} </p>
                <Button danger type="text" onClick={() => {props.deleteItem(data.id)}}> delete </Button>
            </div>
*/
