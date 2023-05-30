const cardBoard = document.querySelector("#cardboard");
const images = [
  'chave.png',
  'hogwarts.png',
  'mapa.png',
  'oculos.png',
  'pomo.png',
  'salgueiro.png',
];

let qnt = images.length * 2;
console.log(qnt);

let cardHTML = "";

images.forEach(img => {
  cardHTML += `
  <div id=easy class="memory-card" data-card="${img}">
    <img class="front-face" src="/img/${img}"/>
    <img class="back-face" src="/img/a-back-escudo.png">
  </div>`;
});

cardBoard.innerHTML = cardHTML + cardHTML;

/** Fim da Renderização HTML */

const cards = document.querySelectorAll(".memory-card");
let firstCard, secondCard;
let lockCards = false;

function flipCard() {
  if (lockCards) return false;
  this.classList.add("flip");

  if (!firstCard) {
    firstCard = this;
    return false;
  }

  secondCard = this;

  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.card === secondCard.dataset.card;

  !isMatch ? unFlipCards() : resetCards(isMatch);
}

function unFlipCards() {
  lockCards = true;
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");

    resetCards();
  }, 1000);
}

(function shuffle(){
  cards.forEach( card => {
    let rand = Math.floor(Math.random() * qnt);
    card.style.order = rand;
  });
})();

function resetCards(isMatch = false) {
  if (isMatch) {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
  }

  [firstCard, secondCard, lockCards] = [null, null, false];
}

cards.forEach(card => card.addEventListener("click", flipCard));