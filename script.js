const lowsTemp = document.getElementById('lowspMax');
const highsTemp = document.getElementById('tempMax');
const date = document.getElementById('date');
const city = document.getElementById('city');
const description = document.getElementById('description')
const temp = document.getElementById('temp');
const app = document.getElementById('app');
const tempImage = document.getElementById('tempImage');
const months = ["January","February","March","April","May","June","July","August",
"September","October","November","December"];

let dateObject = new Date();
let month = months[dateObject.getUTCMonth()];
let day = dateObject.getUTCDate() -1;
let year = dateObject.getUTCFullYear();
date.innerHTML = `${month} ${day}, ${year}`;


const getWather = async (cityName) => {
    try {
        const lFetch = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=d649dc29c256285245c618d13d3f5c95&units=metric`,
        {
            headers: {
                Accept: "application/json"
            }
        })
        const watherData = await lFetch.json();

        city.innerHTML = watherData.name;
        lowsTemp.innerHTML = `${watherData.main.temp_min}°C`;
        highsTemp.innerHTML = `${watherData.main.temp_max}°C`;
        description.innerHTML = watherData.weather[0].main;
        temp.innerHTML = `${watherData.main.temp}°C`;
        tempImage.innerHTML = `<img src="http://openweathermap.org/img/wn/${watherData.weather[0].icon}@2x.png" alt="Weather Icon" />`;
    }
    catch(error) {
        console.log(error)
    }
    
}



