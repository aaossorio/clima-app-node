const lugar = require('./lugar/lugar.js');
const clima = require('./clima/clima.js');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        descripcion: 'Descripcion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

const getInfo = async(direccion) => {
    try {
        const coordenadas = await lugar.getLugarLatLng(direccion);
        const temperatura = await clima.getClima(coordenadas.lat, coordenadas.lng);
        return "La temperatura en " + coordenadas.direccion + " es de " + temperatura;
    } catch (e) {
        return "No se pudo determinar la temperatura de " + direccion;
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);