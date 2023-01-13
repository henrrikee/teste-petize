# Instalando o projeto

• Primeiramente vamos clonar o projeto no GitHub para uma máquina local.

• Acesse o link do projeto no GitHub - https://github.com/henrrikee/teste-petize.

• Clique no botão verde do lado direito "<> Code", copie o código HTTPS.

• Crie uma pasta em seu disco, abra seu terminal git e digite "git clone" de um espaço, cole o código HTTPS copiado.

• Abra a sua IDE,  clique em File em seguida "Open Folder" (caminho do VS Code).

• Se tudo correu bem até aqui, o projeto esta aberto na sua máquina!

# Instalando componentes para o funcionamento

• O Gerenciador de pacotes usados foi o NPM (Node Package Manager) V 9.2.0
Para instalar digite "npm i npm@9.2.0".

• A Versão do Angular/Cli usada foi a V 15.1.0
Para instalar digite "npm i @angular/cli@15.1.0.

• Toda parte de componentes visuais foi usado PrimeNG V 15.0.1
Para instalar digite:
npm install primeng --save
npm install primeicons --save
npm install primeflex --save

# Startando o projeto

• Abra o terminal da sua IDE, e digite "npm start" precione ENTER
• O projeto vai rodar na porta 4200, caso não abra de forma automática é preciso digitar na barra de endereço
do navegador da web "localhost:4200" e precionar ENTER.

# Motivação das escolhas usadas

Como parte visual, foi usado o PrimeNG, pois tem uma interface moderna e bonita, junto com várias funcionalidades
que são indispensáveis para um bom projeto, o gerenciador de pacotes foi o Node, pois para programação web, usando Angular,
ele vem demonstrando ser o mais apropiado, pois é leve e multiplataforma, permitindo trabalhar com JS de uma forma mais ampla.

# Estrutura do projeto

O projeto teve a seguinte estrutura:

• Dentro da pasta principal "app", foi criado uma pasta "pages" a qual recebeu as duas paginas do projeto "Home" e "Perfil".
• Foi criado uma pasta "shared" dentro da pasta principal "app" para construir o "external service".
• Em seguida foi desenvolvido o código do "github.service.ts" que faz toda a comunicação com a API externa do GitHub.
• Buscando os dados no end-point da API do GitHub, foi escrito os códigos necessários para tratar esses dados e imprimir em tela.


