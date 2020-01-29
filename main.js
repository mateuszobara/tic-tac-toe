const PLAYER1 = 'fa-circle';
const PLAYER2 = 'fa-times';

let round = 1;
let winner = null;
if (winner == 'box fas') winner = null;

let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

const boxes = [...document.querySelectorAll('.box')];

boxes.forEach((box) => {
    box.addEventListener('click', handleClick, {once: true});
})

function checkBoard() {
    for (let i = 0; i < 3; i++) {
        board[0][i] = boxes[i].classList.value;
        board[1][i] = boxes[i + 3].classList.value;
        board[2][i] = boxes[i + 6].classList.value;
    }
}

function handleClick(e) {
    if (winner == null || winner == 'box fas') {
        let activeTurn = PLAYER1;

        if (round % 2 === 0) activeTurn = PLAYER2;
        else activeTurn = PLAYER1;
        e.target.classList.add(activeTurn);
        round++;
        checkBoard();
        checkForWin();
    }
}

function checkForWin() {
    for (let i = 0; i < 3; i++) {
        if (board[i][i] != 'box fas') {
            if (board[i][0] == board[i][1] && board[i][0] == board[i][2]) winner = board[i][0]; //check for rows
            if (board[0][i] == board[1][i] && board[0][i] == board[2][i]) winner = board[0][i]; //check for columns
            if (board[0][0] == board[1][1] && board[0][0] == board[2][2]) winner = board[0][0]; //check for first diagonal
            if (board[0][2] == board[1][1] && board[0][2] == board[2][0]) winner = board[0][2]; //check for second diagonal
        }
    }
}