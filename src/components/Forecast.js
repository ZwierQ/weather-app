import { content } from "../libs/conentContainer";
import ForecastCard from "./ForecastCard";

const Forecast = (data) => {
  const container = document.createElement("div");

  container.id = "forecast";
  container.className = "forecast --hidden";

  data.forecast.forecastday.forEach((item) => {
    container.appendChild(ForecastCard(item));
  });

  content.appendChild(container);
};

export default Forecast;
