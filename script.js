let historico = [];

function girarRoleta() {
  const roleta = document.getElementById("roleta");
  const resultadoEl = document.getElementById("resultado");
  const historicoEl = document.getElementById("historico");

  // Limpa roleta
  roleta.innerHTML = "";

  const tipos = [];

  // Gera 100 blocos
  for (let i = 0; i < 100; i++) {
    const num = Math.random() * 100;
    if (num < 45) tipos.push("T");
    else if (num < 90) tipos.push("CT");
    else tipos.push("Dado");
  }

  tipos.forEach(tipo => {
    const div = document.createElement("div");
    div.className = `slot ${tipo}`;
    div.textContent = tipo;
    roleta.appendChild(div);
  });

  // Posição aleatória de paragem
  const stopIndex = Math.floor(Math.random() * (tipos.length - 7)) + 3;
  const deslocamento = stopIndex * 60 - 200;

  roleta.style.transition = "transform 1s ease-out";
  roleta.style.transform = `translateX(-${deslocamento}px)`;

  const tipoFinal = tipos[stopIndex];
  const texto =
    tipoFinal === "T" ? "🔴 Terrorista (T)" :
    tipoFinal === "CT" ? "🔵 Counter-Terrorista (CT)" :
    "🟡 Dado";

  setTimeout(() => {
    resultadoEl.textContent = "Resultado: " + texto;

    // Atualizar histórico (últimos 20)
    historico.unshift(tipoFinal);
    if (historico.length > 20) historico.pop();

    historicoEl.innerHTML = "";
    historico.forEach(tipo => {
      const b = document.createElement("div");
      b.className = `bola ${tipo}`;
      historicoEl.appendChild(b);
    });
  }, 1100);
}
