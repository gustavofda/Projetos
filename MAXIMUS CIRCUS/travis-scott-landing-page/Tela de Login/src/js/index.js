function Login() {
    var username = document.querySelector('#usuario').value;
    var password = document.querySelector('#senha').value;

    if (username.trim() === '' || password.trim() === '') {
        alert('Atenção, preencha todos os campos!');
        return;
    }
}
