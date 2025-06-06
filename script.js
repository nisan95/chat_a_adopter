const API_URL = "https://api.thecatapi.com/v1/breeds";
const container = document.getElementById("cats-container");
const filter = document.getElementById("filter-origin");
const toggleTheme = document.getElementById("toggle-theme");

let catsData = [];

fetch(API_URL)
  .then(res => res.json())
  .then(data => {
    catsData = data;
    populateFilter(data);
    displayCats(data);
  });

function populateFilter(data) {
  const origins = [...new Set(data.map(cat => cat.origin))].sort();
  origins.forEach(origin => {
    const option = document.createElement("option");
    option.value = origin;
    option.textContent = origin;
    filter.appendChild(option);
  });
}

function displayCats(cats) {
  container.innerHTML = "";
  cats.forEach(cat => {
    const card = document.createElement("div");
    card.className = "card";

    const img = document.createElement("img");
    img.src = cat.image?.url || "./chat.jpg";
    img.alt = cat.name;

    const name = document.createElement("h3");
    name.textContent = cat.name;

    const desc = document.createElement("p");
    desc.textContent = cat.description || "Aucune description disponible.";

    const like = document.createElement("button");
    like.className = "like-btn";
    like.innerHTML = "♡";
    like.addEventListener("click", () => {
      like.classList.toggle("liked");
      like.textContent = like.classList.contains("liked")
    ? "♥"
    : "♡";
    });

    card.append(img, name, desc, like);
    container.appendChild(card);
  });
}

filter.addEventListener("change", () => {
  const value = filter.value;
  const filtered = value === "all"
    ? catsData
    : catsData.filter(cat => cat.origin === value);
  displayCats(filtered);
});

toggleTheme.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggleTheme.textContent = document.body.classList.contains("dark")
    ? "☀️ Mode Clair"
    : "🌙 Mode Sombre";
});
