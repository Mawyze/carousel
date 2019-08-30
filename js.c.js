const carouselSlide = document.querySelector('.imageSlider');
const carouselImages = document.querySelectorAll('.imageSlider img');

// BUTTONS

const prevBtn = document.querySelector('#PrevBtn');
const nextBtn = document.querySelector('#NextBtn');

// COUNTER OF IMGS

let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX('+(- size * counter) + 'px)';

// BUTTON LISTENERS

nextBtn.addEventListener('click', () => {
    if (counter >= carouselImages.length-1)return;
    carouselSlide.style.transition = 'transform 0.4s ease-in-out';
    counter++;
    carouselSlide.style.transform = 'translateX('+(- size * counter) + 'px)';
})

prevBtn.addEventListener('click', () => {
    if (counter <= 0)return;
    carouselSlide.style.transition = 'transform 0.4s ease-in-out';
    counter--;
    carouselSlide.style.transform = 'translateX('+(- size * counter) + 'px)';
})

carouselSlide.addEventListener('transitionend', () => {
    if (carouselImages[counter].id==='lastClone') {
        carouselSlide.style.transition = 'none';
        counter = carouselImages.length - 2;  
        carouselSlide.style.transform = 'translateX('+(- size * counter) + 'px)'; 
    }

    if (carouselImages[counter].id==='firstClone') {
        carouselSlide.style.transition = 'none';
        counter = carouselImages.length - counter;  
        carouselSlide.style.transform = 'translateX('+(- size * counter) + 'px)'; 
    }
})

// ON KEY PRESS DETECT <>

var leftBtn =  document.getElementById("PrevBtn")

leftBtn.addEventListener("keydown", function(event){
    if(keyCode===37){
        leftBtn.click();
    }

});

var rightBtn =  document.getElementById("NextBtn")

rightBtn.addEventListener("keydown", function(event){
    if(event.keyCode===39){
        rightBtn.click();
    }

});