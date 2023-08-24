const ForecastCard = (data) => {
  const container = document.createElement("div");
  container.className = "card";

  const day = data.day;
  const condition = data.day.condition;
  const astro = data.astro;

  container.innerHTML = `
    <div class="card__heading">${data.date}</div>
    <div class="card__info">
      <div class="card__info__condition">${condition.text}</div>
      <img src=${condition.icon}>
    </div>
    <div class="card__info">
      <div class="card__info__title">Average Temperature:</div><div class="card__info__value">${day.avgtemp_c} °C</div> 
    </div>  
    <div class="card__info">
      <div class="card__info__title">Maximum Temperature:</div><div class="card__info__value">${day.maxtemp_c} °C</div> 
    </div>  
    <div class="card__info">
      <div class="card__info__title">Minimum Temperature:</div><div class="card__info__value">${day.mintemp_c} °C</div> 
    </div>  
    <div class="card__info">
      <div class="card__info__title">Average Visibility:</div><div class="card__info__value">${day.avgvis_km} km</div> 
    </div>  
    <div class="card__info">
      <div class="card__info__title">Daily Chance of Rain:</div><div class="card__info__value">${day.daily_chance_of_rain} %</div> 
    </div>  
    <div class="card__info">
      <div class="card__info__title">Daily Chance of Snow:</div><div class="card__info__value">${day.daily_chance_of_snow} %</div> 
    </div>  
    <div class="card__info">
      <div class="card__info__title">Maximum Wind Speed:</div><div class="card__info__value">${day.maxwind_kph} km/h</div> 
    </div>  
    <div class="card__info">
      <div class="card__info__title">UV Index:</div><div class="card__info__value">${day.uv}</div> 
    </div>  
    <div class="card__info">
      <div class="card__info__title">Total Precipation:</div><div class="card__info__value">${day.totalprecip_mm} mm</div> 
    </div>  
    <div class="card__info">
      <div class="card__info__title">Total Snowfall:</div><div class="card__info__value">${day.totalsnow_cm} m</div> 
    </div>  
    <h2 class="card__astro">Astronomy Data</h2>
    <div class="card__info">
      <div class="card__info__title">Sunrise:</div><div class="card__info__value">${astro.sunrise}</div> 
    </div>  
    <div class="card__info">
      <div class="card__info__title">Sunset:</div><div class="card__info__value">${astro.sunset}</div> 
    </div>  
    <div class="card__info">
      <div class="card__info__title">Moonrise:</div><div class="card__info__value">${astro.moonrise}</div> 
    </div>  
    <div class="card__info">
      <div class="card__info__title">Moonset:</div><div class="card__info__value">${astro.moonset}</div> 
    </div>  
    <div class="card__info">
      <div class="card__info__title">Moon Phase:</div><div class="card__info__value">${astro.moon_phase}</div> 
    </div>  
    <div class="card__info">
      <div class="card__info__title">Moon Illumination:</div><div class="card__info__value">${astro.moon_illumination} %</div> 
    </div>  
  `;

  return container;
};

export default ForecastCard;
