const button = document.querySelector('button'); 
const table = document.querySelector('.table');

function getRandomValue(max){
    return Math.floor(Math.random()* max)
}


function addSquare() {
    const square = document.createElement('div');
    square.classList.add('square');

    square.style.backgroundColor = `rgb(${getRandomValue(255)}, ${getRandomValue(255)}, ${getRandomValue(255)})`
    
    table.appendChild(square);
}

button.addEventListener('click', addSquare)

