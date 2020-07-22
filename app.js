
const container = document.querySelector('.container')

function createDiv() {
    const div = document.createElement('div');
    div.setAttribute('class', 'box');
    container.appendChild(div);
}

function fillBlack() {
    this.setAttribute('style', 'background-color: black');
}

for (let i = 0; i < 256; i++) {
    createDiv()
}

const divs = Array.from(document.querySelectorAll('.box'))
divs.forEach(div => div.addEventListener('mouseover', fillBlack));