async function getWeather() {
  const city = document.getElementById("city").value.trim();
  const { lat, lon } = await getLatLon(city);
  console.log(lat, lon);

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=1cefe43006e662107c8d0454bde6852c`
  );

//   console.log(response);

  const data = await response.json();
// console.log(data);
  document.getElementById("weatherReport").innerHTML = `
        <div>
            <p>Temperature: ${(data.main.temp - 273.14).toFixed(2)}ºC</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Description: ${data.weather[0].description}</p>
        </div>
        <img src="https://openweathermap.org/img/wn/${
          data.weather[0].icon
        }@4x.png" alt="WeatherIcon"/>
    `;
}

async function getLatLon(city) {
  console.log(city);
  const response = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=1cefe43006e662107c8d0454bde6852c`
  );
  //   console.log("g",response);
  const data = await response.json(); 
  //   console.log(data);
  const lat = data[0].lat;
  const lon = data[0].lon;
  return { lat, lon };
}
