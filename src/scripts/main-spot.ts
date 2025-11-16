
import { allSpots, DiveSpot } from './spots';

let currentImageIndex = 0;
let spotImages: string[] = [];

function getSpotId(): number | null {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');
  return id ? parseInt(id, 10) : null;
}

function renderSpotDetails(spot: DiveSpot) {
  const main = document.getElementById('main-content');
  if (!main) return;

  const title = document.getElementById('spot-title');
  if (title) title.textContent = `${spot.name} | WhereDiveSpot`;

  spotImages = spot.images || [spot.image];

  main.innerHTML = `
    <a href="../pages/spots.html" class="btnB">Назад</a>
    <section class="spot-detail">
      <h1>${spot.name}</h1>
      <div class="spot-main-image">
        <img 
          src="${spotImages[0]}" 
          alt="${spot.name}" 
          class="main-image"
          onclick="openModal(0)"
        >
        <p class="image-hint" onclick="openModal(0)">
          Просмотреть все фото (${spotImages.length})
        </p>
      </div>
      <div class="spot-info">
        <p><strong>Страна:</strong> ${spot.country}</p>
        <p><strong>Глубина:</strong> ${spot.depth}</p>
        <p><strong>Уровень:</strong> ${spot.level}</p>
        <p><strong>Рейтинг:</strong> <strong class="rating">${'★'.repeat(Math.floor(spot.rating))} (${spot.rating})</strong></p>
        <p><strong>Описание:</strong> ${spot.description || 'Нет описания'}</p>
      </div>
      <div class="map-container">
        <h2>Местоположение</h2>
        <iframe
          width="100%"
          height="400"
          style="border:0"
          loading="lazy"
          allowfullscreen
          referrerpolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyArhXQ9R1cuGyqahn52bs8n50wXmHzpfko&zoom=10&q=${encodeURIComponent(spot.lat + ',' + spot.lng)}">
        </iframe>
      </div>
    </section>
  `;
}

const modal = document.createElement('div');
modal.id = 'image-modal';
modal.className = 'modal';
modal.innerHTML = `
  <div class="modal-content">
    <span class="close">&times;</span>
    <button class="nav-btn prev"><</button>
    <img id="modal-image" src="" alt="Изображение">
    <button class="nav-btn next">></button>
    <div class="modal-counter">${currentImageIndex + 1} / ${spotImages.length}</div>
  </div>
`;
document.body.appendChild(modal);

(window as any).openModal = function(index: number) {
  currentImageIndex = index;
  updateModalImage();
  updateModalCounter()
  modal.style.display = 'flex';
};

function updateModalImage() {
  const imgElement = document.getElementById('modal-image') as HTMLImageElement;
  imgElement.src = `${spotImages[currentImageIndex]}`;
  imgElement.alt = `Изображение ${currentImageIndex + 1}`;
}

function updateModalCounter() {
  const counterElement = document.querySelector('.modal-counter') as HTMLElement;
  if (counterElement) {
    counterElement.textContent = `${currentImageIndex + 1} / ${spotImages.length}`;
  }
}

function closeModal() {
  modal.style.display = 'none';
}

modal.querySelector('.close')!.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});

modal.querySelector('.prev')!.addEventListener('click', () => {
  currentImageIndex = (currentImageIndex - 1 + spotImages.length) % spotImages.length;
  updateModalCounter();
  updateModalImage();
});

modal.querySelector('.next')!.addEventListener('click', () => {
  currentImageIndex = (currentImageIndex + 1) % spotImages.length;
  updateModalCounter();
  updateModalImage();
});
document.addEventListener('DOMContentLoaded', async () => {
  const spotId = getSpotId();
  if (!spotId) {
    console.error('ID места не указан в URL');
    document.getElementById('main-content')!.innerHTML = '<p>Место не найдено</p>';
    return;
  }

  const spot = allSpots.find(s => s.id === spotId);
  if (!spot) {
    console.error('Место с таким ID не найдено');
    document.getElementById('main-content')!.innerHTML = '<p>Место не найдено</p>';
    return;
  }

  renderSpotDetails(spot);
});