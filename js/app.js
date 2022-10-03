
const board = document.querySelector('#board');
const SQUARE_NUMBER = 300

const colors = ['pink', 'lightgray', 'lightgreen', 'wite']

for ( let i=0; i < SQUARE_NUMBER; i++ ) {
    const square = document.createElement('div');
    square.classList.add('square')

    square.addEventListener('mouseover', ()=> {
        setColor(square);
    })

    square.addEventListener('mouseleave', ()=> {
        removeColor(square);
    })

    board.append(square);
}

function setColor (element) {
    const color = changeRandomColor ();
    element.style.backgroundColor = `${color}`
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor (element) {
    element.style.backgroundColor = '#555'
    element.style.boxShadow = `0 0 2px #333`

}

function changeRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}