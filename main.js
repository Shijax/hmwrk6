// Buttons
const sortButton = document.getElementById('sortButton');
const sortingButton = document.getElementById('sortingButton');

// User Interaction Text Fields
const nameInput = document.getElementById('inputName');
const nameForm = document.getElementById('nameForm');

// Invisibility Cloak
const hideForm = () => {
    nameForm.style.display = 'none';
}

hideForm();

// Let's BBegin Button Function
sortingButton.addEventListener('click', () => {
        if (nameForm.style.display === "none") {
        nameForm.style.display = "block";
        }
});

// Print Strings to DOM
const printToDom = (string, divId) => {
    document.getElementById(divId).innerHTML += string;
};



// Student Card Builder
const cardBuilder = (name) => {
    let sortingHouse = '';
    let randomizer = Math.floor((Math.random() * 4) + 1);
        if (randomizer === 1) {
            sortingHouse = 'Gryffindor'
        };
        if (randomizer === 2) {
            sortingHouse = 'Slytherin'
        };
        if (randomizer === 3) {
            sortingHouse = 'Hufflepuff'
        };
        if (randomizer === 4) {
            sortingHouse = 'Ravenclaw'
        };
    let domString = `<div class="w-25 m-4";>
        <div class="studentCard">
            <h3 class="d-flex justify-content-center" style="padding: 10px">${name}</h3>
            <h2 class="d-flex justify-content-center ${sortingHouse}" style="padding: 10px">${sortingHouse}!</h2>
            <a href="#" id="expelButton" class="btn btn-danger d-flex justify-content-center w-50 expelButton">Send to Azkaban!</a>
         </div>
     </div>`;
    printToDom(domString, 'studentCards');
    activateExpel();
}

// Expel Button Function
const activateExpel = () => {
    document.querySelector("body").addEventListener("click", function(event) {
      if (event.target.classList.contains('expelButton')) {
        const buttonIClicked = event.target;
        const cardToExpel = buttonIClicked.parentNode.parentNode;
        cardToExpel.remove();
    }
})};

// Sort Button Function
sortButton.addEventListener('click', (e) => {
    e.preventDefault();
    cardBuilder(nameInput.value);
});
