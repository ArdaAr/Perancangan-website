const toogleNavbar = document.getElementsByClassName('toggle-button')[0];
const navbar = document.getElementsByClassName('navbar-link')[0];

toogleNavbar.addEventListener('click', () => {
    navbar.classList.toggle('active')
})

function pindah(url){
    window.location = url;
}