import React, {useEffect, useState} from 'react'

const Plantitem = (props) => {

    let [imgHovered, setImgHovered] = useState(false)

    let styles = {
        imageStyle: {
            width: props.width/10,
            height: 'auto',
            margin: 10,
        },
        imageStyleHovered: {
            width: props.width/5,
            height: 'auto',
            margin: 10,
        }
    }

    const imgHoverStyle = () => {
        return imgHovered ?
            styles.imageStyleHovered
            :
            styles.imageStyle
    }

    return (
        <div>
           <li> <img onMouseEnter={() => setImgHovered(true)}
                     onMouseLeave={() => setImgHovered(false)}
                     src={props.value.image_url}
                     style={imgHoverStyle()}
                />
           </li>
        </div>
    )
}
export default Plantitem
