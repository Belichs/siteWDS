import { doNavig } from "./util/dom";
import { allSpots, DiveSpot } from "./spots";

document.addEventListener("DOMContentLoaded", () => {
    console.log("Сайт загружен!");
    doNavig();
});

interface Review {
    id: number;
    spotName: string;
    text: string;
    user: string;
    avatar: string;
}

const userReviews: Review[] = [
    {
        id: 1,
        spotName: "Мальдивы",
        text: "Невероятные кораллы",
        user: "Анна",
        avatar: "A"
    },
    {
        id: 2,
        spotName: "Красное море",
        text: "Прекрасная видимость и разнообразие фауны",
        user: "Игорь",
        avatar: "И"
    },
    {
        id: 3,
        spotName: "Бали",
        text: "Уютные отели и отличные дайв-центры.",
        user: "Марина",
        avatar: "M"
    }
];

const featuredSpots: DiveSpot[] = allSpots.slice(0, 3);

function renderPopularSpots(spots: DiveSpot[]) {
    const container = document.getElementById("sliderD");
    if (!container) return;

    container.innerHTML = spots.map(spot => `
        <div class="spotCard">
            <img src="${spot.image}" alt="${spot.name}">
            <div class="rating">${'★'.repeat(spot.rating)}${Math.floor(spot.rating % 1) ? '½' : ''}</div>
            <h3>${spot.name}</h3>
            <p><strong>Глубина:</strong> ${spot.depth}</p>
            <p><strong>Уровень:</strong> ${spot.level}</p>
            <a href="/pages/spot.html?id=${spot.id}" class="btn">Подробнее</a>
        </div>   
    `).join('');
}

function renderFeaturedSpots(spots: DiveSpot[]) {
  const container = document.getElementById('feturedS');
  if (!container) return;

  container.innerHTML = spots.map(spot => `
    <div class="featuredSpot">
      <img src="${spot.image}" alt="${spot.name}">
      <h3>${spot.name}</h3>
      <p>${spot.depth} | ${spot.level}</p>
      <p>Рейтинг: ${spot.rating} ★</p>
      <a href="/pages/spot.html?id=${spot.id}" class="btn">Подробнее</a>
    </div>
  `).join('');
}

function renderReviews(reviews: Review[]) {
    const container = document.getElementById("reviewsD");
    if (!container) return;

    container.innerHTML = reviews.map(review => `
        <div class="reviewCard">
            <div class="avatar">${review.avatar}</div>
            <h4>${review.spotName}</h4>
            <p>${review.text}</p>
            <p><em>- ${review.user}</em></p>
        </div>
    `).join("");
}

let currentSlide = 0;
const sliderContainer = document.getElementById('sliderD') as HTMLElement;
const backBtn = document.getElementById('backB') as HTMLButtonElement;
const nextBtn = document.getElementById('nextB') as HTMLButtonElement;

function updateSlider() {
  const slideWidth = 270;
  sliderContainer.scrollLeft = currentSlide * slideWidth;
}

backBtn.addEventListener("click", () => {
    if (currentSlide > 0) {
        currentSlide -= 0.5;
        updateSlider();
    }
});

nextBtn.addEventListener("click", () => {
    if (currentSlide < allSpots.length - 4) {
        currentSlide += 0.5;
        updateSlider();
    }
});

sliderContainer.addEventListener("wheel", (e) => {
    if (e.shiftKey) {
        e.preventDefault();
        if (e.deltaY < 0) {
            if (currentSlide < allSpots.length - 4) {
                currentSlide += 0.5;
                updateSlider();
            }
        }
        else {
            if (currentSlide > 0) {
                currentSlide -= 0.5;
                updateSlider();
            }
        }
    }
});

document.addEventListener('DOMContentLoaded', () => {
    console.log("Главная страница загружена!");
    renderPopularSpots(allSpots);    
    renderReviews(userReviews);
    renderFeaturedSpots(featuredSpots);

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
        span.style.animationDelay = `${i * 0.15}s`;
        waveText.appendChild(span);
    }
});