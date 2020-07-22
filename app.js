
const container = document.querySelector('.container')

function createDiv() {
    for (let i = 0; i < 256; i++) {
        const div = document.createElement('div');
        div.setAttribute('id', 'box');
        container.appendChild(div);
    }
}

createDiv()