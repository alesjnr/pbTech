# Testes práticos, como executar? 🤔
##### Para a execução dos testes, será necessário ter o os seguintes softwares instalados em sua máquina:
- [Node.js (Obrigatório)](https://nodejs.org/en/download/current)
- IDE de sua preferência (Opcional)
- [Git (Opcional)](https://git-scm.com/downloads)

##### Após ter instalado os softwares mencionados, basta seguir os passos abaixo:

###### Preparação para executar os testes
1. Fazer o download do repositório dos testes com o código pronto para execução;
1.1 Caso tenha optado por instalar o [Git](https://git-scm.com/downloads), você poderá executar o seguinte comando para clonar o repositório dos testes em suan máquina:
`git clone https://github.com/alesjnr/paranaBanco.git`
2. Abrir o terminal do seu sistema operacional;
2.1 Caso tenha optado por instalar uma IDE, você poderá abrir a pasta do projeto nela e executar o terminal diretamente nela.
3. Mudar o diretório no terminal para a pasta onde está seu clone do repositório (caso não tenha aberto sua pasta por uma IDE);
4. Executar o comando:
`npm install`

Após ter realizado os passos acima, os testes poderão ser executados.

###### Executando os testes
Os testes criados estão divididos nas categoras GUI e API, sendo respectivamente os testes de interface e os testes de endpoints. Também existe a possibilidade de executá-los com a interface da framework Cypress aberta ou em background.

Dessa forma estão disponíveis os seguintes comandos para executar os testes:
- `npm run open_allTests` - Este comando irá abrir a interface do Cypress com todos os testes disponíveis.

- `npm run run_allTests` - Este comando irá executar em background todos os testes disponíveis.

- `npm run open_guiTests` - Este comando irá abrir a interface do Cypress com todos os testes de interface disponíveis.

- `npm run run_guiTests` - Este comando irá executar em background todos os testes de interface disponíveis.

- `npm run open_apiTests` - Este comando irá abrir a interface do Cypress com todos os testes de endpoints disponíveis.

- `npm run run_apiTests` - Este comando irá executar em background todos os testes de endpoints disponíveis.


Agora que já sabe todos os comandos disponíveis e para que eles servem, basta executar o comando desejado no terminal do seu sistema operacional e aguardar os testes serem concluídos.

> 💭 Observação: para executar um dos comandos acima o terminal deve estar no diretório principal de onde se encontram os testes.
