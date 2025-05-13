const roleta = document.getElementById('roleta');
const girarBtn = document.getElementById('girarBtn');

const gerarItensRoleta = () => {
  roleta.innerHTML = '';
  const items = [];

  for (let i = 0; i < 100; i++) {
    const rand = Math.random();
    if (rand < 0.45) {
      items.push('<div class="item t">T</div>');
    } else if (rand < 0.9) {
      items.push('<div class="item ct">CT</div>');
    } else {
      items.push('<div class="item dado">0</div>');
    }
  }

  roleta.innerHTML = items.join('');
};

const girarRoleta = () => {
  const totalItems = 100;
  const itemWidth = 100; // px
  const stopIndex = Math.floor(Math.random() * 70) + 15;
  const offset = stopIndex * itemWidth;

  roleta.style.transition = 'none';
  roleta.style.transform = 'translateX(0px)';

  setTimeout(() => {
    roleta.style.transition = 'transform 5s cubic-bezier(0.23, 1, 0.32, 1)';
    roleta.style.transform = `translateX(-${offset}px)`;
  }, 50);
};

girarBtn.addEventListener('click', () => {
  gerarItensRoleta();
  girarRoleta();
});

gerarItensRoleta();
