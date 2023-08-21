const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiKey = "049dde346046fc4efeaf22e4f0b322f3";
const searchBox = document.getElementById("search-box")
const searchBoxValue = searchBox.value ;
const searchBtn = document.getElementById("search-btn");
const weatherImage = document.getElementById("images");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await response.json();
  console.log(data);

  document.getElementById("bangladesh").innerText = data.name;
  document.getElementById("temperature").innerText = Math.round(data.main.temp) + "°C";
  document.getElementById("humidity").innerText = data.main.humidity + "%";
  document.getElementById("wind").innerText = data.wind.speed ;

  if (data.weather[0].main == "Clouds"){
    weatherImage.src = "./images/clouds.png"
  }else if (data.weather[0].main == "Clear"){
    weatherImage.src = "./images/clear.png"
  } else if (data.weather[0].main == "Rain" ){
    weatherImage.src = "./images/rain.png"
  } else if (data.weather[0].main == "Drizzle"){
    weatherImage.src = "./images/drizzle.png"
  } else if (data.weather[0].main == "Mist" ){
    weatherImage.src = "./images/mist.png"
  }else if (data.weather[0].main == "Snow" ){
    weatherImage.src = "./images/snow.png"
  }

  searchBox.value = "";
}



searchBtn.addEventListener("click",()=>{
    console.log(searchBox.value );
    if(typeof searchBox.value !== "string"){
        alert ("Please Search By City Names");
    }else{
        checkWeather(searchBox.value);
    }
   
})