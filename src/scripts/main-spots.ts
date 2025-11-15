// src/scripts/main-spots.ts

import { allSpots, DiveSpot } from './spots';

// DOM-элементы
const searchInput = document.getElementById('search-input') as HTMLInputElement;
const countryFilter = document.getElementById('country-filter') as HTMLSelectElement;
const ratingFilter = document.getElementById('rating-filter') as HTMLSelectElement;
const levelFilter = document.getElementById('level-filter') as HTMLSelectElement;
const spotsContainer = document.getElementById('spots-container') as HTMLElement;

// Функция отрисовки карточек
function renderSpots(spots: DiveSpot[]) {
  spotsContainer.innerHTML = spots.map(spot => `
    <div class="spot-card">
      <img src="${spot.image}" alt="${spot.name}">
      <h3>${spot.name}</h3>
      <p><strong>Страна:</strong> ${spot.country}</p>
      <p><strong>Глубина:</strong> ${spot.depth}</p>
      <p><strong>Уровень:</strong> ${spot.level}</p>
      <div class="rating">${'★'.repeat(Math.floor(spot.rating))} (${spot.rating})</div>
    </div>
  `).join('');
}

// Функция обновления фильтров
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

// Заполняем выпадающий список стран
function populateCountryFilter() {
  const countries = [...new Set(allSpots.map(spot => spot.country))].sort();
  countries.forEach(country => {
    const option = document.createElement('option');
    option.value = country;
    option.textContent = country;
    countryFilter.appendChild(option);
  });
}

// Обработчики фильтров
searchInput.addEventListener('input', updateFilters);
countryFilter.addEventListener('change', updateFilters);
ratingFilter.addEventListener('change', updateFilters);
levelFilter.addEventListener('change', updateFilters);

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
  console.log('Страница "Места" загружена!');
  populateCountryFilter();
  renderSpots(allSpots);
});