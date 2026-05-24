// 1. Nosso "Banco de Dados" fictício com as informações de cada pizza
const cardapio = {
    // === PIZZAS TRADICIONAIS ===
    calabresa: {
        titulo: "Pizza de Calabresa",
        preco: "R$ 62,00",
        descricao: "Molho de tomate especial da casa, muçarela derretida, calabresa fatiada de primeira qualidade, cebola fresca, orégano e azeitonas pretas sobre nossa massa artesanal.",
        imagem: "images/cardapio_pizza/pizza1.jpg"
    },
    margherita: {
        titulo: "Pizza Margherita",
        preco: "R$ 65,00",
        descricao: "Massa leve e crocante, molho de tomate natural, muçarela derretida, fatias de tomate fresco, folhas de manjericão fresco e um fio de azeite extravirgem.",
        imagem: "images/cardapio_pizza/pizza2.jpg"
    },
    frango_catupiry: {
        titulo: "Pizza de Frango c/ Catupiry",
        preco: "R$ 60,00",
        descricao: "Frango desfiado temperado com perfeição, coberto com o legítimo requeijão cremoso Catupiry e muçarela derretida sobre nossa massa especial.",
        imagem: "images/cardapio_pizza/pizza3.jpg"
    },
    queijo: {
        titulo: "Pizza de Queijo",
        preco: "R$ 64,00",
        descricao: "Combinação clássica de muçarela da casa perfeitamente derretida sobre nosso molho de tomate artesanal e orégano fresco.",
        imagem: "images/cardapio_pizza/pizza4.jpg"
    },
    portuguesa: {
        titulo: "Pizza Portuguesa",
        preco: "R$ 66,00",
        descricao: "Muçarela, presunto cozido fatiado, ovos cozidos, cebola fresca, ervilhas, pimentão e azeitonas pretas sobre nossa saborosa massa.",
        imagem: "images/cardapio_pizza/pizza5.jpg"
    },
    quatro_queijos: {
        titulo: "Pizza 4 Queijos",
        preco: "R$ 66,00",
        descricao: "Uma deliciosa combinação dos melhores queijos selecionados da casa: muçarela, provolone, parmesão ralado e o cremoso requeijão.",
        imagem: "images/cardapio_pizza/pizza6.jpg"
    },
    palmito: {
        titulo: "Pizza de Palmito",
        preco: "R$ 66,00",
        descricao: "Palmito macio em rodelas, muçarela derretida, molho de tomate fresco e orégano sob nossa massa tradicional.",
        imagem: "images/cardapio_pizza/pizza7.jpg"
    },
    presunto_queijo: {
        titulo: "Pizza de Presunto e Queijo",
        preco: "R$ 66,00",
        descricao: "Delicioso presunto fatiado combinado com muçarela de alta qualidade e molho de tomate especial da casa.",
        imagem: "images/cardapio_pizza/pizza8.jpg"
    },
    bacon: {
        titulo: "Pizza de Bacon",
        preco: "R$ 63,00",
        descricao: "Crocantes fatias de bacon selecionado sobre uma camada de muçarela derretida e molho de tomate artesanal.",
        imagem: "images/cardapio_pizza/pizza9.jpg"
    },
    pepperoni: {
        titulo: "Pizza de Pepperoni",
        preco: "R$ 63,00",
        descricao: "Fatias generosas de pepperoni condimentado e levemente picante, muçarela derretida e orégano sobre nossa massa artesanal.",
        imagem: "images/cardapio_pizza/pizza10.jpg"
    },
    moda_casa: {
        titulo: "Pizza à Moda da Casa",
        preco: "R$ 63,00",
        descricao: "Uma combinação especial dos ingredientes mais frescos da casa: muçarela, presunto, calabresa, cebola, ovos, pimentão e azeitona preta.",
        imagem: "images/cardapio_pizza/pizza11.jpg"
    },
    strogonoff: {
        titulo: "Pizza de Strogonoff",
        preco: "R$ 63,00",
        descricao: "Delicioso strogonoff de frango ou carne com molho cremoso, coberto com muçarela e finalizado com batata palha crocante.",
        imagem: "images/cardapio_pizza/pizza12.jpg"
    },

    // === PIZZAS VEGETARIANAS ===
    margherita_veggie: {
        titulo: "Pizza Margherita Vegetariana",
        preco: "R$ 70,00",
        descricao: "Massa leve e crocante, molho de tomate natural, generosa muçarela de búfala derretida, fatias de tomate fresco, folhas de manjericão e um fio de azeite extravirgem.",
        imagem: "images/cardapio_pizza/pizza2.jpg"
    },
    milho_catupiry: {
        titulo: "Pizza de Milho com Catupiry",
        preco: "R$ 70,00",
        descricao: "Milho verde selecionado coberto com o autêntico requeijão cremoso Catupiry e muçarela derretida sob nossa massa artesanal.",
        imagem: "images/cardapio_pizza/pizza14.jpg"
    },
    escarola: {
        titulo: "Pizza de Escarola",
        preco: "R$ 72,00",
        descricao: "Escarola refogada no alho, coberta com muçarela derretida e finalizada com um toque especial de bacon vegetal ou alho frito.",
        imagem: "images/cardapio_pizza/pizza15.jpg"
    },
    berinjela: {
        titulo: "Pizza de Berinjela",
        preco: "R$ 70,00",
        descricao: "Berinjela grelhada com azeite, alho e ervas, coberta com muçarela derretida e orégano sobre nossa deliciosa massa.",
        imagem: "images/cardapio_pizza/pizza16.jpg"
    },
    funghi: {
        titulo: "Pizza de Funghi",
        preco: "R$ 72,00",
        descricao: "Cogumelos paris e shimeji salteados na manteiga e alho, sob uma camada de muçarela derretida e cebolinha fresca.",
        imagem: "images/cardapio_pizza/pizza17.jpg"
    },
    vegetariana_completa: {
        titulo: "Pizza Vegetariana Completa",
        preco: "R$ 74,00",
        descricao: "Mix de vegetais selecionados: brócolis, milho, ervilha, palmito, cebola, tomate e pimentão, cobertos com muçarela derretida.",
        imagem: "images/cardapio_pizza/pizza18.jpg"
    },

    // === PIZZAS DOCES ===
    brigadeiro: {
        titulo: "Pizza de Brigadeiro",
        preco: "R$ 62,00",
        descricao: "Massa doce crocante coberta com generosa camada de brigadeiro artesanal cremoso e bastante granulado de chocolate belga.",
        imagem: "images/sobremesas/sobremesa1.jfif"
    },
    morango_chocolate: {
        titulo: "Pizza de Morango com Chocolate",
        preco: "R$ 65,00",
        descricao: "Creme de chocolate cremoso com morangos frescos fatiados, finalizada com calda ou raspas de chocolate ao leite.",
        imagem: "images/sobremesas/sobremesa2.jfif"
    },
    romeu_julieta: {
        titulo: "Pizza Romeu e Julieta",
        preco: "R$ 60,00",
        descricao: "A clássica e perfeita combinação de muçarela derretida com a tradicional goiabada cremosa da casa.",
        imagem: "images/sobremesas/sobremesa3.jfif"
    },
    banana_canela: {
        titulo: "Pizza de Banana com Canela",
        preco: "R$ 64,00",
        descricao: "Fatias de banana fresca com açúcar e canela salpicados, gratinadas com muçarela ou leite condensado.",
        imagem: "images/sobremesas/sobremesa4.jfif"
    },
    nutella_morango: {
        titulo: "Pizza de Nutella com Morango",
        preco: "R$ 66,00",
        descricao: "Generosa camada do autêntico creme de avelã Nutella, coberta com morangos frescos selecionados e açúcar de confeiteiro.",
        imagem: "images/sobremesas/sobremesa5.jfif"
    },
    prestigio: {
        titulo: "Pizza de Prestígio",
        preco: "R$ 63,00",
        descricao: "Deliciosa cobertura de chocolate ao leite cremoso polvilhada com coco ralado úmido de alta qualidade.",
        imagem: "images/sobremesas/sobremesa6.jfif"
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
    document.getElementById('prod-img').src = produto.imagem;
    document.getElementById('prod-img').alt = produto.titulo;
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
        const observacao = observacaoInput ? observacaoInput.value.trim() : "";

        // Objeto do produto a ser adicionado
        const itemCarrinho = {
            sabor: saborSelecionado,
            titulo: produto.titulo,
            preco: produto.preco,
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
            nutella_morango: 'menu_sobremesa.html#sobremesas-doces',
            prestigio: 'menu_sobremesa.html#sobremesas-doces',
            oreo: 'menu_sobremesa.html#paraiso-gelado',
            ninho: 'menu_sobremesa.html#paraiso-gelado',
            glaciar_frutas: 'menu_sobremesa.html#paraiso-gelado',
            pinguim_imperial: 'menu_sobremesa.html#paraiso-gelado',
            avalanche_ovomaltine: 'menu_sobremesa.html#paraiso-gelado',
            alasca_tostado: 'menu_sobremesa.html#paraiso-gelado'
        };

        let lastProductPage = productBackPaths[saborSelecionado] || 'main.html';
        if (!productBackPaths[saborSelecionado] && document.referrer) {
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