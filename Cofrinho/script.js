function verificarDiaUtil(data) {
  const diaSemana = data.getDay();
  const feriados = [
      "Ano novo", // 1º de janeiro
      "Carnaval", // data móvel (geralmente em fevereiro)
      "Sexta-feira Santa", // data móvel (sexta-feira anterior à Páscoa)
      "Dia de Tiradentes", // 21 de abril
      "Dia do Trabalho", // 1º de maio
      "Dia da Independência", // 7 de setembro
      "Nossa Senhora Aparecida", // 12 de outubro
      "Finados", // 2 de novembro
      "Proclamação da República", // 15 de novembro
      "Natal" /* 25 de dezembro */
  ];

  // Verifica se é sábado (6) ou domingo (0)
  if (diaSemana === 6 || diaSemana === 0) {
      return false;
  }

  // Verifica se é um feriado
  if (feriados.includes(data.toISOString().split("T")[0])) {
      return false;
  }

  return true;
}

function adicionarDinheiroAoCofrinho() {
  var input = document.getElementById("din");
  var resultado = document.getElementById("resultado");

  if (input.value === "") {
      resultado.textContent = "Por favor, preencha o campo de dinheiro.";
      return;
  }

  var valorAdicao = parseFloat(input.value);

  if (isNaN(valorAdicao) || valorAdicao <= 0) {
      resultado.textContent = "Por favor, insira um valor válido para adição.";
      return;
  }

  // Adicione a lógica para adicionar o dinheiro ao cofrinho
  // Por exemplo: saldoAtual += valorAdicao;

  resultado.textContent = "Dinheiro adicionado: R$" + valorAdicao;
}

function liberarDinheiroDoCofrinho() {
  var input = document.getElementById("din");
  var resultado = document.getElementById("resultado");

  if (input.value === "") {
      resultado.textContent = "Por favor, preencha o campo de dinheiro.";
      return;
  }

  var valorRetirada = parseFloat(input.value);

  if (isNaN(valorRetirada) || valorRetirada <= 0) {
      resultado.textContent = "Por favor, insira um valor válido para retirada.";
      return;
  }

  var saldoAtual = ''; // Substitua pelo saldo real do cofrinho

  if (valorRetirada > saldoAtual) {
      resultado.textContent = "Saldo insuficiente. Não é possível retirar mais do que o saldo atual.";
  } else {  
      saldoAtual -= valorRetirada;
      resultado.textContent = "Dinheiro liberado: R$" + valorRetirada;
  }
}

// Event listener para o botão de liberar dinheiro
const liberarBtn = document.getElementById("liberar-btn");
liberarBtn.addEventListener("click", liberarDinheiroDoCofrinho);

// Event listener para o botão de adicionar dinheiro
const adicionarBtn = document.getElementById("adicionar-btn");
adicionarBtn.addEventListener("click", adicionarDinheiroAoCofrinho);
