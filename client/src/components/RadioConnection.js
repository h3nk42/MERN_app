import React, {useState} from 'react'
import {Radio} from "antd";



const RadioConnection = (props) => {
    const [disable, setDisable] = useState(false)


    return (
            <Radio.Group disabled={disable} className= 'self-center'  defaultValue="b" size="large">
                <Radio.Button onClick={ () => {
                    props.onChange(false)
                    setDisable(true)
                    setTimeout(() => setDisable(false),1000)
                }}
                              value="a"> firebase </Radio.Button>
                <Radio.Button onClick={ () => {
                    props.onChange(true)
                    setDisable(true)
                    setTimeout(() => setDisable(false),1000)
                }}
                              value="b">localhost</Radio.Button>
            </Radio.Group>
    )
}

export default RadioConnection



