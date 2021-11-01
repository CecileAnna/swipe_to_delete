const swipeSentence = document.querySelector('#swipe-sentence');

let touchStartCoordinateX;

let touchEndCoordinateX;

let touchMoveCoordinateX;

let deleteButtonWidth;

swipeSentence.addEventListener('touchstart', (event) => {

    touchStartCoordinateX = Math.floor(event.touches[0].clientX);

    // console.log(touchStartCoordinateX);

});

swipeSentence.addEventListener('touchmove', (event) => {

    touchMoveCoordinateX = Math.floor(event.touches[0].clientX);

    // console.log(touchMoveCoordinateX);

    deleteButtonWidth = (window.screen.width * 30) / 100;

    if (touchMoveCoordinateX < touchStartCoordinateX && touchMoveCoordinateX > touchStartCoordinateX - deleteButtonWidth) {

        swipeSentence.style.transform = `translateX(${touchMoveCoordinateX - touchStartCoordinateX}px)`;
        swipeSentence.style.transition = `0.1s ease-in-out`;

    }

});

swipeSentence.addEventListener('touchend', (event) => {

    touchEndCoordinateX = Math.floor(event.changedTouches[0].clientX);

    // console.log(touchEndCoordinateX);
    // console.log(touchStartCoordinateX);
    // console.log(deleteButtonWidth);

    if (touchEndCoordinateX < touchStartCoordinateX - deleteButtonWidth / 2) {

        // console.log('teeest');

        swipeSentence.style.transform = `translateX(-${deleteButtonWidth}px)`;

    } else {
        swipeSentence.style.transform = `translateX(${0})`;
    }

});