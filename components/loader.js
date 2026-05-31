document.addEventListener("DOMContentLoaded", () => {
    const headerHTML = `
    <header>
        <div class="container">
            <button class="btn-menu"><a href="#"><img src="icons/menu-hamburguer.png" class="icon" alt="Menu"></a></button>
            <button class="btn-home"><a href="main.html"><img src="icons/lar.png" class="icon" alt="Home"></a></button>
            <button class="btn-carrinho"><a href="carrinho.html"><img src="icons/carrinho-de-compras (1).png" class="icon" alt="Carrinho"></a></button>
            <search>
                <input type="text" placeholder="Pesquisar...">
                <button type="submit"><img src="icons/search.png" alt="Buscar"></button>
            </search>
            <img src="images/logo.jpg" class="logo" alt="Logo da Pinguine Pizzaria">
            <div id="header-user" class="header-user"></div>
        </div>
    </header>
    `;

    const navHTML = `
    <nav>
        <a href="cardapio.html"><img src="icons/menu-food.png" alt="Cardápio"> Cardápio</a>
        <a href="menu_pizza.html"><img src="icons/fatia-de-pizza.png" alt="Pizzas"> Pizzas</a>
        <a href="menu_bebida.html"><img src="icons/coquetel-alternativo.png" alt="Bebidas"> Bebidas</a>
        <a href="menu_sobremesa.html" id="last"><img src="icons/colheres-de-tigela.png" alt="Sobremesas"> Sobremesas</a>
    </nav>
    `;

    const footerHTML = `
    <footer>
        <div class="footer-grid">
            <h3 class="item1"><img src="icons/compartilhar.png" class="icon" alt=""> Redes sociais</h3>
            <a href="#" class="item2"><img src="images/instagram.png" alt="Instagram"> Instagram</a>
            <a href="#" class="item3"><img src="images/whatsapp.png" alt="Whatsapp"> Whatsapp</a>
            <h3 class="item4"><img src="icons/circulo-telefone-flip.png" class="icon" alt=""> Compre pelo nosso telefone</h3>
            <p class="item5">(11) 1234-5678</p>
            <h3 class="item6"><img src="icons/marcador.png" class="icon" alt=""> Endereço</h3>
            <p class="item7">Rua das Pizzas, 123 - São Paulo, SP</p>
            <h3 class="item8"><img src="icons/relogio-calendario.png" class="icon" alt=""> Atendimento</h3>
            <p class="item9">Segunda a Domingo: 18h às 23h</p>
            <img src="images/app.jpg" class="item10" alt="app da Pinguine Pizzaria">
        </div>
    </footer>
    `;

    // Inserção dos componentes
    const headerEl = document.getElementById("site-header");
    if (headerEl) {
        headerEl.innerHTML = headerHTML;
    }

    const navEl = document.getElementById("site-nav");
    if (navEl) {
        navEl.innerHTML = navHTML;
        
        // Determina qual aba está ativa baseado na URL atual
        const currentPath = window.location.pathname;
        const navLinks = navEl.querySelectorAll("nav a");
        navLinks.forEach(link => {
            }
        });
    }

    const footerEl = document.getElementById("site-footer");
    if (footerEl) {
        footerEl.innerHTML = footerHTML;
    }

    // Carregamento dinâmico do script de autenticação do header
    // Garante que o elemento #header-user já esteja no DOM antes do script user-header.js executar
    const script = document.createElement("script");
    script.src = "user-header.js";
    document.body.appendChild(script);
});
