import React, {useEffect, useState} from 'react'
import Plantitem from "./Plantitem";



const ShowPlantData = (props) => {
    let [dataState, setData] = useState(null);
    let [loading, setLoading] = useState(true);
    let [n, setN] = useState(0);
    let [mobile, setMobile] = useState(false)

    let styles = {
        dataContainer: {
            height: props.height - 400,
            width: props.width/1.5,
            //border: '1px solid black',
            marginLeft: props.width/10,
            display: 'flex',

        }, dataList: {
            listStyleType: 'none',
            height: '300px',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
        },
        dataListMobile: {
            marginTop: '-200px',
            marginLeft: '40px',
            listStyleType: 'none',
            height: '300px',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            width: '50%',
            alignSelf: 'center',
        },
        button: {
            width: '50px',
            height: '50px',
            marginLeft: props.width/10,
        }

    }

    useEffect( () => {
            fetch(`${props.url}api/getPlantData`)
                .then((data) => { return data.json()} )
                .then((res) => {
                    let response = res.data.data;
                    setData(response)
                    setTimeout(()=>
                        setLoading(false), 500)
                }).catch(function(error) {
                console.log('Looks like there was a problem: \n', error);
            });
            return function cleanup() {}
        }, []
    )
    const renderData = (n, m) => {
        let arrSplit = dataState.slice(n, m)
        return arrSplit.map( (e) => {
            return <Plantitem key={e.id} value={e} mobile={mobile}  {...props}> </Plantitem>
        })
    }

    return (
        loading ?
            <div>
            </div>
            :
            props.width < 500 ?
                <div>
                    <button style={styles.button} onClick={() => {setN(n < dataState.length-2 ? n+2 : 0)}}> {'>>'} </button>
                    <div style={styles.dataContainer} >
                        <ul style={styles.dataListMobile}> {renderData(n, n + 2)} </ul>
                    </div>
                </div>
                :
                <div>
                    <button style={styles.button} onClick={() => {setN(n < dataState.length-10 ? n+10 : 0)}}> {'>>'} </button>
                    <div style={styles.dataContainer}>
                        <ul style={styles.dataList}> {renderData(n, n + 10)} </ul>
                    </div>
                </div>
    )
}
export default ShowPlantData
