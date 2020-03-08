const cityForm = document.querySelector('.change-location');
const card = document.querySelector('.card');
const details =  document.querySelector('.details');
const time =   document.querySelector('img.time');
const icon =   document.querySelector('.weather-icon');



 // event listener
document.addEventListener('DOMContentLoaded', function() {
 
    updateCity('new york')
    .then(data=>{
        console.log(data);
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

    });
    
    