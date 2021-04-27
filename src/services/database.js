const baseUrl = 'https//specials.mediamarkt.es/sites/default/files/landing/node-1269/validacion-servidor.php';
const baseUrl2 = '../validations/validacion-servidor.php';


export async function getDatosApi(datosJson){
    const response = await fetch(`${baseUrl}`, {
        method: 'POST',
        body: datosJson
    })
    const responseJson = await response.json()
    return responseJson
    console.log(responseJson);
}

// export async function getDataApiCanarias(){
//     const response = await fetch(`${baseUrl}`)
//     const responseJson = await response.json()
//     return responseJson
// }

export default {
  getDatosApi
}