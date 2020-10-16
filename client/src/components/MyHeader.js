import React from 'react'
import HeaderElement from "./HeaderElement";
import PlantSvg from "../img/PlantSvg";
import Plus from "../img/Plus";
import Fragezeichen from "../img/Fragezeichen";

const MyHeader = (props) => {

    const headerElements = [{
        data: <PlantSvg/>,
        id: 1
        }, {
        data: <Plus/>,
        id: 2
    },
        {data: <Fragezeichen/>,
        id: 3
        }]


    const renderHeaderElements =
        headerElements.map( (e) =>
        <HeaderElement key={e.id} val = {e.data} {...props} />
        )

    return(
        <div className='flex flex-row items-center justify-center' style={{height:'80px', backgroundColor: props.colorScheme.main}} >
            {renderHeaderElements}
        </div>
    )

}

export default MyHeader