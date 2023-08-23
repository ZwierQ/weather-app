const SearchBar = (parentElement) => {
  const container = document.createElement("div");
  container.className = "search-bar";

  container.innerHTML = `
    <form id="search-form">
      <label for="city">City:</label>
      <input type="text" id="location">
      <button type="submit">Get Forecast</button>
    </form>
  `;

  parentElement.appendChild(container);
};

export default SearchBar;
