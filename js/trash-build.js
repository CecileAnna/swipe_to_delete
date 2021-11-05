let trashUsersArray = [];

let trashUserWrapper;

let userObject = localStorage.getItem(1);

console.log(userObject);


trashUsersArray.forEach(user => {

    // console.log(`GET users, ${users}`);

    trashUserWrapper = document.querySelector('#trash-user-wrapper');

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