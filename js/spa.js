// current date


let today = new Date();
let date = ' ' + today.getDate() + '.' + (today.getMonth() + 1) + '.' + today.getFullYear();
document.querySelector(".ftr-bottom-text").append(date);

// burger bar

let hamburger = document.querySelector('.humburger');
let menubar = document.querySelector('.nav-ul');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('activemenu');
    menubar.classList.toggle('activemenu');

});

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('activemenu');
    menubar.classList.remove('activemenu');
}));