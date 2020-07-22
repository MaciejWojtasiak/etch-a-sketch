
const container = document.querySelector('.container')
const clearBtn = document.querySelector('.btn-info')

function createDiv() {
    const div = document.createElement('div');
    div.setAttribute('class', 'box');
    div.setAttribute('style', 'background-color: white');
    container.appendChild(div);
}

function fillBlack() {
    this.setAttribute('style', 'background-color: black');
}

function initializeBoard() {
    for (let i = 0; i < 256; i++) {
        createDiv();
    }
    addDivsListener();
}

function addDivsListener() {
    const divs = Array.from(document.querySelectorAll('.box'))
    divs.forEach(div => div.addEventListener('mouseover', fillBlack));
}

clearBtn.addEventListener('click', function () {
    let size = prompt('How many squares per side you want?')
    let boxesQuantity = size * size;
    removeDivs();
    container.setAttribute('style', `grid-template-columns: repeat(${size}, 1fr); grid-template-rows: repeat(${size}, 1fr);`)
    for (let i = 0; i < boxesQuantity; i++) {
        createDiv();
    }
    addDivsListener();
})

function removeDivs() {
    let divs = Array.from(document.querySelectorAll('.box'))
    divs.forEach(div => div.remove());
}
initializeBoard();


