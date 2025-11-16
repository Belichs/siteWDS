const bubblesContainer = document.getElementById('bubbles-container') as HTMLElement;

function createBubble() {
  const bubble = document.createElement('div');
  bubble.classList.add('bubble');

  const size = Math.random() * 20 + 5;
  bubble.style.width = `${size}px`;
  bubble.style.height = `${size}px`;

  const leftPos = Math.random() * 100;
  bubble.style.left = `${leftPos}%`;
  bubble.style.bottom = '0px';

  const duration = Math.random() * 5 + 5;

  // Запускаем анимацию всплытия вручную
  let startTime: number | null = null;
  let animationFrameId: number;

  const animate = (timestamp: number) => {
    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;

    const progress = Math.min(elapsed / (duration * 1000), 1);
    const currentBottom = progress * 100; // от 0 до 100vh

    bubble.style.bottom = `${currentBottom}vh`;

    if (progress < 1) {
      animationFrameId = requestAnimationFrame(animate);
    } else {
      bubblesContainer.removeChild(bubble);
    }
  };

  bubble.addEventListener('click', () => {
    cancelAnimationFrame(animationFrameId);

    bubble.style.animation = 'pop 1s forwards';

    setTimeout(() => {
      if (bubble.parentNode === bubblesContainer) {
        bubblesContainer.removeChild(bubble);
      }
    }, 1000);
  });

  bubblesContainer.appendChild(bubble);
  requestAnimationFrame(animate);
}

setInterval(() => {
  createBubble();
}, 1000);