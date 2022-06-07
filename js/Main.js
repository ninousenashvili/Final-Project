// creating Slider 

let data = [
    {
        id: 1,
        imageurl: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/b1/c0/1f/swimming-pool.jpg?w=900&h=-1&s=1',
        title: 'check our spa center',
        url: 'https://www.google.com/'
    },
    {
        id: 2,
        imageurl: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/45/fc/f1/hotel-suit-in-side-turkey.jpg?w=900&h=-1&s=1',
        title: 'create memories',
        url: 'https://www.google.com/'
    },

    {
        id: 3,
        imageurl: 'https://carpediem.ge/wp-content/uploads/2020/01/rsz_img_0205.jpg',
        title: 'relax, rechange',
        url: 'https://www.google.com/'
    },

];

let arrowleft = document.getElementById('arrow-left');
let arrowright = document.getElementById('arrow-right');
let slidercontent = document.getElementById('slider-content');
let dotslist = document.getElementsByClassName('dot');

let sliderindex = 0;

function createatag(item) {
    let atag = document.createElement('a');
    atag.setAttribute('href', item.url);
    atag.classList.add('slide');

    return atag;
}


function createimagetag(item) {
    let imagetag = document.createElement('img');
    imagetag.setAttribute('src', item.imageurl);
    imagetag.setAttribute('alt', item.title);
    imagetag.classList.add('image-slider');
    return imagetag;
}


function createh2tag(item) {
    let tagtitle = document.createElement('h2');
    tagtitle.classList.add('slider-title');
    tagtitle.append(item.title);
    return tagtitle;

}

function createdots(item) {
    let dots = document.createElement('div');
    dots.classList.add('dots');

    data.forEach((element) => {
        let dot = document.createElement('div');
        dot.classList.add('dot');
        dot.setAttribute('data-id', element.id - 1);

        dot.onclick = function (event) {
            let id = event.target.getAttribute('data-id');
            sliderindex = id;
            setslide();
        };
        dots.appendChild(dot);
    });
    return dots;
}

function setslide() {
    slidercontent.innerHTML = '';
    let slideitem = createatag(data[sliderindex]);
    let imgtag = createimagetag(data[sliderindex]);
    let h2tag = createh2tag(data[sliderindex]);
    let dots = createdots();
    slidercontent.appendChild(dots);


    slideitem.appendChild(imgtag);
    slideitem.appendChild(h2tag);

    slidercontent.appendChild(slideitem);
    currendotactive();
    // console.log(slideitem);
}

function currendotactive() {
    dotslist[sliderindex].classList.add('active');
}
function arrowleftclick() {
    if (sliderindex <= 0) {
        sliderindex = data.length - 1;
        setslide();
        return;
    }
    sliderindex--;
    setslide();
}

function arrowrightclick() {
    if (sliderindex >= data.length - 1) {
        sliderindex = 0;
        setslide();
        return;
    }
    sliderindex++;
    setslide();
}

arrowleft.addEventListener('click', arrowleftclick);
arrowright.addEventListener('click', arrowrightclick);

setInterval(() => {
    arrowrightclick();
}, 3000);
setslide();


// display current date on footer

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