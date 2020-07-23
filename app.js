
const container = document.querySelector('.container')
const resetBtn = document.querySelector('.btn-info')
const randomBtn = document.querySelector('.btn-success')
const blackBtn = document.querySelector('.btn-secondary')
const clearBtn = document.querySelector('.btn-warning')

function createDiv() {
    const div = document.createElement('div');
    div.setAttribute('class', 'box');
    div.setAttribute('style', 'background-color: white; padding: 1px; border: 1px solid lightgray');
    container.appendChild(div);
}

function makeBoard(squares) {
    for (let i = 0; i < Math.pow(squares, 2); i++) {
        createDiv();
    }
    fillBlack();
}

makeBoard(16);

function clearBoard() {
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }
}

function makeCustomGrid() {
    clearBoard()
    let size = prompt('New grid resolution (squares per side, max. limit : 64)')
    if (size <= 1) {
        alert(`It's too small`);
    } else if (size > 64) {
        alert(`It's too big, 64 is maximum`)
    } else {
        container.setAttribute('style', `grid-template-columns: repeat(${size}, 1fr); grid-template-rows: repeat(${size}, 1fr);`)
        makeBoard(size)
    }
}

function fillBlack() {
    let divs = Array.from(document.querySelectorAll('.box'))
    divs.forEach(div => {

        div.addEventListener('mouseover', () => {
            div.setAttribute('style', 'background-color: black');
        })
    })
}

function fillRandom() {
    const colorValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
    let divs = Array.from(document.querySelectorAll('.box'))

    divs.forEach(div => {
        div.addEventListener('mouseover', () => {
            let color = '#';
            for (let i = 0; i < 6; i++) {
                let randomNumber = Math.floor(Math.random() * 16);
                color += colorValues[randomNumber]
            }

            div.setAttribute('style', `background-color: ${color}`);
        })
    })
}


function cleanField() {
    let divs = Array.from(document.querySelectorAll('.box'))

    divs.forEach(div => {
        div.setAttribute('style', `background-color: white`);
        div.setAttribute('style', 'background-color: white; padding: 1px; border: 1px solid lightgray');
    })
}


resetBtn.addEventListener('click', makeCustomGrid)
randomBtn.addEventListener('click', fillRandom)
blackBtn.addEventListener('click', fillBlack)
clearBtn.addEventListener('click', cleanField)