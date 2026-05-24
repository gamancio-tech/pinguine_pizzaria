// header_auth.js
// Gerencia o estado do botão de login/perfil no cabeçalho de forma dinâmica

(function () {
    const loggedIn = localStorage.getItem('userLoggedIn') === 'true';
    const profile = JSON.parse(localStorage.getItem('userProfile') || '{}');

    // Encontra o botão de login/inscrever-se
    const btnLogin = document.querySelector('.btn-login');
    if (!btnLogin) return;

    if (loggedIn) {
        // Avatar padrão (iniciais do nome ou ícone de usuário genérico)
        const avatarSrc = profile.avatar || '';
        const nomeInicial = (profile.nome || 'U').charAt(0).toUpperCase();

        if (avatarSrc) {
            btnLogin.innerHTML = `<a href="perfil.html">
                <img src="${avatarSrc}" alt="Perfil" class="header-avatar-img">
            </a>`;
        } else {
            btnLogin.innerHTML = `<a href="perfil.html">
                <span class="header-avatar-initials">${nomeInicial}</span>
            </a>`;
        }
        btnLogin.classList.add('btn-avatar');
        btnLogin.classList.remove('btn-login');
    }
    // Se não logado, o botão permanece como 'Inscrever-se' sem mudanças
})();
