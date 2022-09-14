<body>
  <div align="center">
    <h1>Julio Cesar de Oliveira Martins</h1>
    <kbd><img src="https://avatars.githubusercontent.com/u/49699769?s=400&u=b3668d7972d97e054e42d1695779df65794a3ce1&v=4" width="200px" height="200px"/></kbd>
    <p><a href="https://www.linkedin.com/in/juliocesar1316/"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"/></a></p>
  </div>
</body>

## Introdução

Olá, seja bem-vindo. Sou o José Danrley, estudante de Análise e Desenvolvimento de Sistemas pela FATEC Prof. Jessen Vidal. 

Tenho 24 anos e trabalho como Desenvolvedor de Software Júnior. <br/>


### Meus principais conhecimentos

#### Javascript


#### React


#### Projetos Integradores durante a graduação 

# Projeto 1: 1º Semestre de 2021


### Parceiro Acadêmico
Fatec Prof. Jessen Vidal (proposta realizada pelo docente responsável pela disciplina que ordenou o projeto)


### Visão do Projeto


### Tecnologias adotadas na solução

#### Interface com o usuário - App Inventor

### Contribuições pessoais


### Aprendizados Efetivos HS


# Projeto 2: 1º semestre de 2020


### Parceiro Acadêmico
SPC Brasil <br/>
![image](https://user-images.githubusercontent.com/45850297/142964669-7814af21-80e1-47d9-b04f-61c87d5ee423.png)
##### *Figura 03. SPC Brasil*

### Visão do Projeto

A proposta inicial do projeto era desenvolver uma ferramenta de análise de dados a partir de dados de compra e operações de crédito de clientes. 
Os dados, obviamente, eram exemplos descaracterizados para fins acadêmicos.

O projeto desenvolvimento por minha equipe, a UDA Brasil, possuiu o seguinte objetivo:

Criar uma ferramenta Web de análise da qualidade dos dados, rankeando as fontes dos dados de acordo com a consistência, completude e confiabilidade
dos lotes enviados.

Link do repositório do projeto: https://github.com/justhenrique/SPC-projeto-integrador

### Tecnologias adotadas na solução

#### Flask

Neste projeto os membros de nossa equipe obtiveram o primeiro contato com um framework web, e o utilizado neste momento foi o Flask.

O Flask é um microframework web, que funciona com base na linguagem de programação Python. O radical "micro" em "microframework" é empregado pois o escopo base 
do Flask é enxuto. Ou seja, o Flask não determina ou limita o modo com o qual o seu projeto web será construído. Ele falicita a implamentação básica de um sistema web, permitindo diversos modos de desenvolvimento. Por ser leve, enxuto e dinâmico no desenvolvimento de projetos, ele recebe esta denominação.
Saiba mais sobre o Flask em sua [página oficial.](https://flask.palletsprojects.com/en/2.0.x/)

Com o Flask, foram criadas as rotas HTTP que o nosso sistema consumiu. Além disso, em auxílio com a engine de renderização de templates, a
[Jinja2](https://jinja.palletsprojects.com/en/3.0.x/), as páginas de nossa plataforma foram renderizadas para o usuário final.


#### Pandas

O coração do nosso sistema, responsável por facilitar a extração, tratamento e análise dos dados, foi construído com o auxílio da conhecida biblioteca [Pandas](https://pandas.pydata.org/)

Pandas é uma biblioteca para a linguagem de programação Python, que provê uma série de ferramentas para a extração, conversão e análise de dados. Com o auxílio 
dela, os algoritmos de análise da qualidade dos dados foram construídos, o que permitiu que nossa ferramenta pudesse entregar seu principal valor: o ranking que listava as fontes do nosso cliente, de acordo com a qualidade dos dados enviados por elas.


### Contribuições pessoais

Fui responsável por vários dos scripts que análisavam os lotes de dados de acordo com critérios determinados pela entidade parceira.

Os itens utilizados para determinar a qualidade dos dados eram os seguintes:

- Completude: o quão completos eram os dados. A base possui um alto índice de dados em brancos ou nulos?
- Confiabilidade: os valores preenchidos nos campos de um lote de dados não foram truncados? Eles fazem sentido em seu respectivo contexto?
- Consistência: o valor preenchido em cada um dos campos é consistente com o seu propósito? Os valores referentes aos nomes, por exemplo, não estão preenchidos por caracteres numéricos ou qualquer outro dado incompatível com um nome?

Com base nestes pilares, iniciei a construção dos algoritmos. 

Com métodos de extração e leituras de dados da biblioteca Pandas, conseguimos converter os dados fornecidos no formato de arquivo .xlsx em DataFrames.

DataFrames são objetos internos da biblioteca Pandas. Eles comportam dados em formato bidimensional, com linhas e colunas, compatível com o formato da fonte, em planilhas (arquivos XLSX). Ao manupilar DataFrames, o Pandas oferecee um arsenal de ferramentas robusto que permite filtrar, contabilizar e tratar dados incompletos, inconsistêntes e analisar sua integridade.

Com base nisso o ranking, feature principal da nossa ferramenta, foi construído. Ele pode ser visto abaixo:

![Ranking-UDA-Brasil](https://user-images.githubusercontent.com/45850297/138625070-8d960faf-d4b6-482b-8887-ffb30a7c6ac3.png)
##### *Figura 04. Ranking das fontes - UDA Brasil*


Nosso cliente recebe dados de inúmeras fontes. Com a UDA Brasil, ele poderia visualizar se alguma das fontes estava pecando na qualidade dos dados, e em qual ponto deveria melhorar/corrigir problemas.


### Aprendizados Efetivos HS

A UDA Brasil foi primeiro sistema web com o qual trabalhei. Em seu desenvolvimento, obtive meu primeiro contato com conceitos bases para todo profissional desenvolvedor de software. Os aprendizados inéditos foram diversos, que necessitam ser citados aqui:

- O que é o protocolo HTTP;
- O que é uma requisição GET, POST, PUT e quais são as diferentes destes verbos;
- Como funciona a comunicação de uma página de um usuário com a lógica interna de um sistema;
- O que é um JSON e como ele funciona na comunicação de sistemas web;
- O que é um framework web e qual sua utilidade na construção de sistemas;

A integração do projeto com as matérias do semestre se deu em diversas frentes. A mais importante delas foi na disciplina de Engenharia de Software. Durante o semestre de desenvolvimento deste trabalho, iniciamos o aprendizado sobre diversos padrões de projeto nesta disciplina, pela primeira vez. Com isso, pela primeira vez nos preocupamos em separar nosso programa que se tornaria o produto em camadas, seguir padrões de arquitetura, torná-lo componentizável e seguindo modos de construção comuns aos utilizados no mercado e comunidade. Foi o passo inicial de estudo sobre tais competências tão importantes para qualquer desenvolvedor de software.

Além destes itens importantes que foram citados acima, outros aprendizados importantes precisam ser mencionados:

Durante o desenvolvimento do projeto, a performance do sistema foi uma questão central em seu desenvolvimento.
Possuíamos uma base de dados minimamente volumosa, e precisávamos calcular diversos fatores de todos os seus registros. Com isso, precisávamos pensar em formas mais eficientes em processamento para garantir uma resposta rápida e confiável ao nosso usuário final. A evolução nos algoritmos de análise de dados com o passar do projeto é algo que foi de grande valia para a nossa formação como profissionais desenvolvedores.

No mais, o conhecimento adquirido neste projeto pode ser resumido da seguinte forma:

- Criação de uma API HTTP que gerencia requests e respostas para um cliente: sei fazer com autonomia

- Importação de dados de diferentes fontes e análises gerais sobre o conteúdo importado: sei fazer com autonomia

- Definir a arquitetura de um sistema de acordo com seus requisitos funcionais e não funcionais: sei fazer com ajuda

# Projeto 3: 2º semestre de 2020


## Parceiro Acadêmico
Visiona <br/>
![image](https://user-images.githubusercontent.com/45850297/142964509-8c745ed4-aa96-40b6-8a4e-dc6b10b2f803.png)
##### *Figura 05. SPC Brasil*


### Visão do Projeto

Desenvolver um sistema web que atue como um mini ETL, convertendo shapefiles (arquivos que representam formatos geográficos) em bases de dados geográficas. 
Mais especificamente, em bancos gerenciados pelo PostgreSQL com o apoio da extensão PostGIS.

A sigla ETL (Extract, Transform and Load) resume bem a tarefa que possuíamos em mãos.

A ferramenta desenvolvida pela minha equipe, a VisGeo, se baseava em uma plataforma web onde um usuário poderia realizar a carga de dados geográficos
contidos em shapefiles em um banco dedados que possuísse suporte para este tipo de dado. Ou seja, nossa ferramenta deveria extrair os dados enviados pelo usuário,
tranformá-los no formato compatível com o banco de dados que receberia aquele lote de informações, e realizar a carga dos dados nesta base de dados.

O caminho inverso também deveria ser válido, permitindo converter a base de dados geográfica em shapefiles, permitindo o download destes arquivos conforme a solicitação do usuário.

Shapefiles são arquivos com diversos registros presentes. Estes registros poderiam ser ordenados e comportados em tabelas em um banco de dados geográfico. A VisGeo possibilitava que o usuário escolhesse em qual coluna da tabela criada na base de dados cada coluna de dados do shapefile fosse associada. Esta configuração "de para", assim como outros itens de usabilidade, podem ser vistos na demonstração abaixo:

![Usabilidade VisGeo](https://user-images.githubusercontent.com/55189046/93727270-c9ef7f80-fb90-11ea-83e5-c96e0ae2a0bc.gif)
##### *Figura 04. Utilização da Visgeo - Carga de shapefile em banco geográfico, realizando a configuração de-para*


Link do repositório do projeto: https://github.com/JDanrley/VisGeo-ETL

### Tecnologias adotadas na solução

#### GeoPandas

O GeoPandas é uma biblioteca de análise de dados geográficos. Com ela, é possível trabalhar com diversas fontes de dados geográficos, incluindo shapefiles e 
bases de dados geográficos, que eram as duas fontes necessárias para os requisitos do projeto.

Com o GeoPandas foi possível extrair, realizar conversões e ajustes necessários nos shapefiles, e realizar as cargas necessárias na base de dados selecionada 
pelo usuário da ferramenta.

Para saber mais sobre o GeoPandas, acesse sua [página oficial.](https://geopandas.org/)


#### Flask

Neste projeto os membros de nossa equipe obtiveram o primeiro contato com um framework web, e o utilizado neste momento foi o Flask.

O Flask é um microframework web, que funciona com base na linguagem de programação Python. O radical "micro" em "microframework" é empregado pois o escopo base 
do Flask é enxuto. Ou seja, o Flask não determina ou limita o modo com o qual o seu projeto web será construído. Ele falicita a implamentação básica de um sistema web, permitindo diversos modos de desenvolvimento. Por ser leve, enxuto e dinâmico no desenvolvimento de projetos, ele recebe esta denominação.

Saiba mais sobre o Flask em sua [página oficial.](https://flask.palletsprojects.com/en/2.0.x/).

O Flask foi um dos frameworks utilizados no sistema. Nossa ferramenta trabalhou com dois serviços principais. Um deles era responsável pelo serviço de ETL, que era o núcleo de nossa ferramenta. E outro framework (Express, citado a seguir) foi responsável por disponibilizar o serviço de criação e autenticação de usuários, outro requisito do sistema.

#### Express

O Express é um microframework web, que roda sobre o motor do Node.js
O Express é uma ótima solução para a construção de sistemas web, por meio dele, os serviços de autenticação e criação de usuários foram disponibilizados para nossa aplicação.


### Contribuições pessoais

Fui responsável pela criação dos algoritmos de fluxo de conversão do shapefile em uma tabela compatível com bases de dados geográficos.
Para isso, foi necessário estudar sobre uma área completamente nova, a de dados geográficos.

Durante a preparação para iniciar o desenvolvimento do projeto, consultei diversos materiais e documentações sobre o que eram os shapefiles, no que eles consistem, como os seus dados são estruturados e etc. Além disso, o mesmo tipo de pesquisa foi necessário para as bases de dados geográficos.

Shapefile é um formato para um conjunto de arquivos que, em conjunto, armazenam dados referentes à uma figura geográfica (ou simplesmente geométrica).

Para que estes dados possam ser salvos em tabelas de um banco de dados, extensões geográficas foram criadas para os sistemas gerenciadores de base de dados.
No caso utilizado por nós a pedido da empresa que propôs o problema, a extensão utilizada foi a [PostGIS](https://postgis.net/), que é a principal extensão geográfica para o PostgreSQL. 

Esta extensão adiciona ao sistema gerenciador de banco de dados diversas funções e tipos de dados, que permitem o gerenciamento, visualização e armazenamento dos dados geográficos importados.

Após profunda pesquisa sobre todos estes tópicos, fui responsável por construir os serviços que permitiram a transformação dos registros dos shapefiles em formatos compatíveis com os bancos de dados geográficos. Assim como o caminho inverso, extraindo dados de tabelas, convertendo-os em shapefiles e disponibilizando-os para download para os usuários da ferramenta. 

### Aprendizados Efetivos HS

No desenvolvimento dos serviços da VisGeo, aprendi mais sobre arquitetura de software. Foi a primeira vez em que trabalhei de fato com uma aplicação frontend separada dos serviços chamados de "backend".
Por conta desta experiência, fui inserido a um novo nível de exigência para a contrução de um sistema web, tendo que me preocupar com o formato e conteúdo específico das requisições possíveis de entrada no serviço desenvolvido.

Além disso, aprendi muito sobre uma área não relacionada diretamente a tecnologias de construção de software, mas que eram essenciais para as regras de negócio da operação do cliente do sistema. Esta habilidade de aprender de forma ágil sobre temas diversos, por conta das infinitas possíveis áreas de atuação de possíveis clientes, foi de grande valor para minha formação.

- Criação de serviços de extração e carga de dados geográficos: sei fazer com autonomia

- Criação de API que se provê serviços e se comunica com outros aplicações: sei fazer com autonomia
<br/>



# Projeto 4 - 1º semestre de 2021
## Empresa parceira:
IACIT

<img src="https://user-images.githubusercontent.com/54003876/142727570-6c418f49-5e00-437c-9d9e-5b27131974bb.png" height="300"/>

##### *Figura 06. IACIT (Fonte: https://www.iacit.com.br/)*

Um importante polo da indústria aeroespacial brasileira, fundada em 1986, a IACIT é uma empresa brasileira com sede em São José dos Campos - SP. Com capacitação no desenvolvimento de produtos e sistemas aplicados  para o segmento de navegação aérea, com certificação como Empresa Estratégica de Defesa (EED).

### Visão do Projeto
Desenvolver uma ferramenta capaz de criar, organizar e gerenciar atas de reunião. Com requisitos específicos do cenário da empresa parceira, como a necessidade de gerenciar logs de atualização e criação, exportação das atas em documentos de diferentes formatos, e usabilidade mobile.

O [Typext](https://github.com/Typext) foi desenvolvido para atender a demanda. Este sistema permite a criação, gerenciamento, análise para aprovação/reprovação de atas digitais. Além de funcionalidades extras como exportação do documento em PDF, disponibilização de atas para pessoas não necessariamente cadastradas na ferramentas e diversas outras features. 

<img src="https://user-images.githubusercontent.com/54003876/142728582-46164603-7014-4451-a431-804153a612bf.png" height="500"/>

##### *Figura 07. Typext (Fonte: https://github.com/Typext)*

## Tecnologias utilizadas:
![image](https://user-images.githubusercontent.com/54003876/142728799-f87fdad3-06a5-4ff3-9518-5c1f80624bd1.png)

##### *Figura 08. Tecnologias Typext (Fonte: https://github.com/Typext)*

Assim como no projeto anterior, a aplicação front-end foi construída com a biblioteca React.Js.
Porém, neste projeto houve uma mudança da stack dos serviços e API do back-end. Apenas Node.Js foi utilizado em sua construção, com a linguagem Typescript.
Assim foram programadas todas as rotas HTTP, conexão com o banco de dados e manutenção do banco para alterações, por meio de migrations.
A base de dados utilizada foi mantida, utilizando o PostgreSQL.

#### Contribuições pessoais

Desenvolvimento de features e estruturas do backend da ferramenta. O sistema foi construído em TypeScript, com Node.js. No desenvolvimento deste projeto, diversos desafios foram enfrentados e realizados pelo time do backend. Alguns deles citados abaixo:

- Registro de logs personalizados de ações dos usuários;
- Atualização de registros complexos como a ata;
- Disponibilização de documentos em diferentes formatos a partir de entidades na nossa ferramenta;
- Inclusão de tecnologias de empresas parceiras como o calendário, que permitia agendamento de reuniões.

Atuei em todas estas frentes, criando diferentes rotas e serviços para a implementação de várias features do sistema. Minhas principais contruibuições foram a criação e recuperação de logs e atualização dos registros de usuários e atas.

## Aprendizados Efetivos HS
- Desenvolvimento de serviços CRUD: Sei fazer com autonomia; <br/>
- Desenvolvimento utilizando Typescript: Sei fazer com autonomia; <br/>
- Utilização de ORM's com banco relacional: Sei fazer com autonomia; <br/>


# Projeto 5 - 2º semestre de 2021
## Empresa parceira:
GSW

<img src="https://user-images.githubusercontent.com/54003876/142731143-f3afb070-80b4-442d-ba68-ddd77247dc5b.png" height="150"/>

##### *Figura 09. GSW (Fonte: https://www.gsw.com.br/)*

A GSW é uma empresa brasileira. No mercado desde 1991, sua atuação é focada em produzir soluções para gerenciamento e controle de processos e negócios. 

### Visão do Projeto

A empresa apresentou a necessidade de uma extensão de um produto já existente, que consiste em um portal de anúncio e vendas de imóveis.<br/>
Tal extensão deveria consistir em um marketplace para anúncio e vendas de automóveis, que permitisse que comprador e vendedor se encontrem, conversem e negociem os processos de compra e venda.

Além disso, a ferramenta deveria possibilitar a carga de alguns dados, como de novos usuários e anúncios.

Como solução ao problema, foi criada a plataforma [OneCar](https://github.com/OneCar-API). A OneCar é uma aplicação Web e mobile para anúncio de veículos à venda.
A OneCar possui diversas funcionalidades, como:

- Cadastro de usuários e anúncios automatizados por meio de cargas;
- App mobile para visualização e busca de anúncios;
- Comunicação em tempo real com o vendedor, assim como acesso ao seu contato em casos onde isso é desejado pelas partes;
- Busca pelos anúncios por palavras-chaves e itens dos veículos.


<img src="https://user-images.githubusercontent.com/54003876/142731498-cf7ccb60-cc0a-4bce-a24e-a82d8b916d17.png" height="500"/>

##### *Figura 10. OneCar*

## Tecnologias utilizadas:
- NodeJS <br/>
- Typescript <br/>
- Express <br/>
- PostgreSQL <br/>
- ReactJS <br/>
- Docker <br/>

Mantendo a linha dos dois projetos anteriores, utilizamos React para o frontend, inclusive com o Reactive Native para as telas mobile.
No backend, as mesmas linguagens e ferramentas foram usadas em relação ao projeto anterior.

#### Contribuições pessoais
Desenvolvimento do backend da aplicação, em especial serviços CRUD e o chat da ferramenta. <br/>
Fui responsável pelo desenvolvimento da feature de comunicação em tempo real entre comprador e vendedor foi desenvolvida utilizando web socket, com a biblioteca [Socket.Io](https://socket.io/). A inclusão desta tecnologia foi de grande desafio e valia no projeto, pois é a primeira vez que utilizamos este tipo de comunicação entre cliente e servidor em um projeto integrador, então foi necessário um aprendizado ágil para sua implementação.<br/>


## Aprendizados Efetivos HS
- Desenvolvimento de serviços CRUD: Sei fazer com autonomia; 
- Desenvolvimento utilizando Typescript: Sei fazer com autonomia; 
- Utilização de ORM's com banco relacional: Sei fazer com autonomia; 
- Utilização de banco NoSQL: Sei fazer com autonomia;
- Comunicação em tempo real entre cliente e servidor com web socket: Sei fazer com autonomia.


# Projeto 6 - 1º semestre de 2022
## Empresa parceira:
UOL

<img src="https://conteudo.imguol.com.br/c/home/layout/vueland/icons/brand/uol-logo-full.svg?v4" height="150"/>

##### *Figura 11. UOL (Fonte: https://www.uol.com.br/)*

A UOL é uma companhia brasileira, fundada em 1996. Pioneira no mercado online nacional, foi a dona do primeiro portal de conteúdos no país. O portal de UOL, que carrega o nome da empresa, segue sendo o maior do Brasil.

### Visão do Projeto

Nosso parceiro deste projeto solicitou a criação de uma ferramenta que pudesse prever a indisponibilidade de seus serviços online. O produto desenvolvido deveria ser capaz de monitorar a saúde da aplicação e prever que num futuro breve um problema pode ocorrer, caso o cenário seja este.

Considerando a larga escala de utilização dos produtos do nosso parceiro, prever possíveis indisponibilidades futuras seria um ótimo mecanismo de garantir disponibilidade máxima para seus usuários. 

Para atender às demandas solicitas, a [Orbit](https://github.com/orbit-api) foi desenvolvida. A Orbit é uma ferramenta de monitoramento que tem como objetivo coletar os dados de saúde de um serviço e, com base nos dados coletados de cenários de indisponibilidade, pode prever um novo cenário de queda do serviço monitorado. Caso um evento deste tipo seja previsto, os responsáveis pela aplicação são notificados de que um possível problema deverá ocorrer.


<img src="https://user-images.githubusercontent.com/56441318/160112708-193a18fe-2241-427c-8fe0-2dc23324b48a.png" height="500"/>

##### *Figura 12. Orbit*

## Tecnologias utilizadas:
- Java <br/>
- Spring Boot <br/>
- Hibernate <br/>
- PostgreSQL <br/>
- Vue Js <br/>
- Docker <br/>
- Locust.io <br/>
- Prometheus <br/>
- Scikit-learn <br/>

Neste semestre houve uma mudança na stack de tecnologias. O Vue JS foi a biblioteca utilizada na construção de páginas, e a linguagem Java, junto com o Spring e Hibernate, foram utilizadas no desenvolvimento das API's e serviços.
Isso proporcionou uma mudança na arquitetura da ferramenta. 

#### Contribuições pessoais
Minha atuação neste projeto foi focada nas criações de cenários de indisponibilidade e testes para geração de dados.
A serviço oferecido pela Orbit se baseia no aprendizado de máquina proporcionado por estes testes, onde diferentes características da saúde do serviço monitorado devem ser considerados. <br>
Utilizei ferramentas de teste em carga, como o Locust.io, e ao mesmo tempo aplicações de monitoramento para relacionar estados como (consumo de recursos como CPU, memória, tempo de resposta, latência considerando a rede, etc) com o nível de estresse da aplicação monitorada. Além do trabalho de relacionar estes dados em estruturas que pudessem ser utilizadas por modelos de aprendizado de máquina.<br>
Com isso, minhas contribuições foram focadas na criação dos testes, para que pudessem representar o funcionamento de uma aplicação em diferentes cenários. Em coletar os dados do monitoramento da aplicação durante os testes, incluindo informações de monitoramente que pudessem medir diferentes aspectos da saúde da aplicação, e em armazenar estas métricas para alimentar de forma útil nosso modelo de maching learning, que se baseará na extrapolação dos dados no tempo para prever possíveis indisponibilidades. <br> <br>
O Scikit-learn foi utilizado realizando duas tarefas principais:<br>
- Utilizar os dados de saúde da aplicação e extrapolá-los no tempo, para que se pudesse ter uma estimativa no futuro de como estas métricas estariam.<br>
- Com os dados extrapolados, aplicar uma árvore de decisão para definir se naquele ponto no tempo, haveria risco futuro próximo de cenários de indisponibilidade. 

## Aprendizados Efetivos HS
- Monitoramento de atributos de performance de aplicações web: Sei fazer com autonomia; 
- Coleta e tratamento de dados para uso em bibliotecas de aprendizado de máquina: Sei fazer com autonomia; 
- Desenvolvimento de API's com Spring Boot: Sei fazer com autonomia.

## Contatos:

- [LinkedIn;](https://www.linkedin.com/in/jos%C3%A9-danrley-069827191)
- [GitHub.](https://github.com/JDanrley) 