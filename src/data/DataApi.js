import React, {useState, useEffect} from 'react'
import axios from 'axios'
import datashops from './datashops.json'

const URL = "https://jsonplaceholder.typicode.com/todos/";



export const dataApi = () => {
    
    const [dataApi, setDataApi] = useState()
    useEffect(async () => {
        const {data} = await axios.get(URL)   
        setDataApi(data)
    }, []);
    console.log(dataApi);

    // console.log(shops);    
    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/todos/')
    //     .then(res => res.json())
    //     .then(res => setShops(res))
    // })

    // use

    // const test = axios.get('https://jsonplaceholder.typicode.com/todos')
    //         .then(res => {
    //             // console.log(res)
    //             setShops(res)
    //         })

    // const {data} = shops;
    // console.log(arrayShops)
    
    // const {stores} = datashops
    // console.log('primer shop: '+shops);
    // const {stores} = shops;
    // console.log('primer stores: '+stores);
    // const {IDSAP, MC_STORE_ID, Name} = stores

    // let datashop = JSON.stringify(datashops)

    // console.log(typeof(stores))
    // console.log(stores)

    return ( dataApi )
        // stores
    //     <ul>
    //         {
    //             // shops.map((shop, i) => <li key={i}>{shop}</li>)  
    //             console.log(dataApi)
    //         }
    //     </ul>
    // )
}
