const loginBtn = document.querySelector('#login-btn');

loginBtn.addEventListener('click', () => {
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;

    if (username === ' ' || password === ' ') {
        alert('Username and password are required!');
    } else {
        alert(`Bem-vindo ${username}!`);
    }
});