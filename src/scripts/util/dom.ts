export function doNavig() {
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const href = (e.target as HTMLAnchorElement).href;

            window.location.href = href;
        });
    });
}