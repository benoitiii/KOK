document.addEventListener('DOMContentLoaded', function () {
    const startBtn = document.getElementById('start-btn');
    const startScreen = document.getElementById('start-screen');
    const content = document.getElementById('content');
    const audio = document.getElementById('background-music');
    const title = document.querySelector('h1');
    const profilePic = document.querySelector('.profile-pic');
    const description = document.querySelector('.description');

    // Función para animar el título en la barra del navegador (escribir y borrar)
    function animateTitle() {
        const texts = ["Benoit", "KOK"]; // Texto que se alternará
        let currentTextIndex = 0; // Índice para alternar entre los textos
        let i = 0;
        let direction = 1; // 1 para escribir, -1 para borrar
        let currentText = "";
        
        setInterval(() => {
            if (direction === 1) {
                currentText += texts[currentTextIndex][i]; // Escribir letra
                i++;
                if (i === texts[currentTextIndex].length) {
                    direction = -1; // Cambiar a borrar después de terminar de escribir
                }
            } else {
                currentText = currentText.slice(0, -1); // Borrar última letra
                if (currentText.length === 0) {
                    direction = 1; // Cambiar a escribir cuando todo se borra
                    currentTextIndex = (currentTextIndex + 1) % texts.length; // Alternar entre "Benoit" y "KOK"
                    i = 0;
                }
            }
            document.title = currentText; // Actualizar el título de la página
        }, 250); // Cambiar cada 250ms para hacer que el efecto sea más rápido
    }

    // Iniciar animación de título
    animateTitle();

    // Función para iniciar la música y mostrar el contenido con desvanecimiento
    startBtn.addEventListener('click', function () {
        audio.play().then(() => {
            console.log('Audio is playing');
        }).catch((error) => {
            console.log('Audio playback failed:', error);
        });

        startScreen.style.transition = 'opacity 1s ease';
        startScreen.style.opacity = '0';

        setTimeout(() => {
            startScreen.style.display = 'none';
            content.classList.add('show');

            setTimeout(() => {
                profilePic.classList.add('show');
            }, 500);

            setTimeout(() => {
                title.classList.add('show');
            }, 1000);

            setTimeout(() => {
                description.classList.add('show');
            }, 1500);
        }, 1000);
    });
});


const express = require('express');
const path = require('path');
const app = express();

// Servir archivos estáticos como el HTML, CSS, JS
app.use(express.static(path.join(__dirname, '')));

// Ruta para servir el archivo index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
    console.log('Servidor en el puerto 3000');
});