let historico = [];

function girarRoleta() {
  const roleta = document.getElementById("roleta");
  const resultadoEl = document.getElementById("resultado");
  const historicoEl = document.getElementById("historico");

  // Limpar roleta
  roleta.innerHTML = "";

  // Gerar 100 slots aleatórios
  const tipos = [];
  for (let i = 0; i < 100; i++) {
    const rand = Math.random() * 100;
    if (rand < 45) tipos.push("T");
    else if (rand < 90) tipos.push("CT");
    else tipos.push("Dado");
  }

  tipos.forEach(tipo => {
    const slot = document.createElement("div");
    slot.className = `slot ${tipo}`;
    slot.textContent = tipo;
    roleta.appendChild(slot);
  });

  // Calcular paragem aleatória no meio da tela
  const stopIndex = Math.floor(Math.random() * (tipos.length - 7)) + 3;
  const deslocamento = stopIndex * 60 - 200;

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
  }, 950);
}
