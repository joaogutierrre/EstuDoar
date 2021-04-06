![Badge](https://img.shields.io/static/v1?label=Node.js&message=v14.16.0&color=green&logo=node.js&style=for-the-badge)
![Badge](https://img.shields.io/static/v1?label=Npm&message=v6.14.11&color=yellow&logo=npm&style=for-the-badge)
![Badge](https://img.shields.io/static/v1?label=Typescript&message=v4.4.3&color=blue&logo=typescript&style=for-the-badge)
![Badge](https://img.shields.io/static/v1?label=MongoDB&message=v4.4.4&color=green&logo=mongodb&style=for-the-badge)
![Badge](https://img.shields.io/github/stars/joaogutierrre/EstuDoar?color=orange&style=for-the-badge)
![Badge](https://img.shields.io/github/forks/joaogutierrre/EstuDoar?&style=for-the-badge)
![Badge](https://img.shields.io/github/stars/joaogutierrre/EstuDoar?&style=for-the-badge)
![Badge](https://img.shields.io/static/v1?label=React.js&message=v17.0.2&color=blue&logo=react&style=for-the-badge)
![Badge](https://img.shields.io/static/v1?label=Swagger&message=Docs&color=green&logo=swagger&style=for-the-badge)
![Badge](https://img.shields.io/static/v1?label=Docker&message=v20.10.5&color=blue&logo=docker&style=for-the-badge)

# EstuDoar -  A melhor forma de doar conhecimento

<ol>
    <li><a href="#sobre">Sobre</a></li>
        <li> <a href="#especificacoes">Especificações</a></li>
        <li> <a href="#conteudoxterno">Conteúdo externo</a></li>
        <li> <a href="#instalacao-backend">Instalação de Backend</a> </li>
        <li> <a href="#instalacao-frontend">Instalação de Frontend</a> </li>
        <li> <a href="#navegando"> Navegando </a> </li>
        <li> <a href="#features-furutas">Features futuras</a> </li>
    <li><a href="#licencas">Licença</a></li>
</ol>
<h2 id="sobre">Sobre</h2>

<p text="justify">EstuDoar é uma plataforma WEB desenvolvida durante o hackathon do Programa de Formação da FCamara, num período de 15 dias, com o intuito de faliciltar a doação de materiais escolares, assim como o acesso dos materiais doados para quem precisa. O objetivo é que por meio da plataforma seja possível doar tendo como perspectiva a necessidade específica dos estudantes cadastrados na aplicação, tornando viável a chegada fácil dos materias àqueles que necessitam, integrando a solução lógica, desenvolvida por meio de software com o mundo físico.</p>

<hr>

<h2 id="especificacoes"> Especificações </h2>

O backend da aplicação foi codificado utilizando Node.js com Typescript, utilizando os princípios SOLID da programação orientada a objetos, alinhados com conceitos de Clean
Architecture, utilizando DDD (Domain Driven Design) como design pattern e TDD (Test Driven Development) como metodologia de trabalho. Conceitos de Conventional Commits, foram
utilizados para mapear melhor o histórico de implementação de código. O frontend foi codificado utilizando React para criação das interações do usuário.
O Jest foi utilizado para executar os testes unitários e o Eslint foi utilizaddo para padronização de código. Além disso, utilizamos Husky para criar gatilhos pré-commit, garantindo a eficiência dos testes.
<br><br>Para fazer a plataforma rodar localmente você precisrá instalar:
  
<h3> Requisitos backend </h3>
<h4>
<ul>
<li> Node.js x64 - versão 14.16.0 </li>
<li> MongoDB x64 - versão 4.4.4 </li>
<li> Npm x64 - versão 6.14.11 </li>
<li> Typescript x64 - versão 4.4.3  </li>
<li> Docker x64 - versão 20.10.5 </li>
</ul>
</h4>

<h3> Requisitos frontend </h3>

<h4>
<ul>
<li> Node.js x64 - versão 14.16.0 </li>
<li> Npm x64 - versão 6.14.11 </li>
<li> ReacJS - versão 17.0.2</li>
</ul>
</h4>

<h3 id="conteudoxterno"> Conteúdo Externo </h3>

<ol>
<li>
<p> Aqui você pode encontrar informações específicas sobre as funcionalidades. </p>
<h3>
<a href="https://estudoar-ts-api.herokuapp.com/api-docs/ ">Documentação das funcionalidades</a> 
</h3>
</li>
<li>
<p> Utilizar o link da API em produção para realizar as requisições. </p>
<h3> 
<a href="https://estudoar-ts-api.herokuapp.com/ ">Consumo da API</a> 
</h3>
</li>
<li>
<p> Diagramas UML desenvolvidos para definir a arquitetura da aplicação </p>
<h3>
<a href="https://onedrive.live.com/?authkey=%21AHyJ7In7BgI2Iv8&id=A154273DA5E82959%2112758&cid=A154273DA5E82959"> Diagramas UML</a>
</h3>
</li>
<li> Foram criados dois vídeos para a iniciativa: um vídeo pitch e outro demonstrando a ideia inicial por meio de protótipo desenvolvido pelos UXs. Vale a pena conferir:
<ul>
<a href="https://youtu.be/onNDhSUu84M"><li>Vídeo pitch</li></a>
<a href="#"><li>Vídeo de demonstração de funcionalidades</li></a>
</ul>
</li>
</li>
</ol>
<br>

<h2 id="instalacao-backend">Instalação de Backend</h2>

>#### 01 - Instale o Node.js <a href="https://nodejs.org/en/download/"> AQUI; </a>

>#### 02 - Após instalar o node, instale o MongoDB <a href="https://www.mongodb.com/try/download/community"> AQUI; </a>

>#### 04 - Instale o docker;

>#### 03 - Instale o Typescript;

>#### 04 - Após a instalação do tyspescript, dê um fork ou clone este repositório em sua máquina local;

>#### 05 - Entre no diretório /backend e instale as dependências do backend:

```npm
> npm install
```
>#### 05 - Entre no diretório /backend e inicie o docker:

```docker
> npm run up
```

>#### [Opcional] Caso queria desligar o docker rode o comando:

```docker
> npm run down
```
>#### [Opcional] Caso queria visualizar os testes, execute o comando:

```npm
> npm test
```

>#### 06 - Agora, está na hora de instalar o frontend: 

<hr>

<h2 id="instalacao-frontend"> Instalação de Frontend</h2>

>#### 01 - Agora, troque para o diretório da /frontend e execute o seguinte comando:

```npm
> npm install
```

>#### 02 - Agora inicie a aplicação localmente utilizando o comando:
```npm
> npm start
```

>#### 03 - A aplicação está consumindo os dados da API hospedada no Heroku, portanto ela funciona independentemente do módulo de backend estar rodando em sua máquina.
>#### Está na hora de degustar a experiência do EstuDoar!!!

<h2 id="navegando"> Navegando </h2>
<p> Durante a navegação é necessário logar uma conta de usuário receptor de doação fictício, seguem dados: </p>
<p> email: any_email@email.com </p>
<p> senha: 123 </p>

<h2 id="features-furutas"> Features futuras </h2>

>#### 01 - [ ] mplementação de listagem dinâmica das escolas por meio do banco de dados; 

>#### 02 - [ ] Gameficação da experiência do usário em relação às doações feitas, onde o usuário desbloqueia medalhas de acordo com o número de doações que faz;

>#### 03 - [ ] Implementação de status do andamento da doação para doador e aluno;

>#### 04 - [ ] Modernização da escrita do frontend em React;

>#### 05 - [ ] Padronização de classes CSS;

>#### 06 - [ ] Implementação de React context;

>#### 07 - [ ] Implementação de controle de sessão;

>#### 08 - [ ] Utilização de eslint no frontend.

>#### <h2 id="licencas"> Licença </h2>

>#### <a href="https://choosealicense.com/licenses/mit/">MIT License Copyright (c) [2021] [EstuDoar]</a>
