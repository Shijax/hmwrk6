const nameInputElem = document.getElementById('nameInput');

const submitNameButton = document.getElementById('submitNameButton');

const activateDeletes = () => {
    const expellButtons = document.getElementsByClassName('expellButton');
    console.log(expellButtons);

    for (let i = 0; i < expellButtons.length; i++){
        const element = expellButtons[i];
        element.addEventListener("click", (e) => {
            // card that the bbutton was on
            const buttonClicked = e.target;
            const cardToDelete = buttonClicked.parentNode.parentNode;
            cardToDelete.remove();
        })
    }
}

const buildNameCard = (name, notes) => {
    let domString = `<div class="card w-25 m-2">
    <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <button href="#" class="btn btn-danger expellButton">Obliviate this Student</button>
    </div>
    </div>`;
        // counter++;

    printToDom(domString, 'nameCards');
    activateDeletes();
}

const printToDom = (stringToPrint, whereToPrint) => {
        document.getElementById(whereToPrint).innerHTML += stringToPrint;
}

submitNameButton.addEventListener("click", (e) => {
    e.preventDefault();

    buildNameCard(nameInputElem.value);
});