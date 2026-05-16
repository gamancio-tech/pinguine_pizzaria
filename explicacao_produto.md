# Explicação das alterações de estilo para `produto.html`

Este arquivo descreve as mudanças aplicadas em `styles.css` para o layout da página de produto.

- `body { min-height: 100vh; }`
  - Garante que o corpo da página ocupe pelo menos a altura da janela, evitando layouts curtos.

- `.btn-voltar { display: inline-flex; align-items: center; margin: 1.5rem auto 0.5rem 1rem; padding: 0.75rem 1rem; border: none; border-radius: 0.75rem; cursor: pointer; }`
  - Botão de retorno estilizado como `inline-flex`, com espaçamento e bordas arredondadas; o link interno herda o estilo e remove sublinhado.

- `.btn-voltar img { width: 3rem; height: auto; }`
  - Ícone do botão aumentado para melhor visibilidade.

- `.produto { display: grid; grid-template-columns: 1.1fr 1fr; grid-template-rows: 1.1fr 1fr 0.2fr 0.6fr; gap: 2rem; max-width: 1200px; margin: 2rem auto 1rem auto; padding: 2rem; background-color: #fff; border-radius: 1.25rem; box-shadow: 0 16px 35px rgba(0,0,0,0.12); }`
  - Layout principal em `grid` com duas colunas desiguais (`1.1fr` / `1fr`) e várias linhas definidas para posicionamento preciso dos elementos.
  - Limita a largura máxima a 1200px, aplica padding, fundo branco, cantos arredondados e sombra suave.

- `.produto img { display: flex; width: 100%; height: auto; max-width: 100%; border-radius: 1rem; margin: auto 0; grid-row: span 3; object-fit: cover; }`
  - A imagem ocupa completamente a coluna disponível, mantém proporção, tem bordas arredondadas e é expandida verticalmente ocupando três linhas da grade (`grid-row: span 3`).

- `.produto h1 { font-size: 2.5rem; color: var(--cor4); text-align: center; margin-top: 1rem; }`
  - Título principal grande, cor consistente com o tema e alinhado ao centro.

- `.produto h2 { font-size: 1.8rem; margin: -6rem 0 0 0; text-align: justify; }`
  - Subtítulo posicionado com margem negativa para ajuste fino sobre a grade.

- `.produto p { font-size: 1.3rem; line-height: 1.7; color: #222; grid-column: 2; margin: -14.5rem 0; text-align: left; }`
  - Parágrafo descritivo formatado para a segunda coluna da grade; margens negativas usadas para posicionamento visual dentro do layout.

- `.produto .price { display: inline-block; margin-left: 3rem; font-size: 1.7rem; font-weight: 700; color: var(--cor9); grid-row: 4; }`
  - Preço destacado com maior peso e tamanho, posicionado na última linha da grade.

- `.observacao { margin-top: -3rem; display: flex; flex-direction: column; gap: 0.5rem; }`
  - Seção de observações/descrição usando `flex` em coluna; margem negativa para alinhamento fino com o bloco principal.

- `.observacao insert { margin: 0.7rem 0 0 0; font-size: 1.4em; padding: 1rem 1rem 8rem 0.6rem; border: 0.0625rem solid var(--cor9); border-radius: 0.75rem; color: rgba(0,0,0,0.7); opacity: 0.85; }`
  - Estilo aplicado a um bloco de texto (tag `insert` usada no HTML atual) com borda, padding e visual de cartão para observações.

- `.adicionar { display: flex; flex-direction: row; justify-content: center; gap: 0.7rem; max-width: 1200px; margin: auto; padding: 1rem 2rem; background-color: #fff; border-radius: 1.25rem; box-shadow: 0 16px 35px rgba(0,0,0,0.12); }`
  - Container dos botões em `flex` linha, centralizado, com espaçamento reduzido e aparência de cartão; largura máxima de 1200px.

- `.btn-adicionar { min-width: 4rem; padding: 1rem 1.3rem; border: none; border-radius: 0.85rem; background-color: var(--cor3); color: white; font-size: 1rem; cursor: pointer; transition: transform 0.2s ease, background-color 0.2s ease; }`
  - Botões de ação com tamanho mínimo reduzido (4rem), cantos arredondados, cor do tema e transição suave no hover.

- `.btn-adicionar:hover { transform: translateY(-2px); background-color: var(--cor2); }`
  - Efeito de elevação e mudança de cor no hover.

- `.btn-grande { min-width: 200px; width: 70%; margin-left: -1rem; }`
  - Variante maior do botão para ações principais (ex.: confirmar/Adicionar em grande escala).

- `.btn-qntd { min-width: 5.8rem; margin-left: 0.6rem; margin-right: 0.9rem; }`
  - Botão para ajuste de quantidade com largura mínima definida.

Observações gerais:

- O layout atual usa posicionamentos com margens negativas e definição de múltiplas linhas na grade para ajustar visualmente título, descrição e preço em relação à imagem.
- Alguns seletores e regras descritos anteriormente (`.descricao` e media queries específicas) foram substituídos ou removidos; o arquivo `styles.css` presente no projeto contém as regras ativas mostradas acima.

Se quiser, posso também:
- ajustar o HTML de `produto.html` para evitar margens negativas e tornar o layout mais semântico;
- ou adicionar media queries responsivas conforme necessário.

