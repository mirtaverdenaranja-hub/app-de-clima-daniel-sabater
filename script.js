let api_key = '3251e8e1bcce2591f7c1d3383aa47f15';

let difKelvin = 273.15

document.getElementById('botonBusqueda').addEventListener('click', () => {
    const ciudad = document.getElementById('ciudadEntrada').value
    
})

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${api_key}`)

  .then((response) => response.json())
  .then((response) => console.log(response));
