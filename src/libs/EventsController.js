import CurrentWeather from "../components/CurrentWeather";
import Forecast from "../components/Forecast";
import TabButtons from "../components/TabButtons";
import { content } from "./conentContainer";
import fetchData from "./fetchData";

const EventsController = () => {
  const searchForm = document.getElementById("search-form");
  const location = document.getElementById("location");

  const fetchWeather = (event) => {
    event.preventDefault();
    const currentLocation = location.value;

    if (currentLocation.length === 0) return;

    resetContent();

    fetchData(currentLocation).then((data) => {
      TabButtons(data);
      CurrentWeather(data);
      Forecast(data);
      location.value = "";
    });
  };

  const resetContent = () => {
    while (content.childNodes.length > 1) {
      content.removeChild(content.lastChild);
    }
  };

  const selectTab = (event) => {
    const tabForecast = document.getElementById("tab-forecast");
    const tabLocation = document.getElementById("tab-location");
    const currentWeather = document.getElementById("current-weather");
    const forecast = document.getElementById("forecast");
    const target = event.target;

    if (
      target.classList.contains("tabs__button") &&
      target.id === "tab-forecast"
    ) {
      target.classList.add("--active");
      tabLocation.classList.remove("--active");
      currentWeather.classList.add("--hidden");
      forecast.classList.remove("--hidden");
    } else if (
      target.classList.contains("tabs__button") &&
      target.id === "tab-location"
    ) {
      target.classList.add("--active");
      tabForecast.classList.remove("--active");
      forecast.classList.add("--hidden");
      currentWeather.classList.remove("--hidden");
    }
  };

  searchForm.addEventListener("submit", (event) => fetchWeather(event));

  content.addEventListener("click", (event) => selectTab(event));
};

export default EventsController;
