document.addEventListener('DOMContentLoaded', function() {
    const signinBtn = document.querySelector('.signin-btn');
    const startBtn = document.querySelector('.start-btn');
    const loginModal = document.getElementById('loginModal');
    const closeBtn = document.querySelector('.close-btn');
    const loginForm = document.getElementById('loginForm');

    // Exibir o modal de login ao clicar no botão "Entrar"
    signinBtn.addEventListener('click', function() {
        loginModal.style.display = 'block';
    });

    // Fechar o modal de login ao clicar no botão de fechar
    closeBtn.addEventListener('click', function() {
        loginModal.style.display = 'none';
    });

    // Fechar o modal de login ao clicar fora do modal
    window.addEventListener('click', function(event) {
        if (event.target === loginModal) {
            loginModal.style.display = 'none';
        }
    });

    // Redirecionar para a tela inicial ao clicar no botão "Comece agora"
    startBtn.addEventListener('click', function() {
        window.location.href = 'home.html';
    });

    // Exibir uma mensagem e redirecionar após enviar o formulário de login
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Mostrar um alerta com os dados fornecidos (apenas para demonstração)
        alert(`E-mail: ${email}\nSenha: ${password}`);

        // Fechar o modal de login e redirecionar para a tela inicial
        loginModal.style.display = 'none';
        window.location.href = 'home.html';
    });
});
