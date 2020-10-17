import React, { useState } from 'react';
import {Row, Col, Button, Card, Avatar, Empty} from 'antd';
import { DeleteOutlined, ProfileOutlined ,  EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import PlantPlus from "./AddPlantComponent/PlantPlus";
const { Meta } = Card


function RenderItems (props) {


    const imgLinks = [
        'https://i.ibb.co/hR0KZxL/Kisspng-swiss-cheese-plant-leaf-tropical-garden-plant-stem-5c7429221e11b9-0010663715511165781232.png',
        'https://i.ibb.co/W5SF0WC/philo.png',
        'https://i.ibb.co/YWg53wH/ufoplant.png'
    ]

    const renderEmpty = () => {
        return props.items.length>0 ?
           <div/>
            :
            <Empty description={'no plants..'}/>
    }




    const listItems = props.items.map( (data) =>
        <Card
            key={data._id}
            style={{ width: 200, margin: '0.5%',boxShadow: '2px 2px 10px black' }}
            cover={
                <img
                    alt="example"
                    src= {imgLinks[ data.id-1]}
                />
            }
            actions={[
                <ProfileOutlined onClick={() => {props.handlePlantView()}} key="ellipsis" />,
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
        <div className='flex flex-row items-center justify-center' style={{flexWrap: 'wrap', padding: '2%', width: '100%', height: '100%', backgroundColor: props.colorScheme.fifth}}>
            {renderEmpty()}
            {listItems}
            <PlantPlus {...props} />
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
