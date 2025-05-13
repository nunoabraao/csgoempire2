function girarRoleta() {
  const resultadoEl = document.getElementById("resultado");

  // Gera um número aleatório entre 0 e 100
  const numero = Math.random() * 100;

  let resultado = "";

  // Verifica a zona do número gerado
  if (numero < 45) {
    resultado = "🔴 Terrorista (T)";
  } else if (numero < 90) {
    resultado = "🔵 Counter-Terrorista (CT)";
  } else {
    resultado = "🟡 Dado";
  }

  // Atualiza o conteúdo com o resultado
  resultadoEl.textContent = "Resultado: " + resultado;
}
