// ============================================
// DADOS DO CARDAPIO (reutilizado de script_produto.js)
// ============================================
const cardapio = {
    calabresa: { titulo: "Pizza de Calabresa", preco: "R$ 62,00", imagem: "images/cardapio_pizza/pizza1.jpg" },
    margherita: { titulo: "Pizza Margherita", preco: "R$ 65,00", imagem: "images/cardapio_pizza/pizza2.jpg" },
    frango_catupiry: { titulo: "Pizza de Frango c/ Catupiry", preco: "R$ 60,00", imagem: "images/cardapio_pizza/pizza3.jpg" },
    queijo: { titulo: "Pizza de Queijo", preco: "R$ 64,00", imagem: "images/cardapio_pizza/pizza4.jpg" },
    portuguesa: { titulo: "Pizza Portuguesa", preco: "R$ 66,00", imagem: "images/cardapio_pizza/pizza5.jpg" },
    quatro_queijos: { titulo: "Pizza 4 Queijos", preco: "R$ 66,00", imagem: "images/cardapio_pizza/pizza6.jpg" },
    palmito: { titulo: "Pizza de Palmito", preco: "R$ 66,00", imagem: "images/cardapio_pizza/pizza7.jpg" },
    presunto_queijo: { titulo: "Pizza de Presunto e Queijo", preco: "R$ 66,00", imagem: "images/cardapio_pizza/pizza8.jpg" },
    bacon: { titulo: "Pizza de Bacon", preco: "R$ 63,00", imagem: "images/cardapio_pizza/pizza9.jpg" },
    pepperoni: { titulo: "Pizza de Pepperoni", preco: "R$ 63,00", imagem: "images/cardapio_pizza/pizza10.jpg" },
    moda_casa: { titulo: "Pizza a Moda da Casa", preco: "R$ 63,00", imagem: "images/cardapio_pizza/pizza11.jpg" },
    strogonoff: { titulo: "Pizza de Strogonoff", preco: "R$ 63,00", imagem: "images/cardapio_pizza/pizza12.jpg" },
    margherita_veggie: { titulo: "Pizza Margherita Vegetariana", preco: "R$ 70,00", imagem: "images/cardapio_pizza/pizza2.jpg" },
    milho_catupiry: { titulo: "Pizza de Milho com Catupiry", preco: "R$ 70,00", imagem: "images/cardapio_pizza/pizza14.jpg" },
    escarola: { titulo: "Pizza de Escarola", preco: "R$ 72,00", imagem: "images/cardapio_pizza/pizza15.jpg" },
    berinjela: { titulo: "Pizza de Berinjela", preco: "R$ 70,00", imagem: "images/cardapio_pizza/pizza16.jpg" },
    funghi: { titulo: "Pizza de Funghi", preco: "R$ 72,00", imagem: "images/cardapio_pizza/pizza17.jpg" },
    vegetariana_completa: { titulo: "Pizza Vegetariana Completa", preco: "R$ 74,00", imagem: "images/cardapio_pizza/pizza18.jpg" },
    coca_cola: { titulo: "Coca-Cola", preco: "R$ 11,50", imagem: "images/bebidas/bebida7.png" },
    guarana_antarctica: { titulo: "Guarana Antarctica", preco: "R$ 10,90", imagem: "images/bebidas/bebida8.png" },
    pepsi: { titulo: "Pepsi", preco: "R$ 10,90", imagem: "images/bebidas/bebida9.png" },
    sprite: { titulo: "Sprite", preco: "R$ 10,90", imagem: "images/bebidas/bebida10.jpg" }
};

// ============================================
// CATEGORIAS PARA FILTRO DO MINI CARDAPIO
// ============================================
const categorias = {
    pizzas: [
        "calabresa", "margherita", "frango_catupiry", "queijo",
        "portuguesa", "quatro_queijos", "palmito", "presunto_queijo",
        "bacon", "pepperoni", "moda_casa", "strogonoff",
        "margherita_veggie", "milho_catupiry", "escarola",
        "berinjela", "funghi", "vegetariana_completa"
    ],
    refrigerantes: ["coca_cola", "guarana_antarctica", "pepsi", "sprite"]
};

// ============================================
// DADOS DAS PROMOCOES
// ============================================
const promocoes = {
    combo_familia: {
        titulo: "Combo Familia",
        descricao: "Leve 2 pizzas grandes de qualquer sabor e ganhe 1 refrigerante de 2 litros gratis!",
        preco: "R$ 109,90",
        imagem: "images/promocao_familia.png",
        badge: "Familia",
        preco_dinamico: false,
        slots: [
            {
                tipo: "selecao",
                titulo: "Escolha suas 2 Pizzas Grandes",
                categoria: "pizzas",
                quantidade_exata: 2,
                permite_repetir: true
            }
        ],
        itens_fixos: [
            { titulo: "Refrigerante 2L", descricao: "Gratis no combo!", imagem: "images/bebidas/bebida7.png" }
        ]
    },
    casal_apaixonado: {
        titulo: "Pinguim Casal Apaixonado",
        descricao: "Uma pizza media com ate dois sabores a sua escolha e dois refrigerantes lata de 350ml por um preco especial.",
        preco: "R$ 79,90",
        imagem: "images/promocao_casal.png",
        badge: "Mais Pedido",
        preco_dinamico: false,
        slots: [
            {
                tipo: "selecao",
                titulo: "Escolha ate 2 Sabores para sua Pizza Media",
                categoria: "pizzas",
                quantidade_exata: 2,
                permite_repetir: false
            },
            {
                tipo: "selecao",
                titulo: "Escolha 2 Refrigerantes Lata 350ml",
                categoria: "refrigerantes",
                quantidade_exata: 2,
                permite_repetir: true
            }
        ],
        itens_fixos: []
    },
    festival_sabores: {
        titulo: "Festival de Sabores do Pinguim",
        descricao: "Leve tres pizzas grandes de sabores diferentes por um preco fixo e ganhe uma porcao de borda recheada de chocolate!",
        preco: "R$ 159,90",
        imagem: "images/promocao_festival_sabores.png",
        badge: "Destaque",
        preco_dinamico: false,
        slots: [
            {
                tipo: "selecao",
                titulo: "Escolha 3 Pizzas (sabores diferentes)",
                categoria: "pizzas",
                quantidade_exata: 3,
                permite_repetir: false
            }
        ],
        itens_fixos: [
            { titulo: "Borda Recheada de Chocolate", descricao: "Brinde especial!", imagem: "images/sobremesas/sobremesa1.jfif" }
        ]
    },
    quarta_gelada: {
        titulo: "Quarta-feira Gelada",
        descricao: "Peca uma pizza grande e a segunda (de igual ou menor valor) sai com 50% de desconto!",
        preco: "Preco calculado",
        imagem: "images/Promocao_do_dia.png",
        badge: "Desconto do Dia",
        preco_dinamico: true,
        slots: [
            {
                tipo: "selecao",
                titulo: "Escolha sua 1a Pizza (preco cheio)",
                categoria: "pizzas",
                quantidade_exata: 1,
                permite_repetir: false,
                label: "1a Pizza",
                desconto: 0
            },
            {
                tipo: "selecao",
                titulo: "Escolha sua 2a Pizza (50% OFF)",
                categoria: "pizzas",
                quantidade_exata: 1,
                permite_repetir: false,
                label: "2a Pizza (50% OFF)",
                desconto: 0.5
            }
        ],
        itens_fixos: []
    }
};

// ============================================
// ESTADO GLOBAL
// ============================================
let promoAtual = null;
let promoId = null;
let slotSelecoes = []; // Array de arrays: slotSelecoes[i] = [{sabor, titulo, preco, imagem}, ...]
let quantidade = 1;
let modalSlotIndex = -1; // qual slot esta sendo editado no modal
let modalSelecaoTemp = []; // selecao temporaria dentro do modal

// ============================================
// HELPERS
// ============================================
function parsePreco(preco) {
    if (!preco) return 0;
    return parseFloat(preco.replace('R$', '').replace('.', '').replace(',', '.').trim()) || 0;
}

function formatPreco(value) {
    return 'R$ ' + value.toFixed(2).replace('.', ',');
}

function getPromoDefaultSize(promoId) {
    if (promoId === 'casal_apaixonado') return 'media';
    return 'grande';
}

function getPizzaComboAdjustment(item, defaultSize) {
    var adjustment = 0;

    // Size adjustment relative to default combo size
    var sizePrice = { pequena: -10, media: 0, grande: 15 };
    var selectedSize = item.tamanho || defaultSize;
    adjustment += (sizePrice[selectedSize] - sizePrice[defaultSize]);

    // Border adjustment
    var borderPrice = { sem_borda: 0, catupiry: 8, cheddar: 8, chocolate: 10 };
    var selectedBorder = item.borda || 'sem_borda';
    adjustment += borderPrice[selectedBorder];

    return adjustment;
}


// ============================================
// INICIALIZACAO
// ============================================
(function init() {
    var urlParams = new URLSearchParams(window.location.search);
    promoId = urlParams.get('id');

    if (!promoId || !promocoes[promoId]) {
        document.getElementById('promo-titulo').innerText = "Promocao nao encontrada";
        document.getElementById('promo-descricao').innerText = "Volte a pagina inicial e selecione uma promocao valida.";
        return;
    }

    promoAtual = promocoes[promoId];

    // Inicializa selecoes vazias para cada slot
    slotSelecoes = promoAtual.slots.map(function() { return []; });

    renderHero();
    renderSlots();
    renderFixos();
    renderResumo();
    setupQuantidade();
    setupCarrinho();
})();

// ============================================
// RENDER: HERO
// ============================================
function renderHero() {
    document.getElementById('promo-img').src = promoAtual.imagem;
    document.getElementById('promo-img').alt = promoAtual.titulo;
    document.getElementById('promo-badge').innerText = promoAtual.badge;
    document.getElementById('promo-titulo').innerText = promoAtual.titulo;
    document.getElementById('promo-descricao').innerText = promoAtual.descricao;

    if (promoAtual.preco_dinamico) {
        document.getElementById('promo-preco').innerText = "Preco calculado na selecao";
    } else {
        document.getElementById('promo-preco').innerText = promoAtual.preco;
    }
}

// ============================================
// RENDER: SLOTS
// ============================================
function renderSlots() {
    var container = document.getElementById('promo-slots');
    container.innerHTML = '';

    promoAtual.slots.forEach(function(slot, index) {
        var slotEl = document.createElement('div');
        slotEl.className = 'promo-slot';
        slotEl.id = 'promo-slot-' + index;

        var label = slot.label || slot.titulo;
        var selecionados = slotSelecoes[index];
        var preenchido = selecionados.length === slot.quantidade_exata;

        var previewHtml = '';
        if (preenchido) {
            if (promoId === 'casal_apaixonado' && index === 0) {
                var flavor1 = selecionados[0].titulo.replace('Pizza de ', '').replace('Pizza ', '');
                var flavor2 = selecionados[1].titulo.replace('Pizza de ', '').replace('Pizza ', '');
                previewHtml = '<div class="promo-slot-preview">' +
                    '<div class="promo-slot-preview-item" style="width: 100%; max-width: 100%; display: flex; align-items: center; gap: 15px; background: #faf8f5; border: 2.5px dashed var(--cor6, #f39c12); padding: 0.8rem; border-radius: 12px; box-sizing: border-box;">' +
                        '<img src="' + selecionados[0].imagem + '" alt="Meio a Meio" style="width: 60px; height: 60px; border-radius: 50%; object-fit: cover; border: 2px solid white; box-shadow: 0 2px 5px rgba(0,0,0,0.15);">' +
                        '<div style="text-align: left;">' +
                            '<h4 style="margin: 0; color: var(--cor4); font-size: 1.05rem;">🍕 Pizza Meio a Meio Média</h4>' +
                            '<p style="margin: 3px 0 0 0; font-size: 0.88rem; color: #555;">Metade <b>' + flavor1 + '</b> + Metade <b>' + flavor2 + '</b></p>' +
                        '</div>' +
                    '</div>' +
                '</div>';
            } else {
                previewHtml = '<div class="promo-slot-preview">';
                selecionados.forEach(function(item) {
                    previewHtml += '<div class="promo-slot-preview-item">' +
                        '<img src="' + item.imagem + '" alt="' + item.titulo + '">' +
                        '<span>' + item.titulo + '</span>' +
                        '</div>';
                });
                previewHtml += '</div>';
            }
        
            if (slot.categoria === 'pizzas') {
                var defaultSize = getPromoDefaultSize(promoId);
                var sizePrice = { pequena: -10, media: 0, grande: 15 };
                var defaultPriceVal = sizePrice[defaultSize];

                var pqAdjustment = sizePrice.pequena - defaultPriceVal;
                var mdAdjustment = sizePrice.media - defaultPriceVal;
                var gdAdjustment = sizePrice.grande - defaultPriceVal;

                function getBadgeHtml(adjustment) {
                    if (adjustment < 0) {
                        return '<span class="opcao-preco-badge desconto">- ' + formatPreco(Math.abs(adjustment)) + '</span>';
                    } else if (adjustment > 0) {
                        return '<span class="opcao-preco-badge acrescimo">+ ' + formatPreco(adjustment) + '</span>';
                    } else {
                        return '<span class="opcao-preco-badge normal">padrão</span>';
                    }
                }

                var pqBadge = getBadgeHtml(pqAdjustment);
                var mdBadge = getBadgeHtml(mdAdjustment);
                var gdBadge = getBadgeHtml(gdAdjustment);

                var bordaBadges = {
                    sem_borda: '<span class="opcao-preco-badge normal">grátis</span>',
                    catupiry: '<span class="opcao-preco-badge acrescimo">+ R$ 8,00</span>',
                    cheddar: '<span class="opcao-preco-badge acrescimo">+ R$ 8,00</span>',
                    chocolate: '<span class="opcao-preco-badge acrescimo">+ R$ 10,00</span>'
                };

                previewHtml += '<div class="promo-customizacoes-container">';
                
                if (promoId === 'casal_apaixonado' && index === 0) {
                    // Lock size and render a single border selection for the entire half-and-half pizza
                    var firstItem = selecionados[0];
                    var isSemBorda = firstItem.borda === 'sem_borda' ? 'checked' : '';
                    var isChocolate = firstItem.borda === 'chocolate' ? 'checked' : '';
                    var isCatupiry = firstItem.borda === 'catupiry' ? 'checked' : '';
                    var isCheddar = firstItem.borda === 'cheddar' ? 'checked' : '';

                    var sweetPizzaKeys = ['brigadeiro', 'morango_chocolate', 'romeu_julieta', 'banana_canela', 'nutella_morango', 'prestigio'];
                    var isSweet = sweetPizzaKeys.indexOf(selecionados[0].sabor) > -1 || sweetPizzaKeys.indexOf(selecionados[1].sabor) > -1;

                    var bordaHtml = '';
                    if (isSweet) {
                        bordaHtml =
                            '<label class="opcao-card-promo">' +
                                '<input type="radio" name="borda-casal" value="sem_borda" ' + isSemBorda + ' data-slot="0" data-tipo="borda-casal">' +
                                '<span class="opcao-detalhe-promo">Sem Borda</span>' +
                                bordaBadges.sem_borda +
                            '</label>' +
                            '<label class="opcao-card-promo">' +
                                '<input type="radio" name="borda-casal" value="chocolate" ' + isChocolate + ' data-slot="0" data-tipo="borda-casal">' +
                                '<span class="opcao-detalhe-promo">Chocolate</span>' +
                                bordaBadges.chocolate +
                            '</label>';
                    } else {
                        bordaHtml =
                            '<label class="opcao-card-promo">' +
                                '<input type="radio" name="borda-casal" value="sem_borda" ' + isSemBorda + ' data-slot="0" data-tipo="borda-casal">' +
                                '<span class="opcao-detalhe-promo">Sem Borda</span>' +
                                bordaBadges.sem_borda +
                            '</label>' +
                            '<label class="opcao-card-promo">' +
                                '<input type="radio" name="borda-casal" value="catupiry" ' + isCatupiry + ' data-slot="0" data-tipo="borda-casal">' +
                                '<span class="opcao-detalhe-promo">Catupiry</span>' +
                                bordaBadges.catupiry +
                            '</label>' +
                            '<label class="opcao-card-promo">' +
                                '<input type="radio" name="borda-casal" value="cheddar" ' + isCheddar + ' data-slot="0" data-tipo="borda-casal">' +
                                '<span class="opcao-detalhe-promo">Cheddar</span>' +
                                bordaBadges.cheddar +
                            '</label>' +
                            '<label class="opcao-card-promo">' +
                                '<input type="radio" name="borda-casal" value="chocolate" ' + isChocolate + ' data-slot="0" data-tipo="borda-casal">' +
                                '<span class="opcao-detalhe-promo">Chocolate</span>' +
                                bordaBadges.chocolate +
                            '</label>';
                    }

                    previewHtml +=
                        '<div class="promo-pizza-customizacao" style="border: 2px solid var(--cor6, #f39c12); background: rgba(243, 156, 18, 0.03); border-radius: 12px; padding: 1rem;">' +
                            '<h4 class="customizacao-item-titulo" style="color: var(--cor4); font-size: 1.15rem; margin-top:0;">🍕 Customizar Pizza Meio a Meio</h4>' +
                            
                            '<div class="customizacao-secao">' +
                                '<span class="customizacao-subtitulo">Tamanho:</span>' +
                                '<div style="display: flex; gap: 0.5rem; align-items: center;">' +
                                    '<span class="opcao-preco-badge normal" style="margin-left: 0; font-size: 0.9rem; padding: 0.35rem 0.8rem; border-radius: 8px; border: 1.5px solid #dcdde1; background: #f5f6fa; color: #2f3640;">' +
                                        'Média (Incluso no Combo)' +
                                    '</span>' +
                                '</div>' +
                            '</div>' +
                            
                            '<div class="customizacao-secao">' +
                                '<span class="customizacao-subtitulo">Borda Recheada (para toda a pizza):</span>' +
                                '<div class="opcoes-flex-promo">' +
                                    bordaHtml +
                                '</div>' +
                            '</div>' +
                        '</div>';
                } else {
                    selecionados.forEach(function(item, itemIdx) {
                        var isPequena = item.tamanho === 'pequena' ? 'checked' : '';
                        var isMedia = item.tamanho === 'media' ? 'checked' : '';
                        var isGrande = item.tamanho === 'grande' ? 'checked' : '';

                        var isSemBorda = item.borda === 'sem_borda' ? 'checked' : '';
                        var isChocolate = item.borda === 'chocolate' ? 'checked' : '';

                        var sweetPizzaKeys = ['brigadeiro', 'morango_chocolate', 'romeu_julieta', 'banana_canela', 'nutella_morango', 'prestigio'];
                        var isSweet = sweetPizzaKeys.indexOf(item.sabor) > -1;

                        var bordaHtml = '';
                        if (isSweet) {
                            bordaHtml =
                                '<label class="opcao-card-promo">' +
                                    '<input type="radio" name="borda-' + index + '-' + itemIdx + '" value="sem_borda" ' + isSemBorda + ' data-slot="' + index + '" data-item="' + itemIdx + '" data-tipo="borda">' +
                                    '<span class="opcao-detalhe-promo">Sem Borda</span>' +
                                    bordaBadges.sem_borda +
                                '</label>' +
                                '<label class="opcao-card-promo">' +
                                    '<input type="radio" name="borda-' + index + '-' + itemIdx + '" value="chocolate" ' + isChocolate + ' data-slot="' + index + '" data-item="' + itemIdx + '" data-tipo="borda">' +
                                    '<span class="opcao-detalhe-promo">Chocolate</span>' +
                                    bordaBadges.chocolate +
                                '</label>';
                        } else {
                            var isCatupiry = item.borda === 'catupiry' ? 'checked' : '';
                            var isCheddar = item.borda === 'cheddar' ? 'checked' : '';
                            bordaHtml =
                                '<label class="opcao-card-promo">' +
                                    '<input type="radio" name="borda-' + index + '-' + itemIdx + '" value="sem_borda" ' + isSemBorda + ' data-slot="' + index + '" data-item="' + itemIdx + '" data-tipo="borda">' +
                                    '<span class="opcao-detalhe-promo">Sem Borda</span>' +
                                    bordaBadges.sem_borda +
                                '</label>' +
                                '<label class="opcao-card-promo">' +
                                    '<input type="radio" name="borda-' + index + '-' + itemIdx + '" value="catupiry" ' + isCatupiry + ' data-slot="' + index + '" data-item="' + itemIdx + '" data-tipo="borda">' +
                                    '<span class="opcao-detalhe-promo">Catupiry</span>' +
                                    bordaBadges.catupiry +
                                '</label>' +
                                '<label class="opcao-card-promo">' +
                                    '<input type="radio" name="borda-' + index + '-' + itemIdx + '" value="cheddar" ' + isCheddar + ' data-slot="' + index + '" data-item="' + itemIdx + '" data-tipo="borda">' +
                                    '<span class="opcao-detalhe-promo">Cheddar</span>' +
                                    bordaBadges.cheddar +
                                '</label>' +
                                '<label class="opcao-card-promo">' +
                                    '<input type="radio" name="borda-' + index + '-' + itemIdx + '" value="chocolate" ' + isChocolate + ' data-slot="' + index + '" data-item="' + itemIdx + '" data-tipo="borda">' +
                                    '<span class="opcao-detalhe-promo">Chocolate</span>' +
                                    bordaBadges.chocolate +
                                '</label>';
                        }

                        // Differentiate label when there are multiple pizzas (e.g. Pizza 1, Pizza 2) vs just 1
                        var pizzaLabel = selecionados.length > 1 ? ' (' + (itemIdx + 1) + 'ª Pizza)' : '';

                        previewHtml +=
                            '<div class="promo-pizza-customizacao">' +
                                '<h4 class="customizacao-item-titulo">Customizar: ' + item.titulo + pizzaLabel + '</h4>' +
                                
                                '<div class="customizacao-secao">' +
                                    '<span class="customizacao-subtitulo">Tamanho:</span>' +
                                    '<div style="display: flex; gap: 0.5rem; align-items: center;">' +
                                        '<span class="opcao-preco-badge normal" style="margin-left: 0; font-size: 0.9rem; padding: 0.35rem 0.8rem; border-radius: 8px; border: 1.5px solid #dcdde1; background: #f5f6fa; color: #2f3640;">' +
                                            (defaultSize === 'grande' ? 'Grande' : (defaultSize === 'media' ? 'Média' : 'Pequena')) + ' (Incluso no Combo)' +
                                        '</span>' +
                                    '</div>' +
                                '</div>' +
                                
                                '<div class="customizacao-secao">' +
                                    '<span class="customizacao-subtitulo">Borda Recheada:</span>' +
                                    '<div class="opcoes-flex-promo">' +
                                        bordaHtml +
                                    '</div>' +
                                '</div>' +
                            '</div>';
                    });
                }
                previewHtml += '</div>';
            }
        }

        slotEl.innerHTML =
            '<div class="promo-slot-header">' +
                '<div class="promo-slot-info">' +
                    '<span class="promo-slot-numero">Passo ' + (index + 1) + '</span>' +
                    '<h3>' + label + '</h3>' +
                '</div>' +
                '<span class="promo-slot-status ' + (preenchido ? 'status-ok' : '') + '">' +
                    (preenchido ? 'Selecionado' : 'Pendente') +
                '</span>' +
            '</div>' +
            previewHtml +
            '<button class="promo-slot-btn ' + (preenchido ? 'promo-slot-btn-alterar' : '') + '" type="button" data-slot="' + index + '">' +
                (preenchido ? 'Alterar Selecao' : 'Escolher Itens') +
            '</button>';

        container.appendChild(slotEl);
    });

    // Event listeners para botoes de slot
    var btns = container.querySelectorAll('.promo-slot-btn');
    btns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            var idx = parseInt(this.getAttribute('data-slot'), 10);
            abrirModal(idx);
        });
    });

    // Event listeners para as customizações de pizza
    var radios = container.querySelectorAll('.opcoes-flex-promo input[type="radio"]');
    radios.forEach(function(radio) {
        radio.addEventListener('change', function() {
            var slotIdx = parseInt(this.getAttribute('data-slot'), 10);
            var itemIdx = parseInt(this.getAttribute('data-item'), 10);
            var tipo = this.getAttribute('data-tipo'); // "tamanho" ou "borda"
            var valor = this.value;

            if (tipo === 'borda-casal') {
                if (slotSelecoes[0]) {
                    slotSelecoes[0].forEach(function(item) {
                        item.borda = valor;
                    });
                    renderResumo();
                }
                return;
            }

            if (slotSelecoes[slotIdx] && slotSelecoes[slotIdx][itemIdx]) {
                slotSelecoes[slotIdx][itemIdx][tipo] = valor;
                renderResumo();
            }
        });
    });
}

// ============================================
// RENDER: ITENS FIXOS
// ============================================
function renderFixos() {
    if (!promoAtual.itens_fixos || promoAtual.itens_fixos.length === 0) {
        document.getElementById('promo-fixos-container').style.display = 'none';
        return;
    }

    document.getElementById('promo-fixos-container').style.display = 'block';
    var container = document.getElementById('promo-fixos');
    container.innerHTML = '';

    promoAtual.itens_fixos.forEach(function(item) {
        var el = document.createElement('div');
        el.className = 'promo-item-fixo';
        el.innerHTML =
            '<img src="' + item.imagem + '" alt="' + item.titulo + '">' +
            '<div class="promo-item-fixo-info">' +
                '<h4>' + item.titulo + '</h4>' +
                '<p>' + item.descricao + '</p>' +
                '<span class="promo-fixo-badge">Incluso</span>' +
            '</div>';
        container.appendChild(el);
    });
}

// ============================================
// RENDER: RESUMO
// ============================================
function renderResumo() {
    var lista = document.getElementById('promo-resumo-lista');
    var todosPreenchidos = true;

    var html = '';
    promoAtual.slots.forEach(function(slot, i) {
        var sel = slotSelecoes[i];
        if (sel.length < slot.quantidade_exata) {
            todosPreenchidos = false;
            html += '<div class="promo-resumo-item promo-resumo-pendente">' +
                '<span class="resumo-icon">?</span>' +
                '<span>' + (slot.label || slot.titulo) + ' - Pendente</span>' +
                '</div>';
        } else {
            if (promoId === 'casal_apaixonado' && i === 0) {
                // Display as a single Meio a Meio pizza in the summary
                var bordaLabel = { sem_borda: 'Sem Borda', catupiry: 'Borda Catupiry', cheddar: 'Borda Cheddar', chocolate: 'Borda Chocolate' };
                var border = sel[0].borda || 'sem_borda';
                var flavor1 = sel[0].titulo.replace('Pizza de ', '').replace('Pizza ', '');
                var flavor2 = sel[1].titulo.replace('Pizza de ', '').replace('Pizza ', '');
                
                html += '<div class="promo-resumo-item">' +
                    '<span class="resumo-icon resumo-ok">OK</span>' +
                    '<span>Pizza Meio a Meio Média (Metade ' + flavor1 + ' / Metade ' + flavor2 + ') <span style="font-size:0.85rem; color:#888;">(' + bordaLabel[border] + ')</span></span>' +
                    '</div>';
            } else {
                sel.forEach(function(item) {
                    var descontoLabel = '';
                    if (slot.desconto && slot.desconto > 0) {
                        descontoLabel = ' <span class="resumo-desconto">(-' + (slot.desconto * 100) + '%)</span>';
                    }

                    var detalhe = '';
                    if (slot.categoria === 'pizzas') {
                        var tamanhoLabel = { pequena: 'Pequena', media: 'Média', grande: 'Grande' };
                        var bordaLabel = { sem_borda: 'Sem Borda', catupiry: 'Borda Catupiry', cheddar: 'Borda Cheddar', chocolate: 'Borda Chocolate' };
                        var size = item.tamanho || getPromoDefaultSize(promoId);
                        var border = item.borda || 'sem_borda';
                        detalhe = ' <span style="font-size:0.85rem; color:#888;">(' + tamanhoLabel[size] + ', ' + bordaLabel[border] + ')</span>';
                    }

                    html += '<div class="promo-resumo-item">' +
                        '<span class="resumo-icon resumo-ok">OK</span>' +
                        '<span>' + item.titulo + detalhe + descontoLabel + '</span>' +
                        '</div>';
                });
            }
        }
    });

    // Itens fixos no resumo
    if (promoAtual.itens_fixos) {
        promoAtual.itens_fixos.forEach(function(item) {
            html += '<div class="promo-resumo-item">' +
                '<span class="resumo-icon resumo-fixo">+</span>' +
                '<span>' + item.titulo + ' <span class="resumo-gratis">(Gratis)</span></span>' +
                '</div>';
        });
    }

    if (html === '') {
        html = '<p class="promo-resumo-vazio">Selecione os itens acima para montar seu combo.</p>';
    }

    lista.innerHTML = html;

    // Calcula preco
    var precoFinal = calcularPreco();
    document.getElementById('promo-resumo-preco').innerText = formatPreco(precoFinal);

    // Habilita/desabilita botao
    var btnCarrinho = document.getElementById('btn-promo-carrinho');
    if (todosPreenchidos) {
        btnCarrinho.disabled = false;
        btnCarrinho.innerText = 'Adicionar Combo ao Carrinho';
    } else {
        btnCarrinho.disabled = true;
        btnCarrinho.innerText = 'Selecione todos os itens';
    }
}

function calcularPreco() {
    var defaultSize = getPromoDefaultSize(promoId);
    var total = 0;
    if (!promoAtual.preco_dinamico) {
        total = parsePreco(promoAtual.preco);
        promoAtual.slots.forEach(function(slot, i) {
            if (slot.categoria === 'pizzas') {
                if (promoId === 'casal_apaixonado' && i === 0) {
                    // For Casal Apaixonado, only sum the adjustment once for the single Meio a Meio pizza!
                    if (slotSelecoes[i].length > 0) {
                        total += getPizzaComboAdjustment(slotSelecoes[i][0], defaultSize);
                    }
                } else {
                    slotSelecoes[i].forEach(function(item) {
                        total += getPizzaComboAdjustment(item, defaultSize);
                    });
                }
            }
        });
        return total;
    }

    // Preco dinamico: soma os precos com descontos
    promoAtual.slots.forEach(function(slot, i) {
        var sel = slotSelecoes[i];
        var desconto = slot.desconto || 0;
        sel.forEach(function(item) {
            var p = parsePreco(item.preco);
            if (slot.categoria === 'pizzas') {
                var sizePrice = { pequena: -10, media: 0, grande: 15 };
                var borderPrice = { sem_borda: 0, catupiry: 8, cheddar: 8, chocolate: 10 };
                var size = item.tamanho || defaultSize;
                var border = item.borda || 'sem_borda';
                p += sizePrice[size] + borderPrice[border];
            }
            total += p * (1 - desconto);
        });
    });
    return total;
}

// ============================================
// MODAL: ABRIR
// ============================================
function abrirModal(slotIndex) {
    modalSlotIndex = slotIndex;
    var slot = promoAtual.slots[slotIndex];
    var itensCategoria = categorias[slot.categoria] || [];

    // Copia selecao atual como temporaria
    modalSelecaoTemp = slotSelecoes[slotIndex].map(function(item) { return item.sabor; });

    // Titulo
    document.getElementById('modal-titulo').innerText = slot.titulo;

    // Renderiza grid
    var grid = document.getElementById('modal-grid');
    grid.innerHTML = '';

    itensCategoria.forEach(function(sabor) {
        var item = cardapio[sabor];
        if (!item) return;

        var selecionado = modalSelecaoTemp.indexOf(sabor) > -1;

        var card = document.createElement('div');
        card.className = 'modal-item' + (selecionado ? ' modal-item-selecionado' : '');
        card.setAttribute('data-sabor', sabor);

        card.innerHTML =
            '<img src="' + item.imagem + '" alt="' + item.titulo + '">' +
            '<div class="modal-item-info">' +
                '<h4>' + item.titulo + '</h4>' +
                '<span class="modal-item-preco">' + item.preco + '</span>' +
            '</div>' +
            '<div class="modal-item-check">OK</div>';

        card.addEventListener('click', function() {
            toggleModalItem(sabor, slot);
        });

        grid.appendChild(card);
    });

    atualizarModalEstado(slot);

    // Mostra modal
    var modal = document.getElementById('modal-mini-cardapio');
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';

    // Animacao de entrada
    setTimeout(function() {
        modal.classList.add('modal-ativo');
    }, 10);
}

// ============================================
// MODAL: TOGGLE ITEM
// ============================================
function toggleModalItem(sabor, slot) {
    var idx = modalSelecaoTemp.indexOf(sabor);

    if (idx > -1) {
        // Deselecionar
        if (!slot.permite_repetir) {
            modalSelecaoTemp.splice(idx, 1);
        } else {
            modalSelecaoTemp.splice(idx, 1);
        }
    } else {
        // Selecionar (se nao atingiu o limite)
        if (modalSelecaoTemp.length >= slot.quantidade_exata) {
            return; // Limite atingido
        }
        if (!slot.permite_repetir && modalSelecaoTemp.indexOf(sabor) > -1) {
            return; // Nao pode repetir
        }
        modalSelecaoTemp.push(sabor);
    }

    atualizarModalEstado(slot);
}

// ============================================
// MODAL: ATUALIZAR ESTADO VISUAL
// ============================================
function atualizarModalEstado(slot) {
    var grid = document.getElementById('modal-grid');
    var cards = grid.querySelectorAll('.modal-item');
    var limiteAtingido = modalSelecaoTemp.length >= slot.quantidade_exata;

    cards.forEach(function(card) {
        var sabor = card.getAttribute('data-sabor');
        var selecionado = modalSelecaoTemp.indexOf(sabor) > -1;

        card.classList.remove('modal-item-selecionado', 'modal-item-desabilitado');

        if (selecionado) {
            card.classList.add('modal-item-selecionado');
        } else if (limiteAtingido) {
            card.classList.add('modal-item-desabilitado');
        }
    });

    // Contador
    document.getElementById('modal-contador').innerText =
        modalSelecaoTemp.length + '/' + slot.quantidade_exata + ' selecionados';

    // Botao confirmar
    var btnConfirmar = document.getElementById('modal-confirmar');
    if (modalSelecaoTemp.length === slot.quantidade_exata) {
        btnConfirmar.disabled = false;
        btnConfirmar.classList.add('modal-btn-ativo');
    } else {
        btnConfirmar.disabled = true;
        btnConfirmar.classList.remove('modal-btn-ativo');
    }
}

// ============================================
// MODAL: CONFIRMAR
// ============================================
document.getElementById('modal-confirmar').addEventListener('click', function() {
    if (modalSlotIndex < 0) return;

    var defaultSize = getPromoDefaultSize(promoId);
    var slot = promoAtual.slots[modalSlotIndex];

    // Salva selecao
    slotSelecoes[modalSlotIndex] = modalSelecaoTemp.map(function(sabor) {
        var item = cardapio[sabor];
        var obj = {
            sabor: sabor,
            titulo: item.titulo,
            preco: item.preco,
            imagem: item.imagem
        };
        if (slot.categoria === 'pizzas') {
            obj.tamanho = defaultSize;
            obj.borda = 'sem_borda';
        }
        return obj;
    });

    fecharModal();
    renderSlots();
    renderResumo();
});

// ============================================
// MODAL: FECHAR
// ============================================
function fecharModal() {
    var modal = document.getElementById('modal-mini-cardapio');
    modal.classList.remove('modal-ativo');
    setTimeout(function() {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }, 300);
    modalSlotIndex = -1;
    modalSelecaoTemp = [];
}

document.getElementById('modal-fechar').addEventListener('click', fecharModal);

document.getElementById('modal-mini-cardapio').addEventListener('click', function(e) {
    if (e.target === this) {
        fecharModal();
    }
});

// ============================================
// QUANTIDADE
// ============================================
function setupQuantidade() {
    var qntdEl = document.getElementById('promo-qntd-valor');
    var btnMenos = document.getElementById('promo-btn-menos');
    var btnMais = document.getElementById('promo-btn-mais');

    btnMenos.addEventListener('click', function() {
        if (quantidade > 1) {
            quantidade--;
            qntdEl.innerText = quantidade;
        }
    });

    btnMais.addEventListener('click', function() {
        if (quantidade < 20) {
            quantidade++;
            qntdEl.innerText = quantidade;
        }
    });

    qntdEl.addEventListener('click', function() {
        var input = prompt("Digite a quantidade desejada (maximo 10):", quantidade);
        if (input !== null) {
            var num = parseInt(input, 10);
            if (!isNaN(num) && num >= 1 && num <= 10) {
                quantidade = num;
                qntdEl.innerText = quantidade;
            } else {
                alert("Por favor, digite um numero inteiro de 1 a 10.");
            }
        }
    });
}

// ============================================
// CARRINHO
// ============================================
function setupCarrinho() {
    var btn = document.getElementById('btn-promo-carrinho');

    btn.addEventListener('click', function() {
        if (!promoAtual || btn.disabled) return;

        var itensSelecionados = [];
        promoAtual.slots.forEach(function(slot, i) {
            if (promoId === 'casal_apaixonado' && i === 0) {
                // Combine the two pizza halves into a single item!
                var sel = slotSelecoes[i];
                if (sel.length === 2) {
                    var bordaLabel = { sem_borda: 'Sem Borda', catupiry: 'Borda Catupiry', cheddar: 'Borda Cheddar', chocolate: 'Borda Chocolate' };
                    var border = sel[0].borda || 'sem_borda';
                    var flavor1 = sel[0].titulo.replace('Pizza de ', '').replace('Pizza ', '');
                    var flavor2 = sel[1].titulo.replace('Pizza de ', '').replace('Pizza ', '');
                    
                    itensSelecionados.push({
                        sabor: 'casal_meio_meio',
                        titulo: 'Pizza Média Meio a Meio (Metade ' + flavor1 + ' / Metade ' + flavor2 + ') (' + bordaLabel[border] + ')',
                        preco: 'R$ 0,00',
                        desconto: 0
                    });
                }
            } else {
                slotSelecoes[i].forEach(function(item) {
                    var finalTitulo = item.titulo;
                    if (slot.categoria === 'pizzas') {
                        var tamanhoLabel = { pequena: 'Pequena', media: 'Média', grande: 'Grande' };
                        var bordaLabel = { sem_borda: 'Sem Borda', catupiry: 'Borda Catupiry', cheddar: 'Borda Cheddar', chocolate: 'Borda Chocolate' };
                        var size = item.tamanho || getPromoDefaultSize(promoId);
                        var border = item.borda || 'sem_borda';
                        finalTitulo += ' (' + tamanhoLabel[size] + ', ' + bordaLabel[border] + ')';
                    }

                    itensSelecionados.push({
                        sabor: item.sabor,
                        titulo: finalTitulo,
                        preco: item.preco,
                        desconto: slot.desconto || 0
                    });
                });
            }
        });

        var precoTotal = calcularPreco();

        var itemCarrinho = {
            tipo: "combo",
            promoId: promoId,
            titulo: promoAtual.titulo,
            preco: formatPreco(precoTotal),
            imagem: promoAtual.imagem,
            quantidade: quantidade,
            observacao: "",
            itens_selecionados: itensSelecionados,
            itens_fixos: (promoAtual.itens_fixos || []).map(function(f) {
                return { titulo: f.titulo };
            })
        };

        var carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
        carrinho.push(itemCarrinho);
        localStorage.setItem('carrinho', JSON.stringify(carrinho));
        localStorage.setItem('lastProductPage', 'main.html#promocoes');

        // Feedback
        var textoOriginal = btn.innerText;
        btn.innerText = "Adicionado!";
        btn.style.backgroundColor = "var(--cor2)";
        btn.disabled = true;

        setTimeout(function() {
            btn.innerText = textoOriginal;
            btn.style.backgroundColor = "";
            btn.disabled = false;
            window.location.href = 'carrinho.html';
        }, 1000);
    });
}
