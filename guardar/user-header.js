function getStoredProfile() {
    try {
        return JSON.parse(localStorage.getItem('userProfile') || '{}');
    } catch (error) {
        return {};
    }
}

function createLoginButton() {
    const button = document.createElement('button');
    button.className = 'btn-login';
    const link = document.createElement('a');
    link.href = 'login.html';
    link.textContent = 'Inscrever-se';
    button.appendChild(link);
    return button;
}

function createProfileButton(profile) {
    const button = document.createElement('button');
    button.className = 'btn-avatar';
    button.type = 'button';
    button.onclick = () => {
        window.location.href = 'perfil.html';
    };

    if (profile.avatar) {
        const img = document.createElement('img');
        img.className = 'header-avatar-img';
        img.src = profile.avatar;
        img.alt = 'Foto de perfil';
        button.appendChild(img);
        return button;
    }

    const initials = getProfileInitials(profile);
    const initialsSpan = document.createElement('span');
    initialsSpan.className = 'header-avatar-initials';
    initialsSpan.textContent = initials;
    button.appendChild(initialsSpan);
    return button;
}

function getProfileInitials(profile) {
    const name = profile.nome || profile.email || '';
    if (!name) return 'U';

    const parts = name.split(' ').filter(Boolean);
    if (parts.length === 1) {
        return parts[0].slice(0, 2).toUpperCase();
    }
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function updateHeaderUser() {
    const container = document.getElementById('header-user');
    if (!container) return;

    container.innerHTML = '';
    const profile = getStoredProfile();
    const loggedIn = localStorage.getItem('userLoggedIn') === 'true';

    if (loggedIn && profile.email) {
        container.appendChild(createProfileButton(profile));
    } else {
        container.appendChild(createLoginButton());
    }
}

function attachCartIconBackTarget() {
    const cartLinks = document.querySelectorAll('a[href="carrinho.html"]');
    cartLinks.forEach(link => {
        link.addEventListener('click', () => {
            const currentLocation = window.location.href;
            localStorage.setItem('lastProductPage', currentLocation);
        });
    });
}

updateHeaderUser();
attachCartIconBackTarget();
window.addEventListener('storage', updateHeaderUser);
// Mark the current page's nav link as active
function markActiveNavLink() {
    const currentFile = window.location.pathname.split('/').pop() || 'main.html';
    const navLinks = document.querySelectorAll('nav > a');
    navLinks.forEach(link => {
        const linkFile = link.getAttribute('href').split('/').pop();
        if (linkFile === currentFile) {
            link.classList.add('nav-active');
        }
    });
}

markActiveNavLink();
