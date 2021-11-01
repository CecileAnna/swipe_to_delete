const swipeSentence = document.querySelector('#swipe-sentence');

let touchStartCoordinateX;
let touchMoveCoordinateX;

swipeSentence.addEventListener('touchstart', (event) => {

    touchStartCoordinateX = event.touches[0].clientX;

    // console.log(touchStartCoordinateX);



});

swipeSentence.addEventListener('touchmove', (event) => {

    touchMoveCoordinateX = event.touches[0].clientX;

    // console.log(touchMoveCoordinateX);

});