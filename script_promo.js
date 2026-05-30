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
            previewHtml = '<div class="promo-slot-preview">';
            selecionados.forEach(function(item) {
                previewHtml += '<div class="promo-slot-preview-item">' +
                    '<img src="' + item.imagem + '" alt="' + item.titulo + '">' +
                    '<span>' + item.titulo + '</span>' +
                    '</div>';
            });
            previewHtml += '</div>';
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
            sel.forEach(function(item) {
                var descontoLabel = '';
                if (slot.desconto && slot.desconto > 0) {
                    descontoLabel = ' <span class="resumo-desconto">(-' + (slot.desconto * 100) + '%)</span>';
                }
                html += '<div class="promo-resumo-item">' +
                    '<span class="resumo-icon resumo-ok">OK</span>' +
                    '<span>' + item.titulo + descontoLabel + '</span>' +
                    '</div>';
            });
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
    if (!promoAtual.preco_dinamico) {
        return parsePreco(promoAtual.preco);
    }

    // Preco dinamico: soma os precos com descontos
    var total = 0;
    promoAtual.slots.forEach(function(slot, i) {
        var sel = slotSelecoes[i];
        var desconto = slot.desconto || 0;
        sel.forEach(function(item) {
            var p = parsePreco(item.preco);
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

    // Salva selecao
    slotSelecoes[modalSlotIndex] = modalSelecaoTemp.map(function(sabor) {
        var item = cardapio[sabor];
        return {
            sabor: sabor,
            titulo: item.titulo,
            preco: item.preco,
            imagem: item.imagem
        };
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
            slotSelecoes[i].forEach(function(item) {
                itensSelecionados.push({
                    sabor: item.sabor,
                    titulo: item.titulo,
                    preco: item.preco,
                    desconto: slot.desconto || 0
                });
            });
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
