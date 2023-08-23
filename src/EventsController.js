import CurrentWeather from "./CurrentWeather";
import fetchData from "./fetchData";

const EventsController = () => {
  const searchForm = document.getElementById("search-form");
  const location = document.getElementById("location");

  const fetchWeatherFor = (location) => {
    if (location.length === 0) return;

    fetchData(location).then((data) => CurrentWeather(data));
  };

  // searchForm.addEventListener("submit", (event) => {
  //   event.preventDefault();
  //   fetchWeatherFor(location.value);
  // });
  window.addEventListener("load", fetchWeatherFor("gdansk"));
};

export default EventsController;
