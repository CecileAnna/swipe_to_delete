axios.get('https://jsonplaceholder.typicode.com/users/').then((response) => {

    const usersArray = response.data;

    usersArray.forEach(user => {

        // console.log(`GET users, ${users}`);

        const userWrapper = document.querySelector('#user-wrapper');

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
        swipeSentence.classList.add('Simple-test__article');
        swipeSentence.setAttribute("id", "swipe-sentence");

        const swipeSentenceH2 = document.createElement("h2");
        swipeSentenceH2.classList.add('H2', 'Simple-test_h2');

        // const userName = document.createTextNode(`${users[0].name}`);

        swipeSentenceH2.textContent = user.name;

        deleteBtn.appendChild(deleteIcon);

        deleteH3.textContent = 'Delete';

        deleteBtn.appendChild(deleteH3);

        section.appendChild(deleteBtn);

        swipeSentence.appendChild(swipeSentenceH2);

        section.appendChild(swipeSentence);

        userWrapper.appendChild(section);

    });

    // userWrapper.innerHTML +=

    //     `<section class="Simple-test animate__animated" id="swipe-container">

    //     <div class="Simple-test__delete-btn">
    //         <h3 class="Simple-test__delete-btn-h3">Delete</h3>
    //         <i class="fas fa-trash Simple-test__trash-icon"></i>
    //     </div>

    //     <article class="Simple-test__article" id="swipe-sentence">

    //         <h2 class="H2 Simple-test_h2">${users[0].name}</h2>

    //     </article>

    //     </section>`;



});