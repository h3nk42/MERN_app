import React from 'react'
import HeaderElement from "./HeaderElement";
import PlantSvg from "../../img/PlantSvg";
import Plus from "../../img/Plus";
import Fragezeichen from "../../img/Fragezeichen";
import '../../styles/BoxShadows.css'

const MyHeader = (props) => {

/*    const headerElements = [{
        data: <PlantSvg {...props}/>,
        id: 1
        }, {
        data: <Plus color={props.colorScheme.main} {...props}/>,
        id: 2
    },
        {data: <Fragezeichen {...props}/>,
        id: 3
        }]*/

    const headerElements = [{
        data: <h2 style={{color: 'white'}}> HOME </h2>,
        id: 1,
        route: '/'
    }, {
        data: <h2 style={{color: 'white'}}> API </h2>,
        id: 2,
        route: 'api'
    },
        {
            data: <h2 style={{color: 'white'}}> DNTKNW </h2>,
            id: 3,
            route: 'dntknw'
    }]


    const renderHeaderElements =
        headerElements.map( (e) =>
        <HeaderElement key={e.id} val = {e.data} route={e.route} {...props} />
        )

    return(
        <div
            className='flex flex-row items-center justify-center'
            style={{
                boxShadow: '-2px 19px 39px 34px rgba(0,0,0,1)',
                height:'80px',
                width: '100vw'
                }}>

            {renderHeaderElements}
        </div>
    )

}

export default MyHeader
