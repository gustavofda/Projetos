 $(document).ready(function() {
    $('.menu-toggle').click(function() {
      $('nav').toggleClass('active');
      showConfirmation();
    });

    function showConfirmation() {
      var message = "O menu foi clicado!";
      alert(message);
    }
  });

  alert('Bem vindo')