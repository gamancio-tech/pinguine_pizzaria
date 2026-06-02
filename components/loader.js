document.addEventListener("DOMContentLoaded", () => {
    const headerHTML = `
    <header>
        <div class="container">
            <button class="btn-menu"><a href="#"><img src="icons/menu-hamburguer.png" class="icon" alt="Menu"></a></button>
            <button class="btn-home"><a href="main.html"><img src="icons/casa2.png" class="icon" alt="Home"></a></button>
            <button class="btn-carrinho"><a href="carrinho.html"><img src="icons/carrinho-de-compras.png" class="icon" alt="Carrinho"></a></button>
            <search class="search-wrapper">
                <div class="search-inner">
                    <input id="search-input" type="text" placeholder="Pesquisar..." autocomplete="off">
                    <button id="search-btn" type="submit"><img src="icons/search.png" alt="Buscar"></button>
                </div>
                <ul id="search-suggestions" class="search-suggestions" role="listbox"></ul>
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
            <a href="#" class="item2"><img src="icons/instagram.png" class="icon" alt="Instagram" style="transform: translateY(5px)"> Instagram</a>
            <a href="#" class="item3"><img src="icons/whatsapp.png" class="icon" alt="Whatsapp" style="transform: translateY(5px)"> Whatsapp</a>
            <h3 class="item4"><img src="icons/telefone.png" class="icon" alt=""style="width: 45px; height: auto;"> Compre pelo nosso telefone</h3>
            <p class="item5">(11) 1234-5678</p>
            <h3 class="item6"><img src="icons/marcador.png" class="icon" alt="" style="width: 35px; height: auto;"> Endereço</h3>
            <p class="item7">Rua das Pizzas, 123 - São Paulo, SP</p>
            <h3 class="item8"><img src="icons/calendario.png" class="icon" alt=""> Atendimento</h3>
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
            const href = link.getAttribute("href");
            if (currentPath.endsWith(href)) {
                link.classList.add("nav-active");
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

    // ============================================================
    // BUSCA COM AUTOCOMPLETE
    // ============================================================
    const catalogoBusca = [
        { sabor: "calabresa",            titulo: "Pizza de Calabresa",              preco: "R$ 62,00", imagem: "images/cardapio_pizza/pizza1.png" },
        { sabor: "margherita",            titulo: "Pizza Margherita",                preco: "R$ 65,00", imagem: "images/cardapio_pizza/pizza2.png" },
        { sabor: "frango_catupiry",       titulo: "Pizza de Frango c/ Catupiry",     preco: "R$ 60,00", imagem: "images/cardapio_pizza/pizza3.png" },
        { sabor: "queijo",               titulo: "Pizza de Queijo",                 preco: "R$ 64,00", imagem: "images/cardapio_pizza/pizza4.png" },
        { sabor: "portuguesa",           titulo: "Pizza Portuguesa",                preco: "R$ 66,00", imagem: "images/cardapio_pizza/pizza5.png" },
        { sabor: "quatro_queijos",       titulo: "Pizza 4 Queijos",                 preco: "R$ 66,00", imagem: "images/cardapio_pizza/pizza6.png" },
        { sabor: "palmito",              titulo: "Pizza de Palmito",               preco: "R$ 66,00", imagem: "images/cardapio_pizza/pizza7.png" },
        { sabor: "presunto_queijo",      titulo: "Pizza de Presunto e Queijo",      preco: "R$ 66,00", imagem: "images/cardapio_pizza/pizza8.png" },
        { sabor: "bacon",                titulo: "Pizza de Bacon",                  preco: "R$ 63,00", imagem: "images/cardapio_pizza/pizza9.png" },
        { sabor: "pepperoni",            titulo: "Pizza de Pepperoni",              preco: "R$ 63,00", imagem: "images/cardapio_pizza/pizza10.png" },
        { sabor: "moda_casa",            titulo: "Pizza à Moda da Casa",            preco: "R$ 63,00", imagem: "images/cardapio_pizza/pizza11.png" },
        { sabor: "strogonoff",           titulo: "Pizza de Strogonoff",             preco: "R$ 63,00", imagem: "images/cardapio_pizza/pizza12.png" },
        { sabor: "margherita_veggie",    titulo: "Pizza Margherita Vegetariana",    preco: "R$ 70,00", imagem: "images/cardapio_pizza/pizza2.png" },
        { sabor: "milho_catupiry",       titulo: "Pizza de Milho com Catupiry",     preco: "R$ 70,00", imagem: "images/cardapio_pizza/pizza14.png" },
        { sabor: "escarola",             titulo: "Pizza de Escarola",               preco: "R$ 72,00", imagem: "images/cardapio_pizza/pizza15.png" },
        { sabor: "berinjela",            titulo: "Pizza de Berinjela",              preco: "R$ 70,00", imagem: "images/cardapio_pizza/pizza16.png" },
        { sabor: "funghi",               titulo: "Pizza de Funghi",                 preco: "R$ 72,00", imagem: "images/cardapio_pizza/pizza17.png" },
        { sabor: "vegetariana_completa", titulo: "Pizza Vegetariana Completa",      preco: "R$ 74,00", imagem: "images/cardapio_pizza/pizza18.png" },
        { sabor: "brigadeiro",           titulo: "Pizza de Brigadeiro",             preco: "R$ 62,00", imagem: "images/sobremesas/sobremesa1.png" },
        { sabor: "morango_chocolate",    titulo: "Pizza de Morango com Chocolate",  preco: "R$ 65,00", imagem: "images/sobremesas/sobremesa2.png" },
        { sabor: "romeu_julieta",        titulo: "Pizza Romeu e Julieta",           preco: "R$ 60,00", imagem: "images/sobremesas/sobremesa3.png" },
        { sabor: "banana_canela",        titulo: "Pizza de Banana com Canela",      preco: "R$ 64,00", imagem: "images/sobremesas/sobremesa4.png" },
        { sabor: "nutella_morango",      titulo: "Pizza de Nutella com Morango",    preco: "R$ 66,00", imagem: "images/sobremesas/sobremesa5.png" },
        { sabor: "prestigio",            titulo: "Pizza de Prestígio",              preco: "R$ 63,00", imagem: "images/sobremesas/sobremesa6.png" },
        { sabor: "oreo",                 titulo: "Iceberg de Oreo",                 preco: "R$ 70,00", imagem: "images/sobremesas/sobremesa7.png" },
        { sabor: "ninho",                titulo: "Nevasca de Ninho",               preco: "R$ 70,00", imagem: "images/sobremesas/sobremesa8.png" },
        { sabor: "glaciar_frutas",       titulo: "Glaciar de Frutas",              preco: "R$ 72,00", imagem: "images/sobremesas/sobremesa9.png" },
        { sabor: "pinguim_imperial",     titulo: "Pinguim Imperial",               preco: "R$ 70,00", imagem: "images/sobremesas/sobremesa10.png" },
        { sabor: "avalanche_ovomaltine", titulo: "Avalanche de Ovomaltine",        preco: "R$ 72,00", imagem: "images/sobremesas/sobremesa11.png" },
        { sabor: "alasca_tostado",       titulo: "Alasca Tostado",                 preco: "R$ 74,00", imagem: "images/sobremesas/sobremesa12.png" },
        { sabor: "mar_antartico",        titulo: "Mar Antártico",                   preco: "R$ 13,90", imagem: "images/bebidas/bebida1.png" },
        { sabor: "refresco_pinguim",     titulo: "Refresco do Pinguim Imperador",  preco: "R$ 18,90", imagem: "images/bebidas/bebida2.png" },
        { sabor: "aurora_boreal",        titulo: "Aurora Boreal",                  preco: "R$ 13,90", imagem: "images/bebidas/bebida3.png" },
        { sabor: "soda_tropical",        titulo: "Soda Tropical",                  preco: "R$ 13,90", imagem: "images/bebidas/bebida4.png" },
        { sabor: "iceberg_morango",      titulo: "Iceberg de Morango",             preco: "R$ 18,90", imagem: "images/bebidas/bebida5.png" },
        { sabor: "polo_norte",           titulo: "Polo Norte",                     preco: "R$ 19,90", imagem: "images/bebidas/bebida6.png" },
        { sabor: "coca_cola",            titulo: "Coca-Cola",                      preco: "R$ 11,50", imagem: "images/bebidas/bebida7.png" },
        { sabor: "guarana_antarctica",   titulo: "Guaraná Antarctica",             preco: "R$ 10,90", imagem: "images/bebidas/bebida8.png" },
        { sabor: "pepsi",                titulo: "Pepsi",                          preco: "R$ 10,90", imagem: "images/bebidas/bebida9.png" },
        { sabor: "sprite",               titulo: "Sprite",                         preco: "R$ 10,90", imagem: "images/bebidas/bebida10.png" },
        { sabor: "suco_manga",           titulo: "Suco de Manga Fresh",            preco: "R$ 12,90", imagem: "images/bebidas/bebida11.png" },
        { sabor: "suco_melancia",        titulo: "Suco de Melancia Fresh",         preco: "R$ 12,90", imagem: "images/bebidas/bebida12.png" },
        { sabor: "suco_morango",         titulo: "Suco de Morango Fresh",          preco: "R$ 12,90", imagem: "images/bebidas/bebida13.png" },
        { sabor: "suco_abacaxi",         titulo: "Suco de Abacaxi Fresh",          preco: "R$ 12,90", imagem: "images/bebidas/bebida14.png" },
        { sabor: "suco_maracuja",        titulo: "Suco de Maracujá Fresh",         preco: "R$ 12,90", imagem: "images/bebidas/bebida15.png" },
        { sabor: "suco_uva",             titulo: "Suco de Uva Fresh",              preco: "R$ 12,90", imagem: "images/bebidas/bebida16.png" },
        { sabor: "suco_limao",           titulo: "Suco de Limão Fresh",            preco: "R$ 12,90", imagem: "images/bebidas/bebida17.png" },
        { sabor: "suco_tutti_frutti",    titulo: "Suco de Tutti-Frutti Fresh",     preco: "R$ 12,90", imagem: "images/bebidas/bebida18.png" }
    ];

    function normalizarTexto(texto) {
        return texto
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");
    }

    function buscarProdutos(query) {
        const q = normalizarTexto(query.trim());
        if (!q) return [];
        return catalogoBusca.filter(item =>
            normalizarTexto(item.titulo).includes(q)
        );
    }

    function irParaBusca(query) {
        if (!query.trim()) return;
        // Detecta a raiz do projeto para montar o caminho correto
        const base = window.location.pathname.replace(/\/[^/]*$/, "/");
        window.location.href = "busca.html?q=" + encodeURIComponent(query.trim());
    }

    const searchInput = document.getElementById("search-input");
    const searchBtn   = document.getElementById("search-btn");
    const suggestionsList = document.getElementById("search-suggestions");

    if (searchInput && searchBtn && suggestionsList) {

        function renderSuggestions(results) {
            suggestionsList.innerHTML = "";
            if (!results.length) {
                suggestionsList.classList.remove("search-suggestions--active");
                return;
            }
            const max = Math.min(results.length, 6);
            for (let i = 0; i < max; i++) {
                const item = results[i];
                const li = document.createElement("li");
                li.className = "search-suggestion-item";
                li.setAttribute("role", "option");
                li.innerHTML =
                    `<img src="${item.imagem}" alt="${item.titulo}" class="sugg-thumb">` +
                    `<span class="sugg-titulo">${item.titulo}</span>` +
                    `<span class="sugg-preco">${item.preco}</span>`;
                li.addEventListener("mousedown", (e) => {
                    e.preventDefault();
                    window.location.href = "produto.html?sabor=" + item.sabor;
                });
                suggestionsList.appendChild(li);
            }
            suggestionsList.classList.add("search-suggestions--active");
        }

        function hideSuggestions() {
            suggestionsList.classList.remove("search-suggestions--active");
            suggestionsList.innerHTML = "";
        }

        searchInput.addEventListener("input", () => {
            const results = buscarProdutos(searchInput.value);
            renderSuggestions(results);
        });

        searchInput.addEventListener("blur", () => {
            // Delay para permitir clique na sugestão antes de esconder
            setTimeout(hideSuggestions, 200);
        });

        searchInput.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                hideSuggestions();
                irParaBusca(searchInput.value);
            }
        });

        searchBtn.addEventListener("click", () => {
            hideSuggestions();
            irParaBusca(searchInput.value);
        });
    }
});
