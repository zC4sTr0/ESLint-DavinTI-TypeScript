<p  align="center"><img alt="DAVINTI LOGO"  src="docs\img\logo-davinti.png"></p>
<div align="center">
<h1> Documentação e Tipos da API do Vitrúvio </h1>
<sub>Ferramenta que permite o uso da documentação como uma extensão no VSCode com Autocomplete</sub>
</div>


# Menu:
|[Preview](#Preview)|[Detalhes](#Detalhes)|[Funcionalidades](#Funcionalidades)|[Instalação](#Instalação)|[Como Funciona](#Como-Funciona)|
|---|---|---|---|---|

## Preview

[preview-fullscreen.webm](https://user-images.githubusercontent.com/38432614/232229914-7c0351cc-d6b2-407a-a295-fb8dab028187.webm)

## Detalhes

Este projeto é uma documentação da API do Vitrúvio, que também permite o reaproveitamento dos tipos para uso em extensões do VSCode e outros plugins.

Para a documentação da API, foi utilizado a linguagem [TypeScript](https://www.typescriptlang.org/), que permite a utilização de tipos, interfaces e comentários para documentação, além de ter integração nativa com o VSCode, permitindo a utilização do Autocomplete baseado nos tipos definidos pela documentação. Para completar a documentação, também foi utilizada a ferramenta [JSDoc](https://jsdoc.app/), que permite a utilização de comentários para documentação, e também permite a geração de documentação a partir destes comentários que é integrada ao VSCode nativamente no autocomplete do intellisense.

Além de documentar as funcionalidades da API, este projeto também busca a padronização do código desenvolvido pelos desenvolvedores, através da utilização dos tipos e regras de estilo definidas para o [Linter](https://eslint.org/) e [Formatter](https://prettier.io/) do projeto. Esta abordagem força o uso de boas práticas de desenvolvimento, como a remoção de espaços em branco desnecessários, a utilização de aspas simples, a utilização de ponto e vírgula no final de cada linha, entre outras regras que podem ser encontradas no arquivo [.eslintrc.js](.eslintrc.js) e alteradas conforme a necessidade do time.


Esta extensão foi desenvolvida para ser utilizada em conjunto com o ambiente de desenvolvimento do Vitrúvio. Ela permite que o desenvolvedor tenha acesso a documentação da API do Vitrúvio, bem como a possibilidade de utilizar o Autocomplete para facilitar o desenvolvimento. A necessidade de desenvolver esta extensão surgiu da falta de uma ferramenta que permitisse o uso da documentação da API do Vitrúvio como uma extensão no VSCode, com Autocomplete.
