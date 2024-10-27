const cardsArray = [
    'Azu_1.png', 'Azu_2.png', 'Azu_3.png', 'Azu_4.png', 'Azu_5.png',
    'Azu_1.png', 'Azu_2.png', 'Azu_3.png', 'Azu_4.png', 'Azu_5.png'
].sort(() => Math.random() - 0.5);

const memoryGame = document.querySelector('.memory-game');
const loveButton = document.getElementById('love-button');
let firstCard, secondCard, lockBoard = false, matchedPairs = 0;

// Generar tarjetas
cardsArray.forEach(src => {
    const card = document.createElement('div');
    card.classList.add('memory-card');
    card.innerHTML = `
        <div class="front"></div>
        <div class="back" style="background-image: url(${src})"></div>
    `;
    card.addEventListener('click', flipCard);
    memoryGame.appendChild(card);
});

function flipCard() {
    if (lockBoard || this === firstCard) return;
    this.classList.add('flipped');
    if (!firstCard) {
        firstCard = this;
        return;
    }
    secondCard = this;
    checkForMatch();
}

function checkForMatch() {
    const isMatch = firstCard.querySelector('.back').style.backgroundImage === 
                    secondCard.querySelector('.back').style.backgroundImage;
    isMatch ? disableCards() : unflipCards();
}

function disableCards() {
    [firstCard, secondCard].forEach(card => card.removeEventListener('click', flipCard));
    matchedPairs++;
    if (matchedPairs === 5) loveButton.style.display = 'block';
    resetBoard();
}

function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flipped');
        secondCard.classList.remove('flipped');
        resetBoard();
    }, 1000);
}

function resetBoard() {
    [firstCard, secondCard, lockBoard] = [null, null, false];
}

function checkForMatch() {
    const isMatch = firstCard.innerHTML === secondCard.innerHTML;
    isMatch ? disableCards() : unflipCards();
}

function disableCards() {
    [firstCard, secondCard].forEach(card => card.removeEventListener('click', flipCard));
    matchedPairs++;
    if (matchedPairs === 5) loveButton.style.display = 'block';
    resetBoard();
}

function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flipped');
        secondCard.classList.remove('flipped');
        resetBoard();
    }, 1000);
}

function resetBoard() {
    [firstCard, secondCard, lockBoard] = [null, null, false];
}

loveButton.addEventListener('click', () => {
    window.location.href = 'piropos.html';
});
