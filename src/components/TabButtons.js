import { content } from "../libs/conentContainer";

const TabButtons = (data) => {
  const container = document.createElement("div");

  container.className = "tabs";

  const location = data.location;

  container.innerHTML = `
    <button type="button" class="tabs__button --active" id="tab-location">${location.country}, ${location.name}</button>
    <button type="button" class="tabs__button" id="tab-forecast">3 Day Forecast</button>
  `;

  content.appendChild(container);
};

export default TabButtons;
