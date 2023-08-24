import { API_KEY } from "./API_KEY";

const baseURL = `https://api.weatherapi.com/v1`;

const fetchData = async (location) => {
  try {
    const response = await fetch(
      `${baseURL}/forecast.json?${API_KEY}&q=${location}&days=3&alerts=yes`,
      {
        mode: "cors",
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default fetchData;
