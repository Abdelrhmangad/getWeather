"use strict";

// declaring global variables
let API = "e3b537cd0b9a76377ad4a0897a0fc71d";
let cityName = "london";
let input = document.getElementById("city-name");
let btn = document.getElementById("btn");
let resultDiv = document.getElementById("result");


// start displaying data 
let dataMainDiv = document.getElementById("dataDiv");
let mainStatuDiv = document.getElementById("main-status");
let mainTempDiv = document.getElementById("main-temp");
let maxTempDiv = document.getElementById("max-data");
let minTempDiv = document.getElementById("min-data");
let mainHumidityDiv = document.getElementById("humidity-data");
let windPower = document.getElementById("wind-power");
let windDegree = document.getElementById("wind-degree");


// Function rersoinsalbe for fetching data
function gettingWeather(){

    let usesrCity = input.value;
    console.log(usesrCity);
    
    let api = `https://api.openweathermap.org/data/2.5/weather?q=${usesrCity}&appid=e3b537cd0b9a76377ad4a0897a0fc71d&units=metric`;
    if(usesrCity == ""){
        resultDiv.style.display = "block";
        console.log("You Must Provide A city..!")
    }else{
        resultDiv.style.display = "none";
        fetch(api)
            .then((response)=>{
                return response.json();
            })
            .then((data)=>{
                // Displaying Data
                dataMainDiv.style.display = "block";
                mainStatuDiv.innerHTML = data.weather[0].description;
                mainTempDiv.innerHTML = `${data.main.temp}&#8451`;
                maxTempDiv.innerHTML = `${data.main.temp_max}&#8451`;
                minTempDiv.innerHTML = `${data.main.temp_min}&#8451`;
                mainHumidityDiv.innerHTML = data.main.humidity;
                windPower.innerHTML = `${data.wind.speed}m/h`;
                windDegree.innerHTML = data.wind.deg;
                scroll();
            })
    }
};


input.addEventListener("keydown",function(e){
    if(e.keyCode == 13){
        gettingWeather(); 
    }
})

function scroll()
{
    if(dataMainDiv.style.display = "block"){
        window.scrollTo({ top: 700, behavior: 'smooth' })
    }
}

