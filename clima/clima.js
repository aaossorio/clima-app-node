const axios = require('axios');

const getClima = async(lat, lng) => {
    var url = "https://api.openweathermap.org/data/2.5/weather";
    url += "?appid=3c22c971ec37395c63bdd4d0e844c5ee&units=metric";
    url += "&lat=" + lat + "&lon=" + lng;
    const resp = await axios.get(url);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}