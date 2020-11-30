import React from 'react'
import HeaderElement from "./HeaderElement";
import PlantSvg from "../../Assets/img/PlantSvg";
import Plus from "../../Assets/img/Plus";
import Fragezeichen from "../../Assets/img/Fragezeichen";
import '../../styles/BoxShadows.css'

const Header = (props) => {

    const styles = {
        dark: {
            color: 'white'
        },
        light: {
            color: 'back'
        }
    }

    const returnStyle = () => {
        return props.dark ? styles.dark : styles.light
    }



    const headerElements = [{
        data: <h2 style={returnStyle()}> HOME </h2>,
        id: 1,
        route: ''
    }, {
        data: <h2 style={returnStyle()}> API </h2>,
        id: 2,
        route: 'api'
    }, {
        data: <h2 style={returnStyle()}> Felix </h2>,
        id: 3,
        route: 'Felix'
    }, {
        data: <h2 style={returnStyle()}> Sunan </h2>,
        id: 4,
        route: 'Sunan'
    }, {
        data: <h2 style={returnStyle()}> Franzi </h2>,
        id: 5,
        route: 'Franzi'
    }]

    let returnShadow = () => {
        return props.shadow ?
            {
                boxShadow: '-2px 19px 39px 34px rgba(0,0,0,1)',
                height: '80px',
                width: '100vw'
            }
            :
            {

                height: '80px',
                width: '100vw'
            }

    }

    const renderHeaderElements =
        headerElements.map((e) =>
            <HeaderElement key={e.id} val={e.data} route={e.route} {...props} />
        )

    return (
        <div
            className='flex flex-row items-center justify-center'
            style={returnShadow()}>

            {renderHeaderElements}
        </div>
    )

}

export default Header
