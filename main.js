const PLAYER1 = 'fa-times';
const PLAYER2 = 'fa-circle';

let currentRound = 0;
let winner = null;
let draw = false;

let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

const boxes = [...document.querySelectorAll('.box')];
const popup = document.querySelector('.popup');
const result = document.querySelector('.result');

boxes.forEach((box) => {
    box.addEventListener('click', handleClick, {once: true});
})

function handleClick(e) {
    if (winner == null || winner == '') {
        let activeTurn = PLAYER1;

        if (currentRound % 2 === 0) activeTurn = PLAYER2;
        else activeTurn = PLAYER1;
        e.target.classList.add(activeTurn);
        currentRound++;
        checkBoard();
        checkForWin();
        checkForDraw();
        showResult();
    }
}

function checkBoard() {
    for (let i = 0; i < 3; i++) {
        board[0][i] = boxes[i].classList.value.slice(8);
        board[1][i] = boxes[i + 3].classList.value.slice(8);
        board[2][i] = boxes[i + 6].classList.value.slice(8);
    }
}

function checkForWin() {
    for (let i = 0; i < 3; i++) {
        if (board[i][i] != '') {
            if (board[i][0] == board[i][1] && board[i][0] == board[i][2]) winner = board[i][0]; //check for rows
            if (board[0][i] == board[1][i] && board[0][i] == board[2][i]) winner = board[0][i]; //check for columns
            if (board[0][0] == board[1][1] && board[0][0] == board[2][2]) winner = board[0][0]; //check for first diagonal
            if (board[0][2] == board[1][1] && board[0][2] == board[2][0]) winner = board[0][2]; //check for second diagonal
        }
    }
}

function checkForDraw() {
    if (currentRound == 9 && (winner == null || winner == '')) draw = true;
}

function showResult() {
    if (winner == 'fa-circle') result.textContent = 'PLAYER1 WINS';
    else if (winner == 'fa-times') result.textContent = 'PLAYER2 WINS';
    else if (draw == true) result.textContent = 'DRAW';

    if(winner == 'fa-circle' || winner == 'fa-times' || draw == true) {
        popup.style.display = 'block';
    }
}

popup.addEventListener('click', () =>{
    popup.style.display = "none";
    reset();
})

function reset() {
    boxes.forEach((box) => {
        box.classList.remove('fa-times');
        box.classList.remove('fa-circle');
    })
    location.reload(true);
}