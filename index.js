const apiKey="c5b5dbaf4ab31788b961780260895494";
const apiURL="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox= document.querySelector(".search input");
const searchBtn= document.querySelector(".search button");
const weatherIcon= document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);
    if(response.status == 404){
        document.querySelector(".error").style.display ="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
        var data= await response.json();

        console.log(data);
    
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
        document.querySelector(".wind").innerHTML = eval(data.wind.speed * 3.6).toFixed(2) + " km/h";
    
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src= "./images/cloud.png"
        }
        else     if(data.weather[0].main == "Clear"){
            weatherIcon.src= "./images/sun.png"
        }
        else     if(data.weather[0].main == "Rain"){
            weatherIcon.src= "./images/heavy-rain.png"
        }
        else     if(data.weather[0].main == "Drizzle"){
            weatherIcon.src= "./images/drizzle.png"
        }
        else     if(data.weather[0].main == "Snow"){
            weatherIcon.src= "./images/s now.png"
        }
        else     if(data.weather[0].main == "Mist"){
            weatherIcon.src= "./images/fog.png"
        }
        else     if(data.weather[0].main == "Thunderstrom"){
            weatherIcon.src= "./images/thunder.png"
        }
    
    
        document.querySelector(".weather").style.display="block";
        document.querySelector(".error").style.display ="none";

    }
   
};

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
});

searchBox.addEventListener('keypress',(e)=>{
    if(e.keyCode === 13){
        searchBtn.click();
    }
});
