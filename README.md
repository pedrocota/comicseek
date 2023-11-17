<p align="center">
   <img src="resources/imagens/comicseek.svg" alt="Logo">
</p>
Este projeto permite que os usuários pesquisem seus personagens de quadrinhos favoritos e obtenham informações detalhadas sobre eles, incluindo vídeos informativos. Foram utilizadas as APIs do Comicvine, para receber informações e pesquisar sobre o personagem, e a do youtube para exibição de vídeos sobre o mesmo.

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript
- jQuery 3.6.4
- Bootstrap 4.0.0

## Como Usar

1. Abra o arquivo `index.html` em seu navegador.
2. Digite o nome do personagem que você está procurando na barra de pesquisa.
3. Clique no botão de pesquisa para ver os resultados.
4. Clique em qualquer um dos resultados nos resultados para ver mais detalhes.

## Estilos

O projeto utiliza CSS3 para estilização. Aqui estão alguns dos estilos principais:

- `.card`: Estilo para os cartões de exibição do personagem.
- `.busca`: Estilo para a barra de pesquisa.
- `#coluna`: Estilo para a coluna de exibição dos resultados.
- `.descricaoPersonagem`: Estilo para a descrição do personagem.
- `.carousel-item`: Estilo para os itens do carrossel de vídeos.

## Responsividade

O projeto é responsivo e se adapta a diferentes tamanhos de tela. Isso é feito principalmente através da regra de mídia `@media screen and (max-width: 600px)`.

## JavaScript

O arquivo `resultados.js` contém a lógica principal do aplicativo. Ele usa a função `exibePersonagem` para exibir os personagens pesquisados. Esta função recupera os dados do personagem do armazenamento local, cria um cartão para cada personagem e preenche as informações no cartão.

O arquivo `search.js` contém a lógica para a página de pesquisa. Ele usa a função `recuperaDados` para recuperar os dados do personagem da API Comicvine. Os dados recuperados são armazenados localmente e o usuário é redirecionado para a página de resultados.

O arquivo `personagem.js` contém a lógica para a página de detalhes do personagem. Ele usa a função `showCharacterInfo` para exibir as informações detalhadas do personagem selecionado. Esta função recupera os dados do personagem do armazenamento local, preenche as informações no cartão de personagem e busca vídeos relacionados ao personagem no YouTube utilizando a API fornecida pelo google.
