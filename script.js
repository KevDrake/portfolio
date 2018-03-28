const menuBtn = document.getElementById('menu-btn');
menuBtn.addEventListener('click', toggleMenu);
// document.querySelectorAll.addEventListener('click', buttonActive);



function toggleMenu() {
    document.querySelector('nav').classList.toggle('nav-open');
    //menuBtn.classList.toggle('menu-btn-close');
}

function buttonActive() {
    document.getElementsByClassName('.button').classList.add('active');
}