'use strict';

function scream() {
    const firstEbalo = document.querySelector('.body');
    const secondEbalo = document.querySelector('.scream');

    firstEbalo.remove();
    secondEbalo.style.display = 'block';
}

setTimeout(scream, 2000);