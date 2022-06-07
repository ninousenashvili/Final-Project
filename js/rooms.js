let today = new Date();
let date = ' ' + today.getDate() + '.' + (today.getMonth() + 1) + '.' + today.getFullYear();
document.querySelector(".ftr-bottom-text").append(date);