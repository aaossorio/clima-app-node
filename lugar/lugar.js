const axios = require('axios');

const getLugarLatLng = async(dir) => {
    const encodeUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: "https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=" + encodeUrl,
        timeout: 1000,
        headers: { 'X-RapidAPI-Key': "6395e8d0a6msh00bd01202c9036bp12c8bdjsn468d9176ed58" }
    });

    var resp = await instance.get();
    if (resp.data.Results.length === 0) {
        throw new Error('No hay registros')
    }
    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}