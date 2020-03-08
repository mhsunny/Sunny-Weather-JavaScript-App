"# Sunny Weather JavaScript Web App 

- This weather app to find the latest weather information using JavaScript Modern version es6 and es7 version and Acuweather API for the major cities of the world. 

- This is a simpe way how to use es6 and es7 version and especially Javascript promise and arrow functions. 
- Alos you see how to store data using localStorage and use the data. 

- To use this app you have to updat the api key from accuweather. Just regirster at accouweather and create a new web app and get a api key. 

 - Replace the Key with your key at his file : scripts/forecast.js
<code>
 
const key = 'FdsfdsdsfsfWhidsduqSv3TIddfsZ';
            updateUI(data);               

const cityForm = document.querySelector('.change-location');
const card = document.querySelector('.card');
const details =  document.querySelector('.details');
const time =   document.querySelector('img.time');
const icon =   document.querySelector('.weather-icon');


 // event listener
document.addEventListener('DOMContentLoaded', function() {
     let city = localStorage.getItem('city') ;
    if(!city) {
        city = 'New York' ;
    } 

    updateCity(city)
    .then(data=>{
            updateUI(data);               
    }).catch(err=>{
        console.log(err.message);
    });

}, false);
  

const updateUI = (data) =>{
       
    //  const cityDets = data.CityDets;
    //  const weather = data.weather; 
    // console.log(cityDets);
    //   console.log(weather);
    //destructure
    //const {  cityDets, weather } = data;
    const {cityDets, weather} = data; 
    

    details.innerHTML = `
        <h5 class="my-3 display-4">${cityDets.EnglishName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="row display-4 light my-4"> 

            <div class="col-sm-5">
            <span>${weather.Temperature.Metric.Value} </span>
            <span>&deg;C</span>
            </div>
            <div class="col-sm-2">/</div>
            <div class="col-sm-5">
            <span>${weather.Temperature.Imperial.Value} </span>
            <span>&deg;F</span>
            </div> 
        </div> `;

        console.log(weather.WeatherIcon);


    const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src', iconSrc);

    let timeSrc = null;
    timeSrc = weather.IsDayTime ? 'img/day.svg' : img/night.svg;   
    time.setAttribute('src', timeSrc); 
 
    }

    const updateCity = async (city) =>{
        console.log(city);
        const cityDets = await getCity(city);
        const weather = await getWeather(cityDets.Key);
        return{
            cityDets,
            weather
        }
    }

    cityForm.addEventListener('submit', e => {
        e.preventDefault();
        const city = cityForm.city.value.trim();
        cityForm.reset();
         
    
        updateCity(city)
            .then(data=>{
                    updateUI(data);               
            }).catch(err=>{
                console.log(err.message);
        });
        moveMeDOwn(200) ;

        // set local storage 
        localStorage.setItem('city', city );       


    });

 
</code>

# Demo
https://weather-app-4ecfc.firebaseapp.com/

# Author
M Hasan (Sunny)
- https://www.mmhsunny.com/
  