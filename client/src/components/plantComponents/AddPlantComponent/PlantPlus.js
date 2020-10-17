import React, {useState} from 'react'
import Plus from "../../../img/Plus";
import '../../../styles/ripple.css'
import AddPlant from "./AddPlant";


const PlantPlus = (props) => {

    const [hover, setHover] = useState(false)
    const [wobble, setWobble] = useState(0)
    const [addPlantState, setAddPlantState] = useState(false)

    const handleNewPlantClickTime = () => {
        setWobble(1)
        setTimeout(() => {
            setAddPlantState(!addPlantState)

        }, 500)
    }

    const handleNewPlantClick = () => {
            setAddPlantState(!addPlantState)
    }

    const renderStyle = () => {
        return hover ?
            {width:'202px', height:'300px', border: '1px solid black', cursor: 'pointer', borderRadius: '25px'}
            :
            {width:'202px', height:'300px', borderRadius: '25px'}
    }

    const renderContent = () => {
        return addPlantState ?
            <div className=' myDiv flex flex-column items-center justify-center'  style={{width:'202px', height:'300px', border: '1px solid black', borderRadius: '25px'}}>
                <div className='flex flex-row items-center justify-center'  style={{height: '80px'}} >
                    <AddPlant handlePlantState={handleNewPlantClick} {...props} />
                </div>
            </div>
            :
        <div  wobble={wobble} onAnimationEnd={() => setWobble(0)} className=' myDiv flex flex-column items-center justify-center' onMouseEnter={ toggleHover} onMouseLeave={toggleHover} onClick={handleNewPlantClickTime} style={renderStyle()}>
            <div className='flex flex-row items-center justify-center'  style={{height: '80px'}} >
                <Plus/>
            </div>
        </div>

    }


    const toggleHover = () => {
        setHover(!hover)
    }

    return (
        renderContent()
    )

}

export default PlantPlus