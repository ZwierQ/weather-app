const CurrentWeather = (data) => {
  if (data === undefined) return;

  const container = document.createElement("div");
  container.id = "current-weather";
  container.className = "card";

  const current = data.current;
  const location = data.location;

  container.innerHTML = `
    <h1>${location.country}, ${location.name}</h1>
    <div class="card__info">
      <div>${current.condition.text}</div>
      <img src=${current.condition.icon}>
    </div>
    <div class="card__info">
      <div class="card__info__title">Cloud Cover: </div><div class="card__info__value">${current.cloud}%</div>
    </div>
    <div class="card__info">
      <div class="card__info__title">Temperature: </div><div class="card__info__value">${current.temp_c}°C</div> 
    </div>
    <div class="card__info">
      <div class="card__info__title">Feels Like: </div><div class="card__info__value">${current.feelslike_c}°C</div>
    </div>
    <div class="card__info">
      <div class="card__info__title">Wind Direction: </div><div class="card__info__value">${current.wind_dir}</div>
    </div>
    <div class="card__info">
      <div class="card__info__title">Wind Speed: </div><div class="card__info__value">${current.wind_kph} km/h</div>
    </div>
    <div class="card__info">
      <div class="card__info__title">Gust: </div><div class="card__info__value">${current.gust_kph} km/h</div>
    </div>
    <div class="card__info">
      <div class="card__info__title">Humidity: </div><div class="card__info__value">${current.humidity}%</div>
    </div>
    <div class="card__info">
      <div class="card__info__title">Precipation: </div><div class="card__info__value">${current.precip_mm} mm</div>
    </div>
    <div class="card__info">
      <div class="card__info__title">UV Index: </div><div class="card__info__value">${current.uv}</div>
    </div>
    <div class="card__info">
      <div class="card__info__title">Visibility: </div><div class="card__info__value">${current.vis_km} km</div>
    </div>
  `;

  document.getElementById("content").appendChild(container);
};

export default CurrentWeather;
