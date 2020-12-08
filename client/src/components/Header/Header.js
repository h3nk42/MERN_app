import React, {useContext} from 'react'
import HeaderElement from "./HeaderElement";
import PlantSvg from "../../Assets/img/PlantSvg";
import Plus from "../../Assets/img/Plus";
import Fragezeichen from "../../Assets/img/Fragezeichen";
import '../../styles/BoxShadows.css'
import DarkModeSwitch from "../Sunan/components/DarkModeSwitch";
import Layout from "../Sunan/components/Layout";

const Header = (props) => {

    // const styles = {
    //     dark: {
    //         color: 'white'
    //     },
    //     light: {
    //         color: 'black'
    //     }
    // }
    //
    // const returnStyle = () => {
    //     return props.dark === 'dark' ? styles.dark : styles.light
    // }

    const headerElements = [{
        data: <h2> HOME </h2>,
        id: 1,
        route: ''
    }, {
        data: <h2> API </h2>,
        id: 2,
        route: 'api'
    }, {
        data: <h2> Felix </h2>,
        id: 3,
        route: 'Felix'
    }, {
        data: <h2> Sunan </h2>,
        id: 4,
        route: 'Sunan'
    }, {
        data: <h2> Franzi </h2>,
        id: 5,
        route: 'Franzi'
    }, {
        data: <h2> Profile </h2>,
        id: 6,
        route: 'Profile'
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
        <Layout>
            <div
                className='flex flex-row items-center justify-center'
                style={returnShadow()}>

                {renderHeaderElements}
                <DarkModeSwitch/>
            </div>
        </Layout>
    )

}

export default Header
