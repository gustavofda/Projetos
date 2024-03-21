let currentStep = 1;

function nextStep() {
  if (currentStep === 1 && validateStep1()) {
    document.getElementById('step1').style.display = 'none';
    currentStep++;
    document.getElementById('step2').style.display = 'block';
  } else if (currentStep === 2 && validateStep2()) {
    document.getElementById('step2').style.display = 'none';
    currentStep++;
    document.getElementById('step3').style.display = 'block';
    displayConfirmation();
  }
}

function prevStep() {
  if (currentStep > 1) {
    if (currentStep === 2) {
      document.getElementById('step2').style.display = 'none';
      currentStep--;
      document.getElementById('step1').style.display = 'block';
    } else if (currentStep === 3) {
      document.getElementById('step3').style.display = 'none';
      currentStep--;
      document.getElementById('step2').style.display = 'block';
    }
  }
}

function validateStep1() {
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;

  return nome && email;
}

function validateStep2() {
  const telefone = document.getElementById('telefone').value;
  const endereco = document.getElementById('endereco').value;

  return telefone && endereco;
}

function displayConfirmation() {
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const telefone = document.getElementById('telefone').value;
  const endereco = document.getElementById('endereco').value;

  const confirmationHTML = `
    <p><strong>Nome:</strong> ${nome}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Telefone:</strong> ${telefone}</p>
    <p><strong>Endereço:</strong> ${endereco}</p>
  `;

  document.getElementById('confirmation').innerHTML = confirmationHTML;
}

function submitForm() {
  document.getElementById('multi-step-form').reset();
  document.getElementById('form-container').style.display = 'none';
  document.getElementById('success-message').style.display = 'block';
}
