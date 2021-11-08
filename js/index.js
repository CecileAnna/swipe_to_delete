// const swipeSentence = document.querySelector('.swipe-sentence');

let swipeContainer;

let touchElement;


let userId;


let touchStartCoordinateX;

let touchEndCoordinateX;

let touchMoveCoordinateX;


let deleteBtn;

let deleteButtonWidth;


let dataStorage;

let trashUsersArray = [];


document.querySelector("#user-wrapper").addEventListener("touchstart", (e) => {

    touchElement = e.target;
    // console.log(touchElement);

    parentElement = e.target.parentElement;
    // console.log(parentElement);

    touchStartCoordinateX = Math.floor(e.touches[0].clientX);

    swipeContainer = document.querySelector(".swipe-container");

    touchElement.addEventListener('touchmove', (event) => {

        touchMoveCoordinateX = Math.floor(event.touches[0].clientX);

        // console.log(touchMoveCoordinateX);

        deleteButtonWidth = (window.screen.width * 35) / 100;

        if (touchMoveCoordinateX < touchStartCoordinateX && touchMoveCoordinateX > touchStartCoordinateX - deleteButtonWidth) {

            touchElement.style.transform = `translateX(${touchMoveCoordinateX - touchStartCoordinateX}px)`;
            touchElement.style.transition = `0.1s ease-in-out`;

        };

    });

    touchElement.addEventListener('touchend', (event) => {

        touchEndCoordinateX = Math.floor(event.changedTouches[0].clientX);

        if (touchEndCoordinateX < touchStartCoordinateX - deleteButtonWidth / 2) {

            touchElement.style.transform = `translateX(-${deleteButtonWidth}px)`;

            // document.querySelector("#user-wrapper").removeEventListener('touchstart', () => {});

        } else {

            touchElement.style.transform = `translateX(${0})`;

        }

    });

    document.querySelector(".Simple-test__delete-btn").addEventListener('click', () => {

        userId = swipeContainer.id;
        // console.log(userId);

        userName = document.querySelector(".swipe-sentence").textContent;
        // console.log(userName);

        let userObject = {
            id: `${userId}`,
            name: `${userName}`
        };

        dataStorage = window.localStorage;

        // console.log(userObject);

        if (!trashUsersArray.includes(JSON.stringify(userObject))) {

            trashUsersArray.push(JSON.stringify(userObject));

            // console.log(trashUsersArray);

        } else {

            dataStorage.setItem(`trash`, JSON.stringify(trashUsersArray));

        }

        deleteBtn = document.querySelector(".Simple-test__delete-btn");

        // const user = dataStorage.getItem(`${userObject.id}`);


        if (touchElement != deleteBtn) {

            swipeContainer.classList.add('animate__fadeOutLeft');

            setTimeout(function() {
                swipeContainer.classList.add('_collapsed');
            }, 50);

            setTimeout(function() {

                // dataStorage.removeItem(`${userId}`);

                swipeContainer.remove();

            }, 1600);

        }

    });

});