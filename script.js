// animacion chatita
const chatita = document.getElementById("chatita");

window.addEventListener("scroll", () => {
    const rect = chatita.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Detectar si es móvil en vertical
    const isMobileVertical = window.innerWidth <= 600 && window.innerHeight > window.innerWidth;

    if (
        (rect.top < windowHeight * (isMobileVertical ? 0.98 : 0.90)) &&
        (rect.bottom > windowHeight * (isMobileVertical ? 0.30 : 0.45))
    ) {
        chatita.style.transform = "translateX(0)";
        chatita.style.opacity = "1";
    } else {
        chatita.style.transform = "translateX(-100vw)";
        chatita.style.opacity = "0";
    }
});

// animacion marcas
const contenedor = document.querySelector('.contenedor-img-marcas');
let posX = 0;
let velocidad = 0.4;

function scrollMarcas() {
    posX -= velocidad;
    if (posX <= -contenedor.scrollWidth / 2) {
        posX = 0;
    }
    contenedor.style.transform = `translateX(${posX}px)`;
    requestAnimationFrame(scrollMarcas);
}

scrollMarcas();
