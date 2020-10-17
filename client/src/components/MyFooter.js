import React from 'react'


const MyFooter = (props) => {

    return(
        <div className='flex flex-row items-center justify-center' style={{height:'80px', backgroundColor: props.colorScheme.fifth, boxShadow: ' -2px -32px 39px 1px rgba(0,0,0,1)'}} >
            <h3> Share your Plant // created by Henk van der Sloot // ©2020 </h3>
        </div>
    )

}

export default MyFooter