const formk = document.querySelector('form');
const input = document.querySelector('#city-name');
const reloadeddata = document.querySelector('.api-data');

const apiKey = '75f6b005e6f28d7eeef69f22f72e23f4';

formk.addEventListener('submit', (event) => {
    event.preventDefault(); // prevents auto reload of page
    // console.log(input.value);

    const response = async function(){
        const fetchdata = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${apiKey}`);
        const tojson = fetchdata.json();
        return tojson;
    } 

    const weatherdata = response();
    weatherdata.then((data) => {

        let html = `
        <div class="place">
        <div class="city-name">${data.name}</div>
        <div class="weather-condition">${data.weather[1].main}</div>
        </div>
        <div class="temp">
        <div class="image"><img src="https://i.pinimg.com/236x/79/35/ca/7935ca4e465dc6a51af498a68fff6bc5.png" alt="Image"></div>
        <div class="main-temp">${data.main[0]}</div>
        <div class="minmax">
            <div class="min">Min: </div>
            <div class="max">Max: 43.00°C</div>
        </div>
        </div>`
        console.log(data.name);
        reloadeddata.innerHTML = html;
    })
});