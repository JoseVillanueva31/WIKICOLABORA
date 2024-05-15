const form = document.getElementById('login-form');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe
    
    // Validar campos
    const username = document.querySelector('#login-form input[type="text"]').value;
    const password = document.querySelector('#login-form input[type="password"]').value;
    
    if (username.trim() === '') {
        alert('Por favor, ingrese su nombre de usuario');
        return;
    }

    if (password.trim() === '') {
        alert('Por favor, ingrese su contraseña');
        return;
    }

    // Envía el formulario si los campos están completos
    this.submit();
});
