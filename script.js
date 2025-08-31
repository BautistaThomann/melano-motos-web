// animacion chatita
const chatita = document.getElementById("chatita");

window.addEventListener("scroll", () => {
    const rect = chatita.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight * 0.72 && rect.bottom > windowHeight * 0.32) {
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
