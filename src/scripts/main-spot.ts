
import { allSpots, DiveSpot } from './spots';

const modal = document.createElement('div');
modal.id = 'image-modal';
modal.className = 'modal';
modal.innerHTML = `
  <div class="modal-content">
    <span class="close">&times;</span>
    <button class="nav-btn prev"><</button>
    <img id="modal-image" src="" alt="Изображение">
    <button class="nav-btn next">></button>
  </div>
`;
document.body.appendChild(modal);

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
      <div class="spot-images">
        ${spotImages.map((img, index) => `
          <img 
            src="${img}" 
            alt="${spot.name} ${index + 1}" 
            class="spot-image${index === 0 ? ' main-image' : ''}"
            onclick="openModal(${index})"
          >
        `).join('')}
      </div>
      <div class="spot-info">
        <p><strong>Страна:</strong> ${spot.country}</p>
        <p><strong>Глубина:</strong> ${spot.depth}</p>
        <p><strong>Уровень:</strong> ${spot.level}</p>
        <p><strong>Рейтинг:</strong> <strong class="rating">${'★'.repeat(Math.floor(spot.rating))} (${spot.rating})</strong></p>
        <p><strong>Описание:</strong> ${spot.description || 'Нет описания'}</p>
      </div>
    </section>
  `;
}

function openModal(index: number) {
  currentImageIndex = index;
  updateModalImage();
  modal.style.display = 'flex';
}

function updateModalImage() {
  const imgElement = document.getElementById('modal-image') as HTMLImageElement;
  imgElement.src = `${spotImages[currentImageIndex]}`;
  imgElement.alt = `Изображение ${currentImageIndex + 1}`;
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
  updateModalImage();
});

modal.querySelector('.next')!.addEventListener('click', () => {
  currentImageIndex = (currentImageIndex + 1) % spotImages.length;
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