function girarRoleta() {
  const roleta = document.getElementById("roleta");
  const resultadoEl = document.getElementById("resultado");

  // Limpa roleta
  roleta.innerHTML = "";

  const tipos = [];

  // Gera 100 slots com % iguais à CSGOEmpire (45% T, 45% CT, 10% Dado)
  for (let i = 0; i < 100; i++) {
    const num = Math.random() * 100;
    if (num < 45) tipos.push("T");
    else if (num < 90) tipos.push("CT");
    else tipos.push("Dado");
  }

  // Cria elementos na roleta
  tipos.forEach(tipo => {
    const div = document.createElement("div");
    div.className = `slot ${tipo}`;
    div.textContent = tipo;
    roleta.appendChild(div);
  });

  // Escolhe posição de paragem
  const stopIndex = Math.floor(Math.random() * (tipos.length - 7)) + 3;
  const deslocamento = stopIndex * 60 - 200;

  // Gira a roleta
  roleta.style.transition = "transform 7.5s ease-out";
  roleta.style.transform = `translateX(-${deslocamento}px)`;

  const tipoFinal = tipos[stopIndex];
  const texto =
    tipoFinal === "T" ? "🔴 Terrorista (T)" :
    tipoFinal === "CT" ? "🔵 Counter-Terrorista (CT)" :
    "🟡 Dado";

  setTimeout(() => {
    resultadoEl.textContent = "Resultado: " + texto;
  }, 1600);
}
