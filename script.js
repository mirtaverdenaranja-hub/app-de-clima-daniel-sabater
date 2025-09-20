let urlBase = 'https://api.openweathermap.org/data/2.5/weather'
let api_key = '3251e8e1bcce2591f7c1d3383aa47f15';
let difKelvin = 273.15

document.getElementById('botonBusqueda').addEventListener('click', () => {
    const ciudad = document.getElementById('ciudadEntrada').value
    if (ciudad) {
        fetchDatosClima(ciudad)
    }

})

function fetchDatosClima(ciudad) {
    fetch(`${urlBase}?q=${ciudad}&appid=${api_key}`)
    .then(data => data.json())
    .then(data => mostrarDatosClima(data));
}

function mostrarRespuestaClima (data) {
    
}

