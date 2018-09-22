const nameInput = document.getElementById('inputName');
const sortButton = document.getElementById('sortButton');
const sortingButton = document.getElementById('sortingButton');
const nameForm = document.getElementById('nameForm');

const hideForm = () => {
    nameForm.style.display = 'none';
}

hideForm();

sortingButton.addEventListener('click', () => {
        if (nameForm.style.display === "none") {
        nameForm.style.display = "block";
        }
});

const printToDom = (string, divId) => {
    document.getElementById(divId).innerHTML += string;
};

const activateExpel = () => {
document.querySelector("body").addEventListener("click", function(event) {
  if (event.target.classList.contains('expelButton')) {
    const buttonIClicked = event.target;
    const cardToExpel = buttonIClicked.parentNode.parentNode;
    cardToExpel.remove();
  }
})};

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
    let domString = `<div class="w-25 m-4" style="width: 18rem;">
        <div class="studentCard">
            <h4 class="d-flex justify-content-center">${name}</h4>
            <h4 class="d-flex justify-content-center ${sortingHouse}">${sortingHouse}!</h4>
            <a href="#" id="expelButton" class="btn btn-primary d-flex justify-content-center w-50 expelButton">Expel!</a>
         </div>
     </div>`;
    printToDom(domString, 'studentCards');
    activateExpel();
}


sortButton.addEventListener('click', (e) => {
    e.preventDefault();
    cardBuilder(nameInput.value);
});
