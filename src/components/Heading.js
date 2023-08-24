import icon from "../images/moon-alt-to-sunny-outline-loop-transition.svg";
import { content } from "../libs/conentContainer";

const Heading = () => {
  const container = document.createElement("div");
  container.className = "heading";

  container.innerHTML = `
    <div class="logo">
      <img src=${icon} class="logo__icon">
      <h1 class="logo__title">Just Forecast</h1>
    </div>
    <form id="search-form" class="search-form">
      <input type="text" id="location" placeholder="City" class="search-form__input">
      <button type="submit" class="search-form__button">Get Forecast</button>
    </form>
  `;

  content.appendChild(container);
};

export default Heading;
