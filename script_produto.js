// 1. Nosso "Banco de Dados" fictício com as informações de cada pizza
const cardapio = {
    // === PIZZAS TRADICIONAIS ===
    calabresa: {
        titulo: "Pizza de Calabresa",
        preco: "R$ 62,00",
        descricao: "Molho de tomate especial da casa, muçarela derretida, calabresa fatiada de primeira qualidade, cebola fresca, orégano e azeitonas pretas sobre nossa massa artesanal.",
        imagem: "images/cardapio_pizza/pizza1.png"
    },
    margherita: {
        titulo: "Pizza Margherita",
        preco: "R$ 65,00",
        descricao: "Massa leve e crocante, molho de tomate natural, muçarela derretida, fatias de tomate fresco, folhas de manjericão fresco e um fio de azeite extravirgem.",
        imagem: "images/cardapio_pizza/pizza2.png"
    },
    frango_catupiry: {
        titulo: "Pizza de Frango c/ Catupiry",
        preco: "R$ 60,00",
        descricao: "Frango desfiado temperado com perfeição, coberto com o legítimo requeijão cremoso Catupiry e muçarela derretida sobre nossa massa especial.",
        imagem: "images/cardapio_pizza/pizza3.png"
    },
    queijo: {
        titulo: "Pizza de Queijo",
        preco: "R$ 64,00",
        descricao: "Combinação clássica de muçarela da casa perfeitamente derretida sobre nosso molho de tomate artesanal e orégano fresco.",
        imagem: "images/cardapio_pizza/pizza4.png"
    },
    portuguesa: {
        titulo: "Pizza Portuguesa",
        preco: "R$ 66,00",
        descricao: "Muçarela, presunto cozido fatiado, ovos cozidos, cebola fresca, ervilhas, pimentão e azeitonas pretas sobre nossa saborosa massa.",
        imagem: "images/cardapio_pizza/pizza5.png"
    },
    quatro_queijos: {
        titulo: "Pizza 4 Queijos",
        preco: "R$ 66,00",
        descricao: "Uma deliciosa combinação dos melhores queijos selecionados da casa: muçarela, provolone, parmesão ralado e o cremoso requeijão.",
        imagem: "images/cardapio_pizza/pizza6.png"
    },
    palmito: {
        titulo: "Pizza de Palmito",
        preco: "R$ 66,00",
        descricao: "Palmito macio em rodelas, muçarela derretida, molho de tomate fresco e orégano sob nossa massa tradicional.",
        imagem: "images/cardapio_pizza/pizza7.png"
    },
    presunto_queijo: {
        titulo: "Pizza de Presunto e Queijo",
        preco: "R$ 66,00",
        descricao: "Delicioso presunto fatiado combinado com muçarela de alta qualidade e molho de tomate especial da casa.",
        imagem: "images/cardapio_pizza/pizza8.png"
    },
    bacon: {
        titulo: "Pizza de Bacon",
        preco: "R$ 63,00",
        descricao: "Crocantes fatias de bacon selecionado sobre uma camada de muçarela derretida e molho de tomate artesanal.",
        imagem: "images/cardapio_pizza/pizza9.png"
    },
    pepperoni: {
        titulo: "Pizza de Pepperoni",
        preco: "R$ 63,00",
        descricao: "Fatias generosas de pepperoni condimentado e levemente picante, muçarela derretida e orégano sobre nossa massa artesanal.",
        imagem: "images/cardapio_pizza/pizza10.png"
    },
    moda_casa: {
        titulo: "Pizza à Moda da Casa",
        preco: "R$ 63,00",
        descricao: "Uma combinação especial dos ingredientes mais frescos da casa: muçarela, presunto, calabresa, cebola, ovos, pimentão e azeitona preta.",
        imagem: "images/cardapio_pizza/pizza11.png"
    },
    strogonoff: {
        titulo: "Pizza de Strogonoff",
        preco: "R$ 63,00",
        descricao: "Delicioso strogonoff de frango ou carne com molho cremoso, coberto com muçarela e finalizado com batata palha crocante.",
        imagem: "images/cardapio_pizza/pizza12.png"
    },

    // === PIZZAS VEGETARIANAS ===
    margherita_veggie: {
        titulo: "Pizza Margherita Vegetariana",
        preco: "R$ 70,00",
        descricao: "Massa leve e crocante, molho de tomate natural, generosa muçarela de búfala derretida, fatias de tomate fresco, folhas de manjericão e um fio de azeite extravirgem.",
        imagem: "images/cardapio_pizza/pizza2.png"
    },
    milho_catupiry: {
        titulo: "Pizza de Milho com Catupiry",
        preco: "R$ 70,00",
        descricao: "Milho verde selecionado coberto com o autêntico requeijão cremoso Catupiry e muçarela derretida sob nossa massa artesanal.",
        imagem: "images/cardapio_pizza/pizza14.png"
    },
    escarola: {
        titulo: "Pizza de Escarola",
        preco: "R$ 72,00",
        descricao: "Escarola refogada no alho, coberta com muçarela derretida e finalizada com um toque especial de bacon vegetal ou alho frito.",
        imagem: "images/cardapio_pizza/pizza15.png"
    },
    berinjela: {
        titulo: "Pizza de Berinjela",
        preco: "R$ 70,00",
        descricao: "Berinjela grelhada com azeite, alho e ervas, coberta com muçarela derretida e orégano sobre nossa deliciosa massa.",
        imagem: "images/cardapio_pizza/pizza16.png"
    },
    funghi: {
        titulo: "Pizza de Funghi",
        preco: "R$ 72,00",
        descricao: "Cogumelos paris e shimeji salteados na manteiga e alho, sob uma camada de muçarela derretida e cebolinha fresca.",
        imagem: "images/cardapio_pizza/pizza17.png"
    },
    vegetariana_completa: {
        titulo: "Pizza Vegetariana Completa",
        preco: "R$ 74,00",
        descricao: "Mix de vegetais selecionados: brócolis, milho, ervilha, palmito, cebola, tomate e pimentão, cobertos com muçarela derretida.",
        imagem: "images/cardapio_pizza/pizza18.png"
    },

    // === PIZZAS DOCES ===
    brigadeiro: {
        titulo: "Pizza de Brigadeiro",
        preco: "R$ 62,00",
        descricao: "Massa doce crocante coberta com generosa camada de brigadeiro artesanal cremoso e bastante granulado de chocolate belga.",
        imagem: "images/sobremesas/sobremesa1.png"
    },
    morango_chocolate: {
        titulo: "Pizza de Morango com Chocolate",
        preco: "R$ 65,00",
        descricao: "Creme de chocolate cremoso com morangos frescos fatiados, finalizada com calda ou raspas de chocolate ao leite.",
        imagem: "images/sobremesas/sobremesa2.png"
    },
    romeu_julieta: {
        titulo: "Pizza Romeu e Julieta",
        preco: "R$ 60,00",
        descricao: "A clássica e perfeita combinação de muçarela derretida com a tradicional goiabada cremosa da casa.",
        imagem: "images/sobremesas/sobremesa3.png"
    },
    banana_canela: {
        titulo: "Pizza de Banana com Canela",
        preco: "R$ 64,00",
        descricao: "Fatias de banana fresca com açúcar e canela salpicados, gratinadas com muçarela ou leite condensado.",
        imagem: "images/sobremesas/sobremesa4.png"
    },
    pacoca: {
        titulo: "Pizza de Paçoca",
        preco: "R$ 66,00",
        descricao: "Uma combinação irresistível de creme especial e generosas camadas de paçoca esfarelada, criando o equilíbrio perfeito entre cremosidade e o sabor marcante do amendoim. Uma sobremesa que conquista a cada fatia.",
        imagem: "images/sobremesas/sobremesa5.png"
    },
    prestigio: {
        titulo: "Pizza de Prestígio",
        preco: "R$ 63,00",
        descricao: "Deliciosa cobertura de chocolate ao leite cremoso polvilhada com coco ralado úmido de alta qualidade.",
        imagem: "images/sobremesas/sobremesa6.png"
    },

    // === PARAÍSO GELADO (SORVETES / ICEBERGS) ===
    oreo: {
        titulo: "Iceberg de Oreo",
        preco: "R$ 70,00",
        descricao: "Massa tradicional artesanal servida quentinha, coberta com generosas bolas de sorvete de baunilha, pedaços crocantes de biscoito Oreo e uma calda irresistível de chocolate gélido.",
        imagem: "images/sobremesas/sobremesa7.png"
    },
    ninho: {
        titulo: "Nevasca de Ninho",
        preco: "R$ 70,00",
        descricao: "Massa artesanal quentinha coberta com sorvete aveludado de Leite Ninho, polvilhada com leite em pó simulando uma nevasca e finalizada com fios de chocolate branco.",
        imagem: "images/sobremesas/sobremesa8.png"
    },
    glaciar_frutas: {
        titulo: "Glaciar de Frutas",
        preco: "R$ 72,00",
        descricao: "Massa doce quentinha coberta com sorvete de creme cremoso, mix de frutas vermelhas selecionadas (morangos, amoras e mirtilos) e uma calda silvestre artesanal.",
        imagem: "images/sobremesas/sobremesa9.png"
    },
    pinguim_imperial: {
        titulo: "Pinguim Imperial",
        preco: "R$ 70,00",
        descricao: "Combinação perfeita de duas caldas irresistíveis (chocolate ao leite e chocolate branco) com sorvete cremoso de creme sobre nossa massa artesanal quente.",
        imagem: "images/sobremesas/sobremesa10.png"
    },
    avalanche_ovomaltine: {
        titulo: "Avalanche de Ovomaltine",
        preco: "R$ 72,00",
        descricao: "Massa artesanal doce com sorvete cremoso de creme, coberto com calda quente de chocolate e uma verdadeira avalanche de Ovomaltine crocante.",
        imagem: "images/sobremesas/sobremesa11.png"
    },
    alasca_tostado: {
        titulo: "Alasca Tostado",
        preco: "R$ 74,00",
        descricao: "Massa quentinha servida com sorvete premium de creme, coberta com marshmallows perfeitamente tostados no maçarico e fios de caramelo salgado.",
        imagem: "images/sobremesas/sobremesa12.png"
    },

    // === DRINKS ===
    mar_antartico: {
        titulo: "Mar Antártico",
        preco: "R$ 13,90",
        descricao: "Um drink refrescante e gélido com curaçau blue, refrigerante cítrico, gelo triturado e uma fatia de limão fresco. Perfeito para refrescar o seu dia!",
        imagem: "images/bebidas/bebida1.png"
    },
    refresco_pinguim: {
        titulo: "Refresco do Pinguim Imperador",
        preco: "R$ 18,90",
        descricao: "Chá mate gelado batido com frutas cítricas e hortelã fresca, servido em uma caneca especial com muito gelo.",
        imagem: "images/bebidas/bebida2.png"
    },
    aurora_boreal: {
        titulo: "Aurora Boreal",
        preco: "R$ 13,90",
        descricao: "Um maravilhoso drink em camadas coloridas imitando a aurora boreal, com xaropes artesanais de frutas, suco cítrico e água com gás.",
        imagem: "images/bebidas/bebida3.png"
    },
    soda_tropical: {
        titulo: "Soda Tropical",
        preco: "R$ 13,90",
        descricao: "Soda refrescante de maracujá com sementes frescas, hortelã e bastante gelo triturado.",
        imagem: "images/bebidas/bebida4.png"
    },
    iceberg_morango: {
        titulo: "Iceberg de Morango",
        preco: "R$ 18,90",
        descricao: "Drink cremoso de morangos selecionados batidos com creme especial do Pinguim e gelo.",
        imagem: "images/bebidas/bebida5.png"
    },
    polo_norte: {
        titulo: "Polo Norte",
        preco: "R$ 19,90",
        descricao: "Milkshake ultra cremoso sabor baunilha com pedaços crocantes e finalizado com chantilly especial.",
        imagem: "images/bebidas/bebida6.png"
    },

    // === REFRIGERANTES ===
    coca_cola: {
        titulo: "Coca-Cola",
        preco: "R$ 11,50",
        descricao: "Refrigerante Coca-Cola Lata 350ml trincando de gelada.",
        imagem: "images/bebidas/bebida7.png"
    },
    bebida19: {
        titulo: "Coca-Cola 2L",
        preco: "R$ 19,90",
        descricao: "Coca-Cola 2 litros bem gelada, perfeita para acompanhar o seu combo.",
        imagem: "images/bebidas/bebida19.png"
    },
    guarana_antarctica: {
        titulo: "Guaraná Antarctica",
        preco: "R$ 10,90",
        descricao: "Refrigerante Guaraná Antarctica Lata 350ml gelado.",
        imagem: "images/bebidas/bebida8.png"
    },
    pepsi: {
        titulo: "Pepsi",
        preco: "R$ 10,90",
        descricao: "Refrigerante Pepsi Lata 350ml gelada.",
        imagem: "images/bebidas/bebida9.png"
    },
    sprite: {
        titulo: "Sprite",
        preco: "R$ 10,90",
        descricao: "Refrigerante Sprite Lata 350ml gelado e refrescante.",
        imagem: "images/bebidas/bebida10.png"
    },

    // === SUCOS ===
    suco_manga: {
        titulo: "Suco de Manga Fresh",
        preco: "R$ 12,90",
        descricao: "Suco natural e refrescante de manga madura selecionada, batido na hora com gelo.",
        imagem: "images/bebidas/bebida11.png"
    },
    suco_melancia: {
        titulo: "Suco de Melancia Fresh",
        preco: "R$ 12,90",
        descricao: "Suco natural de melancia fresca e doce, muito refrescante e hidratante.",
        imagem: "images/bebidas/bebida12.png"
    },
    suco_morango: {
        titulo: "Suco de Morango Fresh",
        preco: "R$ 12,90",
        descricao: "Suco natural de morangos frescos batidos na hora.",
        imagem: "images/bebidas/bebida13.png"
    },
    suco_abacaxi: {
        titulo: "Suco de Abacaxi Fresh",
        preco: "R$ 12,90",
        descricao: "Suco natural de abacaxi fresco batido com hortelã opcional e gelo.",
        imagem: "images/bebidas/bebida14.png"
    },
    suco_maracuja: {
        titulo: "Suco de Maracujá Fresh",
        preco: "R$ 12,90",
        descricao: "Suco natural de maracujá da fruta, perfeito equilíbrio entre o cítrico e o doce.",
        imagem: "images/bebidas/bebida15.png"
    },
    suco_uva: {
        titulo: "Suco de Uva Fresh",
        preco: "R$ 12,90",
        descricao: "Suco natural de uva roxa concentrado e saboroso.",
        imagem: "images/bebidas/bebida16.png"
    },
    suco_limao: {
        titulo: "Suco de Limão Fresh",
        preco: "R$ 12,90",
        descricao: "Limonada suíça fresh feita com limões espremidos na hora com casca, bem gelada.",
        imagem: "images/bebidas/bebida17.png"
    },
    suco_tutti_frutti: {
        titulo: "Suco de Tutti-Frutti Fresh",
        preco: "R$ 12,90",
        descricao: "Delicioso e colorido suco sabor tutti-frutti com um mix especial de xaropes e geléias coloridas.",
        imagem: "images/bebidas/bebida18.png"
    }
};

// 2. Função para ler o parâmetro da URL (ex: ?sabor=oreo)
const urlParams = new URLSearchParams(window.location.search);
const saborSelecionado = urlParams.get('sabor');

// 3. Verifica se o sabor existe no nosso "banco de dados" e injeta no HTML
if (saborSelecionado && cardapio[saborSelecionado]) {
    const produto = cardapio[saborSelecionado];

    document.getElementById('prod-titulo').innerText = produto.titulo;
    document.getElementById('prod-preco').innerText = produto.preco;
    document.getElementById('prod-descricao').innerText = produto.descricao;
    const imgElem = document.getElementById('prod-img');
    imgElem.src = produto.imagem;
    imgElem.alt = produto.titulo;
    // Apply category‑specific styling: bebidas (drinks) use contain, pizzas/sobremesas use cover
    if (produto.imagem.includes('/bebidas/') || produto.imagem.includes('/drinks/')) {
        imgElem.classList.add('drink-image');
        imgElem.classList.remove('food-image');
    } else {
        imgElem.classList.add('food-image');
        imgElem.classList.remove('drink-image');
    }

    // Show pizza selection sections (tamanho & borda) only for pizza products
    const pizzaKeys = [
        'calabresa', 'margherita', 'frango_catupiry', 'queijo', 'portuguesa',
        'quatro_queijos', 'palmito', 'presunto_queijo', 'bacon', 'pepperoni',
        'moda_casa', 'strogonoff',
        'margherita_veggie', 'milho_catupiry', 'escarola', 'berinjela',
        'funghi', 'vegetariana_completa',
        'brigadeiro', 'morango_chocolate', 'romeu_julieta', 'banana_canela',
        'pacoca', 'prestigio',
        'oreo', 'ninho', 'glaciar_frutas', 'pinguim_imperial', 'avalanche_ovomaltine', 'alasca_tostado'
    ];
    const selecoesPizza = document.getElementById('selecoes-pizza');
    if (selecoesPizza && pizzaKeys.includes(saborSelecionado)) {
        selecoesPizza.style.display = 'block';

        // Sweet pizza border options restriction
        const sweetPizzaKeys = [
            'brigadeiro', 'morango_chocolate', 'romeu_julieta', 'banana_canela', 'pacoca', 'prestigio',
            'oreo', 'ninho', 'glaciar_frutas', 'pinguim_imperial', 'avalanche_ovomaltine', 'alasca_tostado'
        ];
        if (sweetPizzaKeys.includes(saborSelecionado)) {
            const catupiryCard = document.querySelector('input[name="borda"][value="catupiry"]');
            const cheddarCard = document.querySelector('input[name="borda"][value="cheddar"]');
            if (catupiryCard) catupiryCard.closest('.opcao-card').style.display = 'none';
            if (cheddarCard) cheddarCard.closest('.opcao-card').style.display = 'none';
        }

        // Dynamically update the size option badges with the full pizza prices
        const precoBaseVal = parsePreco(produto.preco);
        const pqInput = document.querySelector('input[name="tamanho"][value="pequena"]');
        const mdInput = document.querySelector('input[name="tamanho"][value="media"]');
        const gdInput = document.querySelector('input[name="tamanho"][value="grande"]');

        if (pqInput) {
            const b = pqInput.parentElement.querySelector('.opcao-preco-badge');
            if (b) {
                b.innerText = formatPreco(precoBaseVal - 10);
                b.className = 'opcao-preco-badge normal';
            }
        }
        if (mdInput) {
            const b = mdInput.parentElement.querySelector('.opcao-preco-badge');
            if (b) {
                b.innerText = formatPreco(precoBaseVal);
                b.className = 'opcao-preco-badge normal';
            }
        }
        if (gdInput) {
            const b = gdInput.parentElement.querySelector('.opcao-preco-badge');
            if (b) {
                b.innerText = formatPreco(precoBaseVal + 15);
                b.className = 'opcao-preco-badge normal';
            }
        }

        // Add event listeners for dynamic pricing on selection change
        const radios = document.querySelectorAll('#selecoes-pizza input[type="radio"]');
        radios.forEach(radio => {
            radio.addEventListener('change', atualizarPrecoExibido);
        });
    }

    // Initial price calculation and rendering
    atualizarPrecoExibido();
} else {
    // Caso alguém acesse produto.html sem passar um sabor válido
    document.getElementById('prod-titulo').innerText = "Produto não encontrado";
    document.getElementById('prod-descricao').innerText = "Por favor, volte ao cardápio e selecione um produto válido.";
}

// 4. Controle de Quantidade e Envio ao Carrinho
let quantidade = 1;
const qntdElement = document.getElementById('qntd-valor');
const btnMenos = document.getElementById('btn-menos');
const btnMais = document.getElementById('btn-mais');
const btnAdicionarCarrinho = document.getElementById('btn-adicionar-carrinho');
const observacaoInput = document.getElementById('prod-observacao');

if (qntdElement && btnMenos && btnMais && btnAdicionarCarrinho) {
    // Diminuir a quantidade
    btnMenos.addEventListener('click', () => {
        if (quantidade > 1) {
            quantidade--;
            qntdElement.innerText = quantidade;
        }
    });

    // Aumentar a quantidade
    btnMais.addEventListener('click', () => {
        quantidade++;
        qntdElement.innerText = quantidade;
    });

    // Digitar a quantidade diretamente
    qntdElement.addEventListener('click', () => {
        const input = prompt("Digite a quantidade desejada (máximo 20):", quantidade);
        if (input !== null) {
            const num = parseInt(input, 10);
            if (!isNaN(num) && num >= 1 && num <= 20) {
                quantidade = num;
                qntdElement.innerText = quantidade;
            } else {
                alert("Por favor, digite um número inteiro de 1 a 20.");
            }
        }
    });

    // Enviar ao carrinho (localStorage)
    btnAdicionarCarrinho.addEventListener('click', () => {
        if (!saborSelecionado || !cardapio[saborSelecionado]) {
            alert('Não é possível adicionar um produto inválido ao carrinho.');
            return;
        }

        const produto = cardapio[saborSelecionado];
        let observacao = observacaoInput ? observacaoInput.value.trim() : "";

        // Include pizza size & border selections in observation if visible
        const selecoesPizza = document.getElementById('selecoes-pizza');
        if (selecoesPizza && selecoesPizza.style.display !== 'none') {
            const tamanhoEl = document.querySelector('input[name="tamanho"]:checked');
            const bordaEl = document.querySelector('input[name="borda"]:checked');
            const tamanhoLabel = { pequena: 'Pequena', media: 'Média', grande: 'Grande' };
            const bordaLabel = { sem_borda: 'Sem Borda Recheada', catupiry: 'Catupiry', cheddar: 'Cheddar', chocolate: 'Chocolate' };

            const parts = [];
            if (tamanhoEl) parts.push('Tamanho: ' + (tamanhoLabel[tamanhoEl.value] || tamanhoEl.value));
            if (bordaEl) parts.push('Borda: ' + (bordaLabel[bordaEl.value] || bordaEl.value));
            const selecaoTexto = parts.join(' | ');

            if (observacao) {
                observacao = selecaoTexto + ' | ' + observacao;
            } else {
                observacao = selecaoTexto;
            }
        }

        let precoCalculado = produto.preco;
        if (selecoesPizza && selecoesPizza.style.display !== 'none') {
            let precoBase = parsePreco(produto.preco);
            const tamanhoEl = document.querySelector('input[name="tamanho"]:checked');
            const bordaEl = document.querySelector('input[name="borda"]:checked');
            let ajuste = 0;
            if (tamanhoEl) {
                if (tamanhoEl.value === 'pequena') ajuste -= 10;
                else if (tamanhoEl.value === 'grande') ajuste += 15;
            }
            if (bordaEl) {
                if (bordaEl.value === 'catupiry' || bordaEl.value === 'cheddar') ajuste += 8;
                else if (bordaEl.value === 'chocolate') ajuste += 10;
            }
            precoCalculado = formatPreco(precoBase + ajuste);
        }

        // Objeto do produto a ser adicionado
        const itemCarrinho = {
            sabor: saborSelecionado,
            titulo: produto.titulo,
            preco: precoCalculado,
            imagem: produto.imagem,
            quantidade: quantidade,
            observacao: observacao
        };

        // Obter itens já existentes do carrinho no localStorage
        let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

        // Verificar se já existe o mesmo produto com as mesmas observações
        const indexExistente = carrinho.findIndex(item =>
            item.sabor === itemCarrinho.sabor && item.observacao === itemCarrinho.observacao
        );

        if (indexExistente > -1) {
            carrinho[indexExistente].quantidade += quantidade;
        } else {
            carrinho.push(itemCarrinho);
        }

        // Salvar carrinho atualizado
        localStorage.setItem('carrinho', JSON.stringify(carrinho));

        // Feedback Premium (Transição de estilo do botão)
        const textoOriginal = btnAdicionarCarrinho.innerText;
        btnAdicionarCarrinho.innerText = "✓ Adicionado!";
        btnAdicionarCarrinho.style.backgroundColor = "var(--cor2)";
        btnAdicionarCarrinho.disabled = true;

        // Armazena a última página de produto para voltar depois
        const productBackPaths = {
            calabresa: 'menu_pizza.html#pizzas-tradicionais',
            margherita: 'menu_pizza.html#pizzas-tradicionais',
            frango_catupiry: 'menu_pizza.html#pizzas-tradicionais',
            queijo: 'menu_pizza.html#pizzas-tradicionais',
            portuguesa: 'menu_pizza.html#pizzas-tradicionais',
            quatro_queijos: 'menu_pizza.html#pizzas-tradicionais',
            palmito: 'menu_pizza.html#pizzas-tradicionais',
            presunto_queijo: 'menu_pizza.html#pizzas-tradicionais',
            bacon: 'menu_pizza.html#pizzas-tradicionais',
            pepperoni: 'menu_pizza.html#pizzas-tradicionais',
            moda_casa: 'menu_pizza.html#pizzas-tradicionais',
            strogonoff: 'menu_pizza.html#pizzas-tradicionais',
            margherita_veggie: 'menu_pizza.html#pizzas-vegetarianas',
            milho_catupiry: 'menu_pizza.html#pizzas-vegetarianas',
            escarola: 'menu_pizza.html#pizzas-vegetarianas',
            berinjela: 'menu_pizza.html#pizzas-vegetarianas',
            funghi: 'menu_pizza.html#pizzas-vegetarianas',
            vegetariana_completa: 'menu_pizza.html#pizzas-vegetarianas',
            brigadeiro: 'menu_sobremesa.html#sobremesas-doces',
            morango_chocolate: 'menu_sobremesa.html#sobremesas-doces',
            romeu_julieta: 'menu_sobremesa.html#sobremesas-doces',
            banana_canela: 'menu_sobremesa.html#sobremesas-doces',
            pacoca: 'menu_sobremesa.html#sobremesas-doces',
            prestigio: 'menu_sobremesa.html#sobremesas-doces',
            oreo: 'menu_sobremesa.html#paraiso-gelado',
            ninho: 'menu_sobremesa.html#paraiso-gelado',
            glaciar_frutas: 'menu_sobremesa.html#paraiso-gelado',
            pinguim_imperial: 'menu_sobremesa.html#paraiso-gelado',
            alasca_tostado: 'menu_sobremesa.html#paraiso-gelado',
            mar_antartico: 'menu_bebida.html#drinks',
            refresco_pinguim: 'menu_bebida.html#drinks',
            aurora_boreal: 'menu_bebida.html#drinks',
            soda_tropical: 'menu_bebida.html#drinks',
            iceberg_morango: 'menu_bebida.html#drinks',
            polo_norte: 'menu_bebida.html#drinks',
            coca_cola: 'menu_bebida.html#refrigerantes',
            guarana_antarctica: 'menu_bebida.html#refrigerantes',
            pepsi: 'menu_bebida.html#refrigerantes',
            sprite: 'menu_bebida.html#refrigerantes',
            suco_manga: 'menu_bebida.html#sucos',
            suco_melancia: 'menu_bebida.html#sucos',
            suco_morango: 'menu_bebida.html#sucos',
            suco_abacaxi: 'menu_bebida.html#sucos',
            suco_maracuja: 'menu_bebida.html#sucos',
            suco_uva: 'menu_bebida.html#sucos',
            suco_limao: 'menu_bebida.html#sucos',
            suco_tutti_frutti: 'menu_bebida.html#sucos'
        };

        let lastProductPage = productBackPaths[saborSelecionado] || 'main.html';
        
        // Se o usuário veio da página unificada do cardápio completo,
        // retornamos ele para lá na seção correta!
        if (document.referrer && document.referrer.includes('cardapio.html')) {
            const cardapioSections = {
                // Pizzas Tradicionais
                calabresa: 'cardapio.html#pizzas-tradicionais',
                margherita: 'cardapio.html#pizzas-tradicionais',
                frango_catupiry: 'cardapio.html#pizzas-tradicionais',
                queijo: 'cardapio.html#pizzas-tradicionais',
                portuguesa: 'cardapio.html#pizzas-tradicionais',
                quatro_queijos: 'cardapio.html#pizzas-tradicionais',
                palmito: 'cardapio.html#pizzas-tradicionais',
                presunto_queijo: 'cardapio.html#pizzas-tradicionais',
                bacon: 'cardapio.html#pizzas-tradicionais',
                pepperoni: 'cardapio.html#pizzas-tradicionais',
                moda_casa: 'cardapio.html#pizzas-tradicionais',
                strogonoff: 'cardapio.html#pizzas-tradicionais',
                // Pizzas Vegetarianas
                margherita_veggie: 'cardapio.html#pizzas-vegetarianas',
                milho_catupiry: 'cardapio.html#pizzas-vegetarianas',
                escarola: 'cardapio.html#pizzas-vegetarianas',
                berinjela: 'cardapio.html#pizzas-vegetarianas',
                funghi: 'cardapio.html#pizzas-vegetarianas',
                vegetariana_completa: 'cardapio.html#pizzas-vegetarianas',
                // Bebidas / Drinks
                mar_antartico: 'cardapio.html#drinks',
                refresco_pinguim: 'cardapio.html#drinks',
                aurora_boreal: 'cardapio.html#drinks',
                soda_tropical: 'cardapio.html#drinks',
                iceberg_morango: 'cardapio.html#drinks',
                polo_norte: 'cardapio.html#drinks',
                // Refrigerantes
                coca_cola: 'cardapio.html#refrigerantes',
                guarana_antarctica: 'cardapio.html#refrigerantes',
                pepsi: 'cardapio.html#refrigerantes',
                sprite: 'cardapio.html#refrigerantes',
                // Sucos
                suco_manga: 'cardapio.html#sucos',
                suco_melancia: 'cardapio.html#sucos',
                suco_morango: 'cardapio.html#sucos',
                suco_abacaxi: 'cardapio.html#sucos',
                suco_maracuja: 'cardapio.html#sucos',
                suco_uva: 'cardapio.html#sucos',
                suco_limao: 'cardapio.html#sucos',
                suco_tutti_frutti: 'cardapio.html#sucos',
                // Pizzas Doces
                brigadeiro: 'cardapio.html#sobremesas-doces',
                morango_chocolate: 'cardapio.html#sobremesas-doces',
                romeu_julieta: 'cardapio.html#sobremesas-doces',
                banana_canela: 'cardapio.html#sobremesas-doces',
                pacoca: 'cardapio.html#sobremesas-doces',
                prestigio: 'cardapio.html#sobremesas-doces',
                // Paraíso Gelado
                oreo: 'cardapio.html#paraiso-gelado',
                ninho: 'cardapio.html#paraiso-gelado',
                glaciar_frutas: 'cardapio.html#paraiso-gelado',
                pinguim_imperial: 'cardapio.html#paraiso-gelado',
                avalanche_ovomaltine: 'cardapio.html#paraiso-gelado',
                alasca_tostado: 'cardapio.html#paraiso-gelado'
            };
            lastProductPage = cardapioSections[saborSelecionado] || 'cardapio.html';
        } else if (!productBackPaths[saborSelecionado] && document.referrer) {
            try {
                lastProductPage = new URL(document.referrer).pathname.split('/').pop() || 'main.html';
            } catch (error) {
                lastProductPage = 'main.html';
            }
        }
        localStorage.setItem('lastProductPage', lastProductPage);

        // Redireciona para o carrinho após 1 segundo
        setTimeout(() => {
            btnAdicionarCarrinho.innerText = textoOriginal;
            btnAdicionarCarrinho.style.backgroundColor = "";
            btnAdicionarCarrinho.disabled = false;
            window.location.href = 'carrinho.html';
        }, 1000);
    });
}

// ============================================
// DYNAMIC PRICING HELPERS FOR PRODUCT PAGE
// ============================================
function parsePreco(preco) {
    if (!preco) return 0;
    return parseFloat(preco.replace('R$', '').replace('.', '').replace(',', '.').trim()) || 0;
}

function formatPreco(value) {
    return 'R$ ' + value.toFixed(2).replace('.', ',');
}

function atualizarPrecoExibido() {
    if (!saborSelecionado || !cardapio[saborSelecionado]) return;
    const produto = cardapio[saborSelecionado];

    let precoBase = parsePreco(produto.preco);
    
    // Only apply adjustments if the item is a pizza (i.e. size/border selectors are visible)
    const selecoesPizza = document.getElementById('selecoes-pizza');
    if (selecoesPizza && selecoesPizza.style.display !== 'none') {
        const tamanhoEl = document.querySelector('input[name="tamanho"]:checked');
        const bordaEl = document.querySelector('input[name="borda"]:checked');
        
        let ajuste = 0;
        if (tamanhoEl) {
            if (tamanhoEl.value === 'pequena') ajuste -= 10;
            else if (tamanhoEl.value === 'grande') ajuste += 15;
        }
        if (bordaEl) {
            if (bordaEl.value === 'catupiry' || bordaEl.value === 'cheddar') ajuste += 8;
            else if (bordaEl.value === 'chocolate') ajuste += 10;
        }
        precoBase += ajuste;
    }

    const prodPrecoEl = document.getElementById('prod-preco');
    if (prodPrecoEl) {
        prodPrecoEl.innerText = formatPreco(precoBase);
    }
}

