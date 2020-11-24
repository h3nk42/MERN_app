import React, {useState} from 'react'
import Plus from "../../../Assets/img/Plus";
import '../../../styles/ripple.css'
import AddPlant from "./AddPlant";


const PlantPlus = (props) => {

    const [hover, setHover] = useState(false)
    const [wobble, setWobble] = useState(0)
    const [wobbleReverse, setWobbleReverse] = useState(0)
    const [addPlantState, setAddPlantState] = useState(false)

    const handleNewPlantClickTime = () => {
        setWobble(1)
        setTimeout(() => {
            setAddPlantState(!addPlantState)

        }, 500)
    }

    const handleNewPlantClick = () => {
            setAddPlantState(!addPlantState)
            setWobble(0)
            setWobbleReverse(1)
    }

    const renderStyle = () => {
        return hover ?
            {width:'202px', height:'200px', cursor: 'pointer', borderRadius: '100px'}
            :
            {width:'202px', height:'200px', borderRadius: '100px'}
    }

    const renderContent = () => {
        return addPlantState ?
            <div  className='flex flex-column items-center justify-center'  style={{width:'202px', height:'200px',borderRadius: '100px', backgroundColor:props.colorScheme.fourth}}>
                <div className='flex flex-row items-center justify-center'  style={{height: '80px'}} >
                    <AddPlant handlePlantState={handleNewPlantClick} {...props} />
                </div>
            </div>
            :
        <div  wobble={wobble} wobblereverse={wobbleReverse} onAnimationEnd={() =>{
                setWobble(0)
                setWobbleReverse(0)
        }}
              className=' myDiv myDivReverse flex flex-column items-center justify-center' onMouseEnter={ () => toggleHover(true)} onMouseLeave={() => toggleHover(false)} onClick={handleNewPlantClickTime} style={renderStyle()}>
            <div className='flex flex-row items-center justify-center'  style={{height: '80px'}} >
                <Plus color={'white'}{...props} />
            </div>
        </div>

    }


    const toggleHover = (bool) => {
        setHover(bool)
    }

    return (
        renderContent()
    )

}

export default PlantPlus
