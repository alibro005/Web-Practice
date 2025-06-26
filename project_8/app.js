// const apiKey = "15da8f52bf238f56902368b0e1c2e43c&query=New York";
// const apiUrl = "http://api.weatherstack.com/current?";

const apiKey = "f50dcfe932d630ec4c0bc72002e28187";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?";

//  "http://api.weatherstack.com/current?access_key=15da8f52bf238f56902368b0e1c2e43c&query=NewYork"

const input = document.querySelector(".search");
const btn = document.querySelector(".btn");
const image = document.getElementById("icon");

const spinner = document.querySelector(".spinner");
const detail = document.querySelector(".details");

async function weatherCheck(city) {
  try {
    const response = await fetch(
      apiUrl + `q=${city}&appid=${apiKey}&units=metric`
    );

    const data = await response.json();

    document.querySelector(".weather").classList.remove("hide");
    // detail.classList.add("hide");

    document.querySelector(".temp").innerHTML = data.main.temp + "°C";
    document.querySelector(".description").innerHTML = data.weather[0].main;
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    input.value = "";
    // console.log(data);

    spinner.classList.add("hide");

    const weatherCondition = data.weather[0].main.toLowerCase();
    if (weatherCondition === "clouds") {
      image.src = "./images/cloud.png";
    } else if (weatherCondition === "rain") {
      image.src = "./images/rainy.png";
    } else if (weatherCondition === "clear") {
      image.src = "./images/partlycloud.png";
    } else if (weatherCondition === "snow") {
      image.src = "./images/drizzling.png";
    } else if (weatherCondition == "sunny") {
      image.src = "./images/sunny.png";
    } else {
      image.src = "./images/sunny.png";
    }
  } catch {
    // alert(
    //   "An error occurred while fetching weather data or Enter a valid city .  Please try again later."
    // );

    image.src = "./images/not-found.png";
    console.error("Error:", error);
  }
}

btn.addEventListener("click", () => {
  let city = input.value;
  console.log("clicked");
  if (city == "" || city.length < 5) {
    alert("Please Enter a valid city name !");
  } else {
    weatherCheck(city);
  }
  
});
