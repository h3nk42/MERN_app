import React, {useEffect, useState} from 'react'
import Plantitem from "./Plantitem";



const ShowPlantData = (props) => {
    let [dataState, setData] = useState(null);
    let [loading, setLoading] = useState(true);

    let styles = {
        dataContainer: {
            height: props.height - 400,
            width: props.width/1.5,
            overflow: 'none',
            border: '1px solid black',
            marginLeft: 100,
        }, dataList: {
            listStyleType: 'none',
            height: '300px',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
        }

    }

    useEffect( () => {
            fetch('http://localhost:3002/api/getPlantData')
                .then((data) => { return data.json()} )
                .then((res) => {
                    setData(res.data.data)
                    setTimeout(()=>
                        setLoading(false), 500)
                }).catch(function(error) {
                console.log('Looks like there was a problem: \n', error);
            });
            return function cleanup() {}

        }, []
    )
    const renderData = () => {
        return dataState.map( (e) => {
            return <Plantitem key={e} value={e} {...props}> </Plantitem>
        })
    }

    return (
        loading ?
            <div>
            </div>
            :
            <div style={styles.dataContainer}> <ul style={styles.dataList}> {renderData()} </ul> </div>
    )
}
export default ShowPlantData
