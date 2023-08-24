import { content } from "../libs/conentContainer";

const CurrentWeather = (data) => {
  if (data === undefined) return;

  const container = document.createElement("div");
  const card = document.createElement("div");
  const current = data.current;
  const location = data.location;

  container.id = "current-weather";
  container.className = "current-weather";
  card.className = "card";

  card.innerHTML = `
    <div class="card__heading">${location.country}, ${location.name}</div>
    <div class="card__info">
      <div class="card__info__condition">${current.condition.text}</div>
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

  container.appendChild(card);
  content.appendChild(container);
};

export default CurrentWeather;
