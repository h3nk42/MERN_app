import React from 'react'


const MyFooter = (props) => {

    return(
        <div className='flex flex-row items-center justify-center' style={{height:'80px', backgroundColor: props.colorScheme.fifth}} >
            <h3> Share your Plant // created by Henk van der Sloot // ©2020 </h3>
        </div>
    )

}

export default MyFooter