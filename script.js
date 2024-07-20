const boardElement = document.getElementById('bingo-board');
const totalNumbers = 75;

// Create the board
for (let i = 1; i <= totalNumbers; i++) {
    const numberElement = document.createElement('div');
    numberElement.textContent = i;
    numberElement.addEventListener('click', () => {
        numberElement.classList.toggle('drawn');
    });
    boardElement.appendChild(numberElement);
}
