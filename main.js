const PLAYER1 = 'fa-circle';
const PLAYER2 = 'fa-times';

let round = 1;

const boxes = [...document.querySelectorAll('.box')];

boxes.forEach((box) => {
    box.addEventListener('click', handleClick, {once: true});
})

function handleClick(e) {
    let activeTurn = PLAYER1;

    if(round % 2 === 0) activeTurn = PLAYER2;
    else activeTurn = PLAYER1;
    e.target.classList.add(activeTurn);
    round++;
}

