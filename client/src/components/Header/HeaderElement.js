import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'

const HeaderElement = (props) => {
    const [hover, setHover] = useState(false)

    const history = useHistory()

    const getBackgroundColor = () => {
        return hover ? (props.colorScheme.fourth) : ('')
    }

    const toggleHover = () => {
        setHover(!hover)
    }

    return (
        <div
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}
            onClick={() => {
                history.push(`/${props.route}`)
            }}
            key={props.val}
            className='flex flex-row justify-center items-center'
            style={{
                cursor: 'pointer',
                marginLeft: '4%',
                marginRight: '4%',
                height: 'auto',
                width: '100%',
                backgroundColor: getBackgroundColor()
            }}>
            {props.val}
        </div>

    )

}

export default HeaderElement
