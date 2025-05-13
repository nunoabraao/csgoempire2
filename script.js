function girarRoleta() {
  const resultadoEl = document.getElementById("resultado");

  // Gera número entre 0 e 100
  const numero = Math.random() * 100;

  let resultado = "";

  if (numero < 45) {
    resultado = "🔴 Terrorista (T)";
  } else if (numero < 90) {
    resultado = "🔵 Counter-Terrorista (CT)";
  } else {
    resultado = "🟡 Dado";
  }

  resultadoEl.textContent = "Resultado: " + resultado;
}
