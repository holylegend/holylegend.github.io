'use strict';

    const cats = document.querySelectorAll('.cat-two');
    const cats2 = document.querySelectorAll('.cat-one');
    const amigo = document.querySelector('.amigo');
    const ami = document.querySelector('.amigo-close');

cats.forEach((elem) => {
    elem.addEventListener('click', () => {
        window.location = 'http://prison-fakes.ru/s/14.php?t=КИРИЛЛ';
    });
});

cats2.forEach((element) => {
    element.addEventListener('click', () => {
        amigo.style.display = 'block';
        ami.style.display = 'block';
        let i;
        i++;
        console.log(i);
    });
});
ami.addEventListener('click', () =>{
    amigo.style.display = 'none';
    ami.style.display = 'none';
})

    
