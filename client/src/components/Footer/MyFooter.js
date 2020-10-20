import React from 'react'


const MyFooter = (props) => {

    return(
        <div
            className='flex flex-row items-center justify-center'
            style={{height:'80px',
                width: '100vw',
                boxShadow: ' -2px -32px 39px 1px rgba(0,0,0,1)',
            }}>
            <h2 style={{color: 'white'}}> Share your </h2>
            <h2 style={{color: 'black'}}> Plant // created by Henk van der </h2>
            <h2 style={{color: 'white'}}> Sloot // ©2020 </h2>
        </div>
    )

}

export default MyFooter