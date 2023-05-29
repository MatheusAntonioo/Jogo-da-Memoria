const cardBoard = document.querySelector("#cardboard");
const images = [
  'caldeirao.png',
  // 'capa.png',
  // 'carro.png',
  'chave.png',
  // 'coruja.png',
  'dobby.png',
  // 'frasco.png',
  'hogwarts.png',
  'mapa.png',
  'oculos.png',
  // 'onibus.png',
  // 'ovo.png',
  // 'pedra.png',
  // 'pomo.png',
  'salgueiro.png',
  // 'sapo.png',
  // 'trem.png',
  // 'varinha.png',
  // 'vassoura.png',
  'viratempo.png'
];

let cardHTML = '';

images.forEach(img => {
  cardHTML += `
    <div class="memory-card">
      <img class="front-face" src="/img/${img}">
      <img class="back-face" src="/img/a-back-escudo.png">
    </div>
  `
});

cardBoard.innerHTML = cardHTML + cardHTML;

// fim da renderização

const cards = document.querySelectorAll('.memory-card');

function flipCard() {
  this.classList.add("flip");
}

cards.forEach(card => card.addEventListener('click', flipCard));