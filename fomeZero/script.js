const btn = document.getElementById('btn-top');
btn.addEventListener("click", function () {
    window.scrollTo(0,0);
})

document.addEventListener("scroll", ocult);

function ocult() {
    if(window.scrollY > 10) {
        btn.style.display = "flex";
    } else {
        btn.style.display = "none";
    }
}

ocult();


/* Efeito de diminuição do header após scroll*/
window.addEventListener("scroll", function() {
    let header = this.document.querySelector('#header');
    //adc dinamicamente uma classe no header
    header.classList.toggle('scrolling', window.scrollY > 0);
})

/* Menu mobile*/

const menu = document.getElementById('menu-mobile');
const btnAnimation = document.getElementById('btn-menu');

menu.addEventListener('click', animationMenu);

function animationMenu() {
    menu.classList.toggle('open');
    btnAnimation.classList.toggle('active');
}

