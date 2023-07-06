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
  
  function liberarDinheiroDoCofrinho() {
    const hoje = new Date();
    const resultadoElement = document.getElementById("resultado");
  
    if (verificarDiaUtil(hoje)) {
      resultadoElement.textContent = "Dinheiro liberado!";
      // Aqui você pode adicionar a lógica para retirar o dinheiro do cofrinho
    } else {
      const proximoDiaUtil = new Date(hoje);
      proximoDiaUtil.setDate(hoje.getDate() + 1);
  
      while (!verificarDiaUtil(proximoDiaUtil)) {
        proximoDiaUtil.setDate(proximoDiaUtil.getDate() + 1);
      }
  
      resultadoElement.textContent = "A liberação do dinheiro será no próximo dia útil: " + proximoDiaUtil.toISOString().split("T")[0];
    }
  }
  
  // Event listener para o botão
  const liberarBtn = document.getElementById("liberar-btn");
  liberarBtn.addEventListener("click", liberarDinheiroDoCofrinho);

  function liberarDinheiroDoCofrinho() {
    var input = document.getElementById("din");
    var resultado = document.getElementById("resultado");

    if (input.value === "") {
      resultado.textContent = "Por favor, preencha o campo de dinheiro.";
      return;
    }

    // Aqui você pode adicionar o código para processar e exibir a mensagem de liberação do dinheiro do cofrinho
    resultado.textContent = "Dinheiro liberado: R$" + input.value;
  }


  