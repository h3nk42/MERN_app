import React, {useEffect, useState} from 'react'

const Plantitem = (props) => {

    let [imgHovered, setImgHovered] = useState(false)

    let styles = {
        imageStyle: {
            width: props.width/10,
            minWidth: '100px',
            height: props.height/15,
            margin: 10,
            borderRadius: 100,
            objectFit: 'cover',
            boxShadow:    '2px 2px 20px #444444',
        },
        imageStyleHovered: {
            width: props.width/5,
            height: 'auto',
            maxHeight: '300px',
            margin: 10,
            borderRadius: 50,
            objectFit: 'cover',
            boxShadow:    '2px 2px 20px #444444',
        },
        imageStyleMobile: {
            width: '100px',
            height:'100px',
            margin: 10,
            borderRadius: 100,
            objectFit: 'cover',
            boxShadow:    '2px 2px 20px #444444',
        },
        imageStyleHoveredMobile: {
            width: '200px',
            height:'200px',
            margin: 10,
            borderRadius: 50,
            objectFit: 'cover',
            boxShadow:    '2px 2px 20px #444444',
        },
        fontStyle: {
            textAlign: 'center',
            paddingLeft: '20px',
            marginTop: '-10px',
            fontSize: '16px',
            fontFamily: 'Modak',
            letterSpacing: '2px',
            color: '#00ffbb',
        }
    }

    const imgHoverStyle = (mobile) => {

        return mobile ?
            imgHovered ?
                styles.imageStyleHoveredMobile
                :
                styles.imageStyleMobile
            :
            imgHovered ?
                styles.imageStyleHovered
                :
                styles.imageStyle
    }

    return (
        props.width < 400 ?
            <div>
                <li>
                    <img onMouseEnter={() => setImgHovered(true)}
                         onMouseLeave={() => setImgHovered(false)}
                         src={props.value.image_url}
                         style={imgHoverStyle(true)}
                    />
                    <h1 style={styles.fontStyle}> {props.value.common_name}</h1>
                </li>
            </div>
            :
            <div>
               <li>
                   <img onMouseEnter={() => setImgHovered(true)}
                         onMouseLeave={() => setImgHovered(false)}
                         src={props.value.image_url}
                         style={imgHoverStyle(false)}
                    />
                   <h1 style={styles.fontStyle}> {props.value.common_name}</h1>
               </li>
            </div>
    )
}
export default Plantitem
