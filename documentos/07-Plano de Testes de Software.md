# Plano de Testes de Software

[Apresente os cenários de testes a serem utilizados na realização dos testes da aplicação. Escolha cenários de testes que demonstrem os requisitos sendo atendidos. ]

Os testes funcionais a serem realizados na aplicação são descritos a seguir. [Utilize a estrutura abaixo para cada caso de teste]

|Caso de Teste    | CT-01 - Verificar o funcionamento dos links |
|:---|:---|
| Requisitos Associados | RF-001 A aplicação deve permitir que o usuário crie uma conta,	edite ou exclua sempre	que necessário. RF-006 A aplicação deve permitir que o	profissional de apoio encerre a	prestação de serviços através	da exclusão da conta.
| Objetivo do Teste | Verificar se os links do cabeçalho estão redirecionando para a página correspondente. |
| Passos | 1. Acessar o navegador. 2. Vizualizar a pagina Home. 3. Clicar nos links do cabeçalho. |
| Critérios de êxito | Todos os links devem encaminhar os usuários para as páginas descritas.  |
| Responsável pela elaborar do caso de Teste | Rafael |


|Caso de Teste    | CT-02 - Verificar o cadastro de usuário |
|:---|:---|
| Requisitos Associados | RF-001 A aplicação deve permitir que o usuário crie uma conta,	edite ou exclua sempre que necessário.
| Objetivo do Teste | Verificar se o cadastro esta sendo feito corretamente. |
| Passos | 1. Acessar o navegador. 2. Vizualizar a página Home. 3. Clicar em entrar no menu. 4. Clicar em cadastre-se na página de login. 5. Preencher o formulário e clicar em "Cadastrar".|
| Critérios de êxito | Deve ocorrer uma validação das informações fornecidas pelo usuário e ao clicar em cadastrar deve aparecer a mensagem "Formulário enviado com sucesso".  |
| Responsável pela elaborar do caso de Teste | Rafael |


|Caso de Teste    | CT-03 - Verificar o cadastro de profissional |
|:---|:---|
| Requisitos Associados | RF-05	A aplicação deve permitir que o	profissional de apoio crie uma conta e cadastre o seu serviço	juntamente com as formas de contato.
| Objetivo do Teste | Verificar se o cadastro de profissional de apoio está sendo feito corretamente. |
| Passos | 1. Acessar o navegador. 2. Vizualizar a pagina Home. 3. Clicar em entrar no menu. 4. Clicar em cadastre-se na página de login. 5. Preencher o formulário escolhendo a opção perfil "Profissional" e clicar em "Cadastrar", 6. Vizualizar a página de cadastro de profissionais de apoio. 7.Inserir informações profissionais. 8. Clicar em "Cadastrar".|
| Critérios de êxito | Deve ocorrer uma validação das informaçõess fornecidas pelo usuário e ao clicar em cadastrar deve aparecer a mensagem "Formulário enviado com sucesso".  |
| Responsável pela elaborar do caso de Teste | Rafael |

|Caso de Teste    | CT-04 - Verificar a eficácia de recuperação de acesso |
|:---|:---|
| Requisitos Associados | RF-02: A aplicação deve permitir que o usuário recupere o acesso à conta através da criação de uma nova senha.
| Objetivo do Teste | Assegurar que o usuário utilize os recursos da aplicação para recuperar o acesso através da criação de uma nova senha |
| Passos | 1. Acesse a opção "Entrar" no menu sanduiche. 2. Na página de login clique em "Esqueci minha senha". 3. Preencha o campo necessário|
| Critérios de êxito | Será considerado como êxito se o usuário conseguir alterar a senha e acessar a página com a nova senha. |
| Responsável pela elaborar do caso de Teste | Mariana |

|Caso de Teste    | CT-05 - Verificar a eficácia do processo de denúncia |
|:---|:---|
| Requisitos Associados | RF-03: A aplicação deve apresentar os canais de denúncia ao usuário mediante preenchimento prévio de formulário. RF-04: A aplicação deve permitir que o usuário realize um filtro através do preenchimento dos campos para ser direcionado para o canal de denúncia da região. |
| Objetivo do Teste | Garantir que o usuário tenha acesso ao principal canal de denúncia da região. |
| Passos  | 1. Acesse o link "Denuncie" em qualquer página. 2. Preencha os campos solicitados. 3. Clique em "Localizar"
| Critérios de êxito | 1. Preenchimento das informações em todos os campos. 2. Êxito ao clicar no botão "Localizar". 3. Receber a informação do principal canal de denúncia  |
| Responsável pela elaborar do caso de Teste | Mariana |

|Caso de Teste    | CT-06 - Verificar a sistematica da pesquisa dos profissionais de apoio|
|:---|:---|
| Requisitos Associados | RF-07: A aplicação deve permitir que o usuário localize o profissional de apoio através do preenchimento dos campos que terá a função de filtro. |
| Objetivo do Teste | Verificar se o usuário consegue localizar o profissional de apoio através de acordo com as informações preenchidas. |
| Passos  | 1. Acesse o link "Profissionais de Apoio". 2. Preencha os campos solicitados e clique em pesquisar. |
| Critérios de êxito | Será considerado êxito se o resultado da pesquisa estiver de acordo com os campos preenchidos pelo usuário. |
| Responsável pela elaborar do caso de Teste | Mariana |

|Caso de Teste    | CT-07 - Verificar o acesso aos informativos |
|:---|:---|
| Requisitos Associados | RF-008 A aplicação deve permitir que o acesso às informações sobre conscientização seja livre,ou seja, sem a necessidade de criar uma conta.
| Objetivo do Teste | Verificar se o acesso aos informativos é livre ao público e se os links dos informativos funcionam. |
| Passos | 1. Sem logar, acesse a página e clique no link "Informativos". 2. Clique nos informativos.|
| Critérios de êxito | Êxito se o usuário acessar o link de informativos sem a necessidade de acessar a conta. Êxito se os links dos informativos estão sendo direcionados para a página correta. |
| Responsável pela elaborar do caso de Teste | Rafael |



> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)
