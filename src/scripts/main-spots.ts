
import { allSpots, DiveSpot } from './spots';


const searchInput = document.getElementById('search-input') as HTMLInputElement;
const countryFilter = document.getElementById('country-filter') as HTMLSelectElement;
const ratingFilter = document.getElementById('rating-filter') as HTMLSelectElement;
const levelFilter = document.getElementById('level-filter') as HTMLSelectElement;
const spotsContainer = document.getElementById('spots-container') as HTMLElement;


function renderSpots(spots: DiveSpot[]) {
  spotsContainer.innerHTML = spots.map(spot => `
    <div class="spot-card">
      <img src="${spot.image}" alt="${spot.name}">
      <h3>${spot.name}</h3>
      <p><strong>Страна:</strong> ${spot.country}</p>
      <p><strong>Глубина:</strong> ${spot.depth}</p>
      <p><strong>Уровень:</strong> ${spot.level}</p>
      <div class="rating">${'★'.repeat(Math.floor(spot.rating))} (${spot.rating})</div>
      <a href="/pages/spot.html?id=${spot.id}" class="btn">Подробнее</a>
    </div>
  `).join('');
}


function updateFilters() {
  const country = countryFilter.value;
  const rating = parseFloat(ratingFilter.value) || 0;
  const level = levelFilter.value;
  const search = searchInput.value.toLowerCase();

  let filtered = allSpots;

  if (country) filtered = filtered.filter(spot => spot.country === country);
  if (rating) filtered = filtered.filter(spot => spot.rating >= rating);
  if (level) filtered = filtered.filter(spot => spot.level === level);
  if (search) filtered = filtered.filter(spot => spot.name.toLowerCase().includes(search));

  renderSpots(filtered);
}


function populateCountryFilter() {
  const countries = [...new Set(allSpots.map(spot => spot.country))].sort();
  countries.forEach(country => {
    const option = document.createElement('option');
    option.value = country;
    option.textContent = country;
    countryFilter.appendChild(option);
  });
}


searchInput.addEventListener('input', updateFilters);
countryFilter.addEventListener('change', updateFilters);
ratingFilter.addEventListener('change', updateFilters);
levelFilter.addEventListener('change', updateFilters);


document.addEventListener('DOMContentLoaded', () => {
  console.log('Страница "Места" загружена!');
  populateCountryFilter();
  renderSpots(allSpots);
  
  const waveText = document.getElementById("waveLogo");
    if (!waveText) {
        console.warn("Елемент с таким id не найден")
        return;
    }

    const text = waveText.textContent || "";
    waveText.innerHTML = "";
    
    for (let i = 0; i < text.length; i++) {
        const span = document.createElement("span");
        span.textContent = text[i];
        span.style.animationDelay = `${i * 0.3}s`;
        waveText.appendChild(span);
    }
});