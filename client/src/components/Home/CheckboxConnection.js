import React, {useState} from 'react'
import {Checkbox} from "antd";



const CheckboxConnection = (props) => {
    const [disable, setDisable] = useState(false)


    return (
        disable ?
            <Checkbox disabled={true} className='self-center' onChange={props.onChange}>CONNECT TO FIREBASE</Checkbox>
            :
            <Checkbox className='self-center' onChange={() => {
                props.onChange()
                setDisable(true)
                setTimeout(() => setDisable(false),3000)
            }}>CONNECT TO FIREBASE</Checkbox>
    )
}

export default CheckboxConnection