/**
 * Roleta Pinguine - Script de animação e lógica de prêmios
 */

let currentRotation = 0;
let isSpinning = false;

document.addEventListener('DOMContentLoaded', () => {
    // 1. Desenhar a roleta no Canvas
    const canvas = document.getElementById('roleta-canvas');
    if (canvas) {
        drawRoulette();
    }
    
    // 2. Gerar as partículas de estrelas
    createParticles();
    
    // 3. Verificar acesso
    verificarAcessoRoleta();
    
    // Re-check access when window gains focus (in case they logged in or bought in another tab)
    window.addEventListener('focus', verificarAcessoRoleta);
});

/**
 * Desenha a roleta de 8 fatias com cores e textos
 */
function drawRoulette() {
    const canvas = document.getElementById('roleta-canvas');
    const ctx = canvas.getContext('2d');
    const w = canvas.width;
    const h = canvas.height;
    const r = w / 2;
    ctx.clearRect(0, 0, w, h);
    
    // Slices config
    const slices = [
        { label: 'PIZZA GRÁTIS', emoji: '🍕', color: '#b3170c', textCol: '#ffffff' },
        { label: '10% DESCONTO', emoji: '🏷️', color: '#ce270a', textCol: '#ffffff' },
        { label: 'BEBIDA GRÁTIS', emoji: '🥤', color: '#f7cb40', textCol: '#332200' },
        { label: 'COMBO FAMÍLIA', emoji: '👨‍👩‍👧', color: '#003700', textCol: '#ffffff' },
        { label: 'TENTE DE NOVO', emoji: '😅', color: '#1e88e5', textCol: '#ffffff' },
        { label: 'SORVETE GRÁTIS', emoji: '🍦', color: '#8e24aa', textCol: '#ffffff' },
        { label: 'TICKET EXTRA', emoji: '🎟️', color: '#d81b60', textCol: '#ffffff' },
        { label: '20% DESCONTO', emoji: '🔥', color: '#ffffff', textCol: '#b3170c' }
    ];
    
    const totalSlices = 8;
    const sliceAngle = (2 * Math.PI) / totalSlices;
    
    for (let i = 0; i < totalSlices; i++) {
        const startAngle = i * sliceAngle;
        const endAngle = startAngle + sliceAngle;
        
        // Draw slice arc
        ctx.beginPath();
        ctx.moveTo(r, r);
        ctx.arc(r, r, r - 10, startAngle, endAngle);
        ctx.closePath();
        ctx.fillStyle = slices[i].color;
        ctx.fill();
        
        // Draw gold divider lines
        ctx.lineWidth = 4;
        ctx.strokeStyle = '#ffd700';
        ctx.stroke();
        
        // Draw text and emoji inside slice
        ctx.save();
        ctx.translate(r, r);
        ctx.rotate(startAngle + sliceAngle / 2);
        
        // Style text
        ctx.fillStyle = slices[i].textCol;
        ctx.font = 'bold 12px "Outfit", Arial, sans-serif';
        ctx.textAlign = 'right';
        ctx.textBaseline = 'middle';
        
        // Text string: Label + Emoji
        const text = slices[i].label + ' ' + slices[i].emoji;
        ctx.fillText(text, r - 35, 0);
        ctx.restore();
    }
    
    // Draw golden outer border
    ctx.beginPath();
    ctx.arc(r, r, r - 5, 0, 2 * Math.PI);
    ctx.lineWidth = 10;
    ctx.strokeStyle = '#ffd700';
    ctx.stroke();
    
    // Inner border just outside logo
    ctx.beginPath();
    ctx.arc(r, r, 65, 0, 2 * Math.PI);
    ctx.lineWidth = 5;
    ctx.strokeStyle = '#ffd700';
    ctx.stroke();
}

/**
 * Cria partículas de estrelas de fundo no hero
 */
function createParticles() {
    const container = document.getElementById('roleta-particles');
    if (!container) return;
    container.innerHTML = '';
    const particleCount = 25;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'roleta-star-particle';
        
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 5 + 's';
        particle.style.fontSize = (Math.random() * 8 + 8) + 'px';
        
        particle.innerHTML = '✦';
        container.appendChild(particle);
    }
}

/**
 * Verifica se o usuário está logado e se possui tickets
 */
function verificarAcessoRoleta() {
    const isLoggedIn = localStorage.getItem('userLoggedIn') === 'true';
    const overlayUnauth = document.getElementById('overlay-unauthenticated');
    const overlayNoTickets = document.getElementById('overlay-no-tickets');
    const btnGirar = document.getElementById('btn-girar-roleta');
    
    if (!overlayUnauth || !overlayNoTickets || !btnGirar) return;

    // Reset displays
    overlayUnauth.style.display = 'none';
    overlayNoTickets.style.display = 'none';
    btnGirar.disabled = false;
    btnGirar.classList.remove('disabled');

    if (!isLoggedIn) {
        overlayUnauth.style.display = 'flex';
        btnGirar.disabled = true;
        btnGirar.classList.add('disabled');
        document.getElementById('roleta-tickets-count').textContent = '0';
        return;
    }

    // Is logged in, check tickets
    let fidelidade = JSON.parse(localStorage.getItem('fidelidadePinguine') || 'null');
    if (!fidelidade) {
        fidelidade = {
            totalGasto: 0,
            selos: 0,
            selosHistorico: [],
            tickets: 0,
            premiosDisponiveis: [],
            premiosResgatados: []
        };
        localStorage.setItem('fidelidadePinguine', JSON.stringify(fidelidade));
    }

    document.getElementById('roleta-tickets-count').textContent = fidelidade.tickets;

    if (fidelidade.tickets <= 0) {
        overlayNoTickets.style.display = 'flex';
        btnGirar.disabled = true;
        btnGirar.classList.add('disabled');
    }
}

/**
 * Atualiza o display de tickets
 */
function updateTicketDisplay() {
    const fidelidade = JSON.parse(localStorage.getItem('fidelidadePinguine') || '{}');
    const ticketsSpan = document.getElementById('roleta-tickets-count');
    if (ticketsSpan) {
        ticketsSpan.textContent = fidelidade.tickets || 0;
    }
}

/**
 * Tenta girar a roleta com validações de login e ticket
 */
function tentarGirarRoleta() {
    if (isSpinning) return;

    const isLoggedIn = localStorage.getItem('userLoggedIn') === 'true';
    if (!isLoggedIn) {
        window.location.href = 'login.html?redirect=main.html';
        return;
    }
    
    let fidelidade = JSON.parse(localStorage.getItem('fidelidadePinguine') || '{}');
    if (!fidelidade || !fidelidade.tickets || fidelidade.tickets <= 0) {
        abrirModalFidelidadeInfo();
        return;
    }
    
    spinWheel();
}

/**
 * Executa a animação de giro da roleta
 */
function spinWheel() {
    isSpinning = true;
    
    // Deduct ticket
    let fidelidade = JSON.parse(localStorage.getItem('fidelidadePinguine') || '{}');
    fidelidade.tickets = Math.max(0, fidelidade.tickets - 1);
    localStorage.setItem('fidelidadePinguine', JSON.stringify(fidelidade));
    updateTicketDisplay();
    
    // Slices
    const slices = [
        { label: 'Pizza Grátis 🍕', emoji: '🍕', tipo: 'pizza_gratis' },
        { label: '10% de Desconto 🏷️', emoji: '🏷️', tipo: 'desconto_10_percent' },
        { label: 'Bebida Grátis 🥤', emoji: '🥤', tipo: 'bebida_gratis' },
        { label: 'Combo Família 👨‍👩‍👧', emoji: '👨‍👩‍👧', tipo: 'combo_familia' },
        { label: 'Tente de novo 😅', emoji: '😅', tipo: 'tente_de_novo' },
        { label: 'Sorvete Grátis 🍦', emoji: '🍦', tipo: 'sorvete_gratis' },
        { label: 'Ticket Extra 🎟️', emoji: '🎟️', tipo: 'ticket_extra' },
        { label: '20% de Desconto 🔥', emoji: '🔥', tipo: 'desconto_20_percent' }
    ];
    
    const totalSlices = 8;
    const winningIndex = Math.floor(Math.random() * totalSlices);
    const winningSlice = slices[winningIndex];
    
    // Calculate new rotation angle to land in the center of the selected slice
    const sliceAngle = (2 * Math.PI) / totalSlices;
    const midAngle = (winningIndex + 0.5) * sliceAngle;
    const targetNormAngle = 2 * Math.PI - midAngle;
    
    // Add between 5 and 7 full spins
    const extraSpins = 5 + Math.floor(Math.random() * 3);
    const targetAngleRad = currentRotation + (extraSpins * 2 * Math.PI) + targetNormAngle - (currentRotation % (2 * Math.PI));
    
    currentRotation = targetAngleRad;
    const rotationDegrees = (currentRotation * 180) / Math.PI;
    
    const canvasElement = document.getElementById('roleta-canvas');
    const logoElement = document.getElementById('roleta-logo-container');
    const btnGirar = document.getElementById('btn-girar-roleta');
    
    if (btnGirar) {
        btnGirar.disabled = true;
        btnGirar.classList.add('disabled');
    }
    
    // Apply transform and transition classes
    canvasElement.style.transform = `rotate(${rotationDegrees}deg)`;
    logoElement.style.transform = `rotate(${rotationDegrees}deg)`;
    
    // Wait for transition to complete (5 seconds)
    setTimeout(() => {
        isSpinning = false;
        
        // Show result and credit rewards
        exibirPremio(winningSlice);
        
        // Re-check locks
        verificarAcessoRoleta();
    }, 5000);
}

/**
 * Salva o prêmio no perfil do usuário e abre o modal festivo
 */
function exibirPremio(slice) {
    let fidelidade = JSON.parse(localStorage.getItem('fidelidadePinguine') || '{}');
    const code = 'PNG-' + Math.random().toString(36).substr(2, 6).toUpperCase();
    
    if (slice.tipo === 'tente_de_novo') {
        document.getElementById('premio-ganho-icon').textContent = '😅';
        document.getElementById('premio-ganho-nome').textContent = 'Quase lá! Tente de novo!';
        document.getElementById('premio-ganho-codigo').textContent = 'Nenhum prêmio salvo';
    } else if (slice.tipo === 'ticket_extra') {
        fidelidade.tickets += 1;
        localStorage.setItem('fidelidadePinguine', JSON.stringify(fidelidade));
        updateTicketDisplay();
        
        document.getElementById('premio-ganho-icon').textContent = '🎟️';
        document.getElementById('premio-ganho-nome').textContent = 'Giro Grátis! +1 Ticket Extra';
        document.getElementById('premio-ganho-codigo').textContent = code;
    } else {
        // Award other rewards to available rewards list
        if (!fidelidade.premiosDisponiveis) fidelidade.premiosDisponiveis = [];
        fidelidade.premiosDisponiveis.push({
            id: 'roleta_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5),
            tipo: slice.tipo,
            nome: slice.label + ' (Roleta 🎡)',
            dataGanhado: new Date().toLocaleDateString('pt-BR')
        });
        localStorage.setItem('fidelidadePinguine', JSON.stringify(fidelidade));
        
        document.getElementById('premio-ganho-icon').textContent = slice.emoji;
        document.getElementById('premio-ganho-nome').textContent = slice.label;
        document.getElementById('premio-ganho-codigo').textContent = code;
    }
    
    // Open prize modal
    const modal = document.getElementById('modal-roleta-premio');
    modal.style.display = 'flex';
    setTimeout(() => {
        modal.classList.add('modal-ativo');
    }, 10);
}

// =====================
// MODAL CONTROLS
// =====================
function abrirModalFidelidadeInfo() {
    const modal = document.getElementById('modal-roleta-fidelidade');
    modal.style.display = 'flex';
    setTimeout(() => {
        modal.classList.add('modal-ativo');
    }, 10);
}

function fecharModalRoletaFidelidade() {
    const modal = document.getElementById('modal-roleta-fidelidade');
    modal.classList.remove('modal-ativo');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 350);
}

function fecharModalRoletaPremio() {
    const modal = document.getElementById('modal-roleta-premio');
    modal.classList.remove('modal-ativo');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 350);
}

// Close modals when clicking outside
window.addEventListener('click', (e) => {
    const modalFidelidade = document.getElementById('modal-roleta-fidelidade');
    if (e.target === modalFidelidade) {
        fecharModalRoletaFidelidade();
    }
});
