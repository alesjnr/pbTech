# Case de projeto
### Considerando o projeto abaixo:
> Imagina que você iniciou em uma equipe com um projeto do Zero. A proposta do projeto é a criação de uma solução para realizar compra de imóveis através de sistemas que facilitarão a comunicação de imobiliárias, clientes e bancos. A arquitetura está sendo desenhada a partir de solução de microsserviços e WebSites, está sendo mapeado integrações com sistemas externos, espera-se volume alto de operação uma vez que o sistema irá operar em todo o território Brasileiro, o cliente está bem próximo do projeto para levantamento de requisitos.

#### Responda as seguinte questões:o projeto abaixo:
 1. Dado esse cenário, como você iniciaria uma estratégia de teste?
- A estratégia seria baseada na coleta de dados necessários sobre o projeto com todos os envolvidos, dados como:
	 - Análise de negócio;
	 - Análise de requisitos;
	 - Definir critérios de aceitação do sistema;
	 - Definir critérios de aceitação do cliente;
	 - Definir o Defintion of Ready (DoR);
	 - Definir o Defintion of Done (DoD);
	 - Definir os critérios de aceite das histórias de Usuário.

	E então analisaria todos os dados coletados, para que seja possível junto da equipe definir os melhores tipos de testes a serem executados no projeto e nas histórias de usuário. Com isso seria possível diminuir as chances de surgirem imprevistos durante os ciclos de desenvolvimento do software, melhorando a qualidade e entrega final.

 2. **Quais abordagens de teste você consideraria?**
- Testes funcionais, não funcionais, exploratórios, caixa preta, caixa branca, smoke, regressão, API, acessibilidade, usabilidade, responsividade, integridade de dados, injeção de falhas, penetração, confiabilidade, desempenho, carga, stress.
 3. **Como você trabalharia com diferentes tipos/níveis de teste?**
 - Contemplando os 4 níveis de testes, sendo eles:
	 - **Testes de componentes**: alinhando com a equipe de desenvolvimento e auxiliando com conhecimento, caso alguém não possua, para que os testes unitários (de back e front) sejam criados durante o desenvolvimento do software e façam parte dos critérios de aceite e do DoD;
	 - **Testes de integração**: testando a interação entre os microsserviços e os endpoints, também realizando testes de contratos nos serviços dos parceiros para garantir que nada mudou e quebre nossas features;
	 - **Testes de sistema**: testar o sistema de ponta a ponta ("end-to-end"/E2E), garantindo que tudo se integrou da forma que deveria e está funcionando de acordo com o planejado. Realizando testes de segurança para garantir que os dados do usuário estão sendo tratados devidamente, que o sistema não contém brechas de vulnerabilidade, testes de performance para garantir que o sistema está apto e preparado para várias situações de desempenho, carga e stress.
	 - **Testes de aceite**: fazendo um acompanhamento de alguns usuários do cliente e stackholdes, recolhendo feedbacks de melhorias de usabilidade e garantindo que o sistema esteja de acordo com o esperado pelos usuários em questão de fluxos, que está sendo entregue o que foi contratado.
 4. **Quais ferramentas você consideraria usar?**
- Separando por funções, consideraria as seguintes ferramentas:
	-	Gerenciamento de testes e tarefas: Jira e AzureDevops;
	-	Gerenciamento de repositórios: Bitbucket, AzureDevops, GitHub, GitLab;
	-	Integração continua: Bitbucket, AzureDevops, GitHub, GitLab, Jenkins;
	-	Ferramentas para testes manuais ou automatizados: Postman, Appium, Cypress, Robot, PactumJS, K6.
 5. **Como você se imagina atuando nessa equipe?**
- A atuação de um QA dentro da equipe deve ser de maneira ágil e próxima, participando de todos os ritos durante o desenvolvimento do software, assim ficando por dentro de todas as decisões desde o Discovery ao Delivery do produto para o cliente.
 Auxiliando a equipe não somente com testes manuais ou automatizados mas também compartilhando conhecimento, técnicas de testes, melhorias nos processos/ritos, aplicando métricas sobre bugs e problemas encontrados e sugerindo formas de evoluir a qualidade da equipe, espalhar a cultura de qualidade entre os membros para que o conhecimento não fique retido apenas com o QA.

#### Descreva alguns cenários e casos de testes:
#####
- **Cenário de teste:** Cadastro de usuário
	 - **Caso de teste:** Efetuar o cadastro de um usuário com sucesso
		 - Dado que o usuário acessa a página de cadastro de usuários
		 - Quando ele preenche todos os campos obrigatório com dados válidos
		 - E clica no botão "Cadastrar"
		 - Então o sistema deve cadastrar o novo usuário e redirecionar o usuário para a página inicial com ele logado no sistema.

	- **Caso de teste:** Não efetuar o cadastro de um usuário que não informou todos os campos obrigatórios
		 - Dado que o usuário acessa a página de cadastro de usuários
		 - Quando ele preenche apenas alguns campos obrigatório com dados válidos
			 - E deixa alguns campos obrigatórios sem dados
		 - E clica no botão "Cadastrar"
		 - Então o sistema não deve cadastrar o usuário e deve mostrar uma mensagem de aviso informando que faltam alguns campos para serem preenchidos e quais são esses campos.

- **Cenário de teste:** Busca por imóveis
	 - **Caso de teste:** Efetuar a busca de um imóvel sem aplicar filtros
		 - Dado que o usuário está logado na página inicial do sistema
		 - Quando ele clica no botão "Buscar imóveis"
		 - Então o sistema traz uma lista com todos os imóveis disponíveis para a venda.

	- **Caso de teste:** Efetuar a busca de um imóvel aplicando filtros
		 - Dado que o usuário está logado na página inicial do sistema
		 - Quando ele clica no botão "Cidades"
			 - E seleciona sua cidade
		 - E clica no botão "Faixa de valores"
			 - E seleciona uma faixa de valor desejada
		 - E clica no botão "Buscar imóveis"
		 - Então o sistema traz uma lista com todos os imóveis disponíveis para a venda conforme a cidade e faixa de valores selecionadas.
