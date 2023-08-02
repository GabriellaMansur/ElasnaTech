const menuDiv = document.querySelector('.menu-mobile');
const btnAnimation = document.getElementById('btn-menu');

menuDiv.addEventListener('click', animationMenu);
    
function animationMenu() {
    menuDiv.classList.toggle('open');
    btnAnimation.classList.toggle('active');

}
  
  
  
