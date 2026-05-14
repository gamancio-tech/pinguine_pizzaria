# Explicação das alterações de estilo para `produto.html`

Este arquivo descreve linha a linha o que foi feito no CSS para criar o layout da página de produto.

- `body { min-height: 100vh; }`
  - Garante que o corpo da página ocupe ao menos a altura total da janela, evitando que o layout fique interrompido em páginas curtas.

- `.btn-voltar { display: inline-flex; align-items: center; margin: 1.5rem auto 0.5rem 1rem; padding: 0.75rem 1rem; border: none; border-radius: 0.75rem; cursor: pointer; }`
  - Define o botão de retorno como um elemento flexível alinhado verticalmente.
  - Ajusta espaçamentos externos e internos, remove borda padrão e aplica bordas arredondadas.
  - Adiciona cursor de botão para melhor usabilidade.

- `.btn-voltar a { display: inline-flex; align-items: center; text-decoration: none; color: inherit; }`
  - Faz o link interno do botão herdar o estilo e manter ícone/texto alinhados.
  - Remove o sublinhado padrão de links.

- `.btn-voltar img { width: 3rem; height: auto; }`
  - Ajusta o tamanho do ícone de retorno para ficar mais visível.

- `.produto { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; align-items: center; justify-items: stretch; max-width: 1000px; margin: 2rem auto 1rem auto; padding: 2rem; background-color: white; border-radius: 1.25rem; box-shadow: 0 16px 35px rgba(0, 0, 0, 0.12); }`
  - Cria o layout principal do produto como grid de duas colunas.
  - Define espaçamento entre as colunas, centraliza os itens e limita a largura máxima.
  - Adiciona margens externas, preenchimento interno, fundo branco, cantos arredondados e sombra suave.

- `.produto img { width: 100%; height: auto; max-width: 100%; border-radius: 1rem; object-fit: cover; }`
  - Faz a imagem ocupar toda a largura da coluna disponível.
  - Mantém a proporção original e aplica bordas arredondadas.

- `.produto h1 { font-size: 2.5rem; margin-bottom: 1rem; color: var(--cor4); }`
  - Define o tamanho e espaçamento do título do produto.
  - Usa cor escura consistente com o tema.

- `.produto p { font-size: 1.1rem; line-height: 1.7; color: #222; }`
  - Estiliza o texto descritivo do produto com boa legibilidade.

- `.produto .price { display: inline-block; margin-top: 1.5rem; font-size: 1.7rem; font-weight: 700; color: var(--cor9); }`
  - Destaca o preço como um elemento separado com maior tamanho e peso de fonte.

- `.descricao { display: flex; flex-direction: column; justify-content: center; gap: 1rem; max-width: 1000px; margin: 0 auto; padding: 2rem; background-color: white; border-radius: 1.25rem; box-shadow: 0 16px 35px rgba(0, 0, 0, 0.12); }`
  - Define a seção de descrição como um container em coluna.
  - Centraliza verticalmente seu conteúdo e aplica espaçamento interno e externo.
  - Aplica fundo branco, bordas arredondadas e sombra para destacá-la.

- `.descricao h2 { font-size: 2rem; margin-bottom: 0.5rem; color: var(--cor4); }`
  - Estiliza o título da seção de descrição.

- `.descricao p { font-size: 1.05rem; line-height: 1.7; color: #222; }`
  - Estiliza o texto das observações com tamanho legível.

- `.adicionar { display: flex; flex-wrap: wrap; justify-content: center; gap: 1rem; max-width: 1000px; margin: 1.5rem auto 3rem auto; padding: 0 1rem; }`
  - Cria o container de botões como flexbox centralizado.
  - Permite quebra de linha caso os botões não caibam na mesma linha.

- `.btn-adicionar { min-width: 140px; padding: 1rem 1.25rem; border: none; border-radius: 0.85rem; background-color: var(--cor3); color: white; font-size: 1rem; cursor: pointer; transition: transform 0.2s ease, background-color 0.2s ease; }`
  - Define o estilo dos botões de ação com tamanho confortável.
  - Remove borda padrão, aplica cor de fundo e transição suave.

- `.btn-adicionar:hover { transform: translateY(-2px); background-color: var(--cor2); }`
  - Adiciona efeito visual de hover para botões.

- `@media (max-width: 900px) { .produto { grid-template-columns: 1fr; } }`
  - Torna o layout responsivo, empilhando a imagem e o texto em dispositivos menores.

- `@media (max-width: 700px) { .descricao, .produto, .adicionar { padding: 1.5rem; } .produto h1, .descricao h2 { font-size: 2rem; } .btn-voltar { margin: 1rem auto 0.75rem auto; } }`
  - Ajusta o espaçamento e tamanho de texto para telas pequenas.
  - Centraliza o botão de voltar e reduz margens.
