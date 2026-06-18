const mario = document.getElementById("mario");

let enElAire = false;
let velocidadY = 0;
let gravedad = 0.8;
let posicionY = 0;

document.addEventListener("keydown", (event) => {

    if (event.code === "Space") {

        if (enElAire) {
            console.warn(
                "Advertencia: Doble salto no permitido en este nivel"
            );
            return;
        }

        enElAire = true;
        velocidadY = 15;
    }
});

// keyup requerido por el ejercicio
document.addEventListener("keyup", (event) => {

    if (event.code === "Space") {

        // Desactivar fuerza de salto
        // Mario seguirá su trayectoria normal
        if (velocidadY > 0) {
            velocidadY *= 0.7;
        }
    }
});

function aplicarFisica() {

    if (enElAire) {

        posicionY += velocidadY;
        velocidadY -= gravedad;

        // Actualizar posición
        mario.style.transform = `translateY(${-posicionY}px)`;

        // Aterrizaje
        if (posicionY <= 0 && velocidadY < 0) {

            posicionY = 0;
            velocidadY = 0;
            enElAire = false;

            mario.style.transform = "translateY(0)";
        }
    }

    requestAnimationFrame(aplicarFisica);
}

aplicarFisica();