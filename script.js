document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Itt helyezheted el a chatbot integrációs kódját
    // és a felhasználói hitelesítés logikáját (amikor a backend készen áll).

    console.log("Felhasználónév:", username);
    console.log("Jelszó:", password);
});
