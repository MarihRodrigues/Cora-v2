# Plano de Testes de Software

[Apresente os cenários de testes a serem utilizados na realização dos testes da aplicação. Escolha cenários de testes que demonstrem os requisitos sendo atendidos. ]

Os testes funcionais a serem realizados na aplicação são descritos a seguir. [Utilize a estrutura abaixo para cada caso de teste]

|Caso de Teste    | CT-01 - Verificar o funcionamento dos links |
|:---|:---|
| Requisitos Associados | RF-001 A aplicação deve permitir que o usuário crie uma conta,	edite ou exclua sempre	que necessário. RF-006 A aplicação deve permitir que o	profissional de apoio encerre a	prestação de serviços através	da suspensão ou exclusão da	conta.
| Objetivo do Teste | Verificar se os links do cabecalho estao redirecionando para a pagina correspondente. |
| Passos | 1. Acessar o navegador. 2. Vizualizar a pagina Home. 3. Clicar nos links do cabecalho. |
| Critérios de êxito | Todos os links devem encaminhar os usuarios para as paginas descritas.  |
| Responsável pela elaborar do caso de Teste | Mariana |



|Caso de Teste    | CT-01 - Verificar o cadastro de usuario |
|:---|:---|
| Requisitos Associados | RF-001 A aplicação deve permitir que o usuário crie uma conta,	edite ou exclua sempre	que necessário.
| Objetivo do Teste | Verificar se o cadastro esta sendo feito corretamente. |
| Passos | 1. Acessar o navegador. 2. Vizualizar a pagina Home. 3. Clicar em entrar no menu. 4. Clicar em cadastre-se na pagina de login. 5. Preencher o formulario e clicar em "Cadastrar".|
| Critérios de êxito | Deve ocorrer uma validacao das informacoes fornecidas pelo usuario e ao clicar em cadastrar deve aparecer a mensagem "Formulario enviado com sucesso".  |
| Responsável pela elaborar do caso de Teste | Mariana |


|Caso de Teste    | CT-01 - Verificar o cadastro de usuario |
|:---|:---|
| Requisitos Associados | RF-05	A aplicação deve permitir que o	profissional de apoio crie uma conta e cadastre o seu serviço	juntamente com as formas de contato.
| Objetivo do Teste | Verificar se o cadastro de profissional de apoio esta sendo feito corretamente. |
| Passos | 1. Acessar o navegador. 2. Vizualizar a pagina Home. 3. Clicar em entrar no menu. 4. Clicar em cadastre-se na pagina de login. 5. Preencher o formulario escolhendo a opcao perfil "Profissional"e clicar em "Cadastrar", 6. Vizualizar a pagina de cadastro de profissionais de apoio. 7.Inserir informacoes profissionais. 8. Clicar em "Cadastrar".|
| Critérios de êxito | Deve ocorrer uma validacao das informacoes fornecidas pelo usuario e ao clicar em cadastrar deve aparecer a mensagem "Formulario enviado com sucesso".  |
| Responsável pela elaborar do caso de Teste | Mariana |

|Caso de Teste    | CT-02 - Verificar a sistemática de recuperação de senha |
|:---|:---|
| Requisitos Associados | RF-02: A aplicação deve permitir que o usuário recupere sua senha através das informações fornecidas na criação da conta
| Objetivo do Teste | Assegurar que o usuário utilieze os recursos da aplicação para recuperar a senha |
| Passos | 1. Acesse a opção "Entrar" no menu sanduiche. 2. Na página de login clique em "Esqueci minha senha". 3. Preencha o campo necessário|
| Critérios de êxito | Receber o direcionamento para acessar o e-email informado para dar continuidade a recuperação de senha  |
| Responsável pela elaborar do caso de Teste | Rafael |

|Caso de Teste    | CT-03 - Verificar a sistemática do processo de denúncia |
|:---|:---|
| Requisitos Associados | RF-03: A aplicação deve apresentar os canais de denúncia ao usuário mediante preenchimento prévio de formulário.
RF-04: A aplicação deve permitir que o usuário realize um filtro utilizando a geolocalização ou informando a localidade para ser direcionado para o canal de denúncia da região
| Objetivo do Teste | Verificar se o usuáriotem acesso ao principal canal de denúncia de acordo com as informações preenchidas |
| Passos  | 1. Acesse o link "Denuncie" de qualquer página. 2. Preencha os campos solicitados. 3. Clique em "Localizar"
| Critérios de êxito | |1. Preenchimentoo das informações em todos os campos. 2. Êxito ao clicar no botão "Localizar". 3. Receber a informação do primcipal canal de denúncia  |
| Responsável pela elaborar do caso de Teste | Rafael |


|Caso de Teste    | CT-04 - Verificar o acesso ás informações contidas em links |
|:---|:---|
| Requisitos Associados | RF-008 A aplicação deve permitir que o acesso às informações sobre conscientização seja livre,ou seja, sem a necessidade de criar uma conta.
| Objetivo do Teste | Verificar se os links nos cards de Orientações e Informações estão funcionando. |
| Passos | 1. Acessar o navegador. 2. Visualizar a pagina Home. 3. Clicar em Informativos. 4. Clicar nos cards.|
| Critérios de êxito | Ao clicar em cada card, o usuário será direcionado ao site pré-definido no link |
| Responsável pela elaborar do caso de Teste | Guilherme |



> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)
