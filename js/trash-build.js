let trashArray = [];

const trashUserWrapper = document.querySelector('#trash-user-wrapper');

trashArray = JSON.parse(localStorage.getItem(`trash`));

const navIcon = document.querySelector('#nav-icon');

// console.log(trashUsersArray);


trashArray.forEach(user => {

    // console.log(`GET user, ${user}`);

    user = JSON.parse(user);

    const section = document.createElement("section");
    section.classList.add('Simple-test', 'animate__animated', 'swipe-container');
    section.setAttribute('id', user.id);

    const deleteBtn = document.createElement("div");
    deleteBtn.classList.add('Simple-test__delete-btn');

    const deleteH3 = document.createElement("h3");
    deleteH3.classList.add('Simple-test__delete-btn-h3');

    const deleteIcon = document.createElement("i");
    deleteIcon.classList.add('fas', 'fa-trash', 'Simple-test__trash-icon');

    const swipeSentence = document.createElement("article");
    swipeSentence.classList.add('Simple-test__article', 'swipe-sentence');
    // swipeSentence.setAttribute("id", "swipe-sentence");

    const swipeSentenceH2 = document.createElement("h2");
    swipeSentenceH2.classList.add('H2', 'Simple-test_h2');

    // const userName = document.createTextNode(`${users[0].name}`);

    swipeSentenceH2.textContent = user.name;

    deleteH3.textContent = 'Delete';

    deleteBtn.appendChild(deleteH3);

    deleteBtn.appendChild(deleteIcon);

    section.appendChild(deleteBtn);

    swipeSentence.appendChild(swipeSentenceH2);

    section.appendChild(swipeSentence);

    trashUserWrapper.appendChild(section);

});

document.querySelector("#trash-user-wrapper").addEventListener("touchstart", (e) => {

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

    document.querySelector(".Simple-test__delete-btn").addEventListener("click", () => {

        userId = swipeContainer.id;
        // console.log(userId);


        deleteBtn = document.querySelector(".Simple-test__delete-btn");

        // const user = dataStorage.getItem(`${userObject.id}`);


        if (touchElement != deleteBtn) {

            swipeContainer.classList.add('animate__fadeOutLeft');

            setTimeout(function() {
                swipeContainer.classList.add('_collapsed');
            }, 50);

            setTimeout(function() {

                // localStorage.removeItem(`${userId}`);
                let i = 0;

                trashArray.forEach(element => {

                    element = JSON.parse(element);

                    if (element.id == userId) {
                        trashArray.splice(i, 1);
                        localStorage.setItem('trash', trashArray);
                    }

                    i++
                });

                swipeContainer.remove();

            }, 1600);

        }

    });

    navIcon.addEventListener('click', (e) => {

        let clickedElement = e.target;

        if (clickedElement = navIcon) {

            localStorage.clear();

            while (trashUserWrapper.firstChild) {
                trashUserWrapper.removeChild(trashUserWrapper.firstChild);
            }

        }

    });

});