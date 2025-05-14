function girarRoleta() {
  const roleta = document.getElementById("roleta");
  const resultadoEl = document.getElementById("resultado");

  // Limpar roleta
  roleta.innerHTML = "";

  // Criar sequência de slots
  const slots = [];
  for (let i = 0; i < 50; i++) {
    const num = Math.random() * 100;
    let tipo = "";
    if (num < 45) tipo = "T";
    else if (num < 90) tipo = "CT";
    else tipo = "Dado";
    slots.push(tipo);
  }

  // Adicionar elementos à roleta
  slots.forEach(tipo => {
    const div = document.createElement("div");
    div.className = `slot ${tipo}`;
    div.textContent = tipo;
    roleta.appendChild(div);
  });

  // Escolher posição aleatória para parar
  const stopIndex = Math.floor(Math.random() * (slots.length - 7)) + 3;
  const deslocamento = stopIndex * 60 - 200; // Ajuste para centralizar

  // Aplicar rotação com animação
  roleta.style.transition = "transform 3s ease-out";
  roleta.style.transform = `translateX(-${deslocamento}px)`;

  // Mostrar resultado após a animação
  const tipoFinal = slots[stopIndex];
  const texto =
    tipoFinal === "T" ? "🔴 Terrorista (T)" :
    tipoFinal === "CT" ? "🔵 Counter-Terrorista (CT)" :
    "🟡 Dado";

  setTimeout(() => {
    resultadoEl.textContent = "Resultado: " + texto;
  }, 3100);
}
