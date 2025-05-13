function girarRoleta() {
  const roleta = document.getElementById("roleta");
  const resultadoEl = document.getElementById("resultado");

  const numero = Math.random() * 100;
  let resultado = "";

  if (numero < 45) {
    resultado = "T";
  } else if (numero < 90) {
    resultado = "CT";
  } else {
    resultado = "Dado";
  }

  const opcoes = ["T", "CT", "Dado", "T", "CT", "Dado"];
  const indices = opcoes.map((v, i) => v === resultado ? i : -1).filter(i => i !== -1);
  const indiceEscolhido = indices[Math.floor(Math.random() * indices.length)];
  const deslocamento = indiceEscolhido * 100;

  roleta.style.transform = `translateX(-${deslocamento}px)`;

  resultadoEl.textContent = "Resultado: " + 
    (resultado === "T" ? "🔴 Terrorista (T)" :
     resultado === "CT" ? "🔵 Counter-Terrorista (CT)" :
     "🟡 Dado");
}
