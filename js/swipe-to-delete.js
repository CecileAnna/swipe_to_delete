const swipeSentence = document.querySelector('#swipe-sentence');

let touchStartCoordinateX;
let touchMoveCoordinateX;

swipeSentence.addEventListener('touchstart', (event) => {

    touchStartCoordinateX = Math.floor(event.touches[0].clientX);

    // console.log(touchStartCoordinateX);

});

swipeSentence.addEventListener('touchmove', (event) => {

    touchMoveCoordinateX = Math.floor(event.touches[0].clientX);

    // console.log(touchMoveCoordinateX);

    swipeSentence.style.transform = `translateX(${touchMoveCoordinateX}px)`;

});