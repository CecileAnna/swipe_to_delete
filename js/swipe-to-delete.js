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

    let deleteButtonWidth = (window.screen.width * 40) / 100;

    if (touchMoveCoordinateX < touchStartCoordinateX && touchMoveCoordinateX > touchStartCoordinateX - deleteButtonWidth) {

        swipeSentence.style.transform = `translateX(${touchMoveCoordinateX - touchStartCoordinateX}px)`;
        swipeSentence.style.transition = `0.1s ease-in-out`;

    }

});