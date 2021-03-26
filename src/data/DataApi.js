import React, {useState, useEffect} from 'react'
import axios from 'axios'
import datashops from './datashops.json'




export const DataApi = () => {
    const [shops, setShops] = useState([])

    useEffect(() => {
        axios.get('../data/datashops.json')
            .then(res => {
                console.log(res)
                setShops(res)
            })
            .catch(err => {
                console.log(err)
            })
    })

    // useEffect(() => {
    //     fetch('https://www.mediamarkt.es/static/json/stores.es.json')
    //     .then(res => res.json())
    //     .then(res => setShops(res))
    // })

    
    const {stores} = datashops
    const {IDSAP, MC_STORE_ID, Name} = stores

    // let datashop = JSON.stringify(datashops)

    console.log(typeof(stores))
    console.log(stores)

    return (
        <div>
            <ul>
                {
                    stores.map(({IDSAP, MC_STORE_ID, Name}) => <li key={IDSAP}>{IDSAP}{Name}</li>)
                }
            </ul>
        </div>
    )
}
