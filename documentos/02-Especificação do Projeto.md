# Especificação do Projeto

## Perfis de Usuários

[Enumere e faça o detalhamento dos perfis de usuários. Utilize o modelo de tabela abaixo para sintetizá-los.]

<table>
<tbody>
<tr align=center>
<th colspan="2"> Usuário </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px"> •Pessoa que sofreu violência doméstica e precisa realizar a denúncia, também tendo acesso aos profissionais de apoio e aos materiais de conscientização. 
• Pessoa que não sofreu violência doméstica, mas gostaria de ter acesso aos profissionais de apoio e aos conteúdos de conscientização.
</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>• Opção alternativa para realizar a denúncia contra violência doméstica. Fornecimento de conteúdos de conscientização e oferta de profissionais de apoio.
</td>
</tr>
</tbody>
</table>

<table>
<tbody>
<tr align=center>
<th colspan="2"> Profissionais de Apoio </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px"> •Profissionais que prestarão apoio à vítima oferecendo apoio jurídico ou psicológico.</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>•Canal alternativo para a prestação e divulgação dos serviços.</td>
</tr>
</tbody>
</table>


## Histórias de Usuários

[Apresente aqui as histórias de usuários que são relevantes para o projeto da solução.]

> **Link Útil**:
> - [Como escrever boas histórias de usuário](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)

[Utilize o modelo de tabela abaixo para apresentar as histórias de usuários.]

|EU COMO... `QUEM`   | QUERO/PRECISO ... `O QUE` |PARA ... `PORQUE`                 |
|--------------------|---------------------------|----------------------------------|
|  Usuário           |Uma plataforma onde todos  |agilizar na escolha da entidade   |
|		                 |os canais de denúncia sejam|mais próxima e fazer a denúncia.  |               
|                    |centralizados.             |                                  |
|--------------------|---------------------------|----------------------------------|
|  Usuário           |Uma plataforma com redes de|Manutenção da saúde mental e apoio| 
|		                 |apoio à vitima.		         |jurídico em caso de violência.    |
|--------------------|---------------------------|----------------------------------|
|  Usuário           |Um sistema com conteúdos   |Adquirir conhecimentos sobre o    |
|		                 |de conscientização contra  |assunto.			                    |
|	 	                 |a violência doméstica.	   |				                          |
|--------------------|---------------------------|----------------------------------|
|Prof. de apoio      |Um sistema para prestação  |Prestar apoio à vítimas e         |
|		                 |de serviços.		           |divulgação profissional.          |
|--------------------|---------------------------|----------------------------------|


## Requisitos do Projeto

[Com base nas Histórias de Usuários, enumere os requisitos da solução. Lembre-se que cada requisito deve corresponder a uma, e somente uma, característica alvo da solução. Além disso, certifique-se de que todos os aspectos capturados nas Histórias de Usuário foram cobertos.]

### Requisitos Funcionais

[Utilize o modelo de tabela abaixo para apresentar os requisitos funcionais]

|ID     | Descrição                     | Prioridade |
|-------|-------------------------------|------------|
| RF-01 |A aplicação deve permitir 	|    Alta    |
|	|que o usuário crie uma conta, 	|	     |
|	|edite ou exclua sempre 	|  	     |
|	|que necessário.		|	     |
|-------|-------------------------------|------------|
| RF-02 |A aplicação deve permitir que o|    Alta    |
|	|usuário recupere sua senha 	|	     |
|	|através das informações 	|	     |
|	|fornecidas na criação da conta	|	     |
|-------|-------------------------------|------------|	
| RF-03	|A aplicação deve apresentar os |    Alta    |
|	|canais de denúncia ao usuário 	|	     |
|	|mediante preenchimento prévio 	|	     |	 
|	|de formulário.  		|            |
|-------|-------------------------------|------------|
| RF-04	|A aplicação deve permitir que o|    Alta    |		
|	|usuário realize um filtro 	|	     |
|	|utilizando a geolocalização ou |	     |
|	|informando a localidade para 	|	     |
|	|ser direcionado para o canal de| 	     |
|	|denúncia da região		|	     |
|-------|-------------------------------|------------|				
| RF-05	|A aplicação deve permitir que o|   Média    |	
|	|profissional de apoio crie uma |	     |	
|	|conta e cadastre o seu serviço |            |
|	|juntamente com as formas de 	|	     |
|	|contato.			|	     |
|-------|-------------------------------|------------|
| RF-06	|A aplicação deve permitir que o|   Média    |
|	|profissional de apoio encerre a| 	     |
|	|prestação de serviços através  |	     |
|	|da suspensão ou exclusão da    |	     |
|	|conta. 			|	     |
|-------|-------------------------------|------------|
| RF-07 |A aplicação deve permitir que o|   Média    |
|	|usuário identifique o 		|	     |
|	|profissional de apoio através 	|	     |
|	|do filtro pela região e formas |	     |
|	|de atendimento.	 	|	     |
|-------|-------------------------------|------------|                           
| RF-08 |A aplicação deve permitir que o|   Média    |
|	|acesso às informações sobre 	|	     |
| 	|conscientização seja livre, 	|	     |
|	|ou seja, sem a necessidade de  |	     |
|	|criar uma conta.		|	     |
|-------|-------------------------------|------------|

**Prioridade: Alta / Média / Baixa. 

### Requisitos não Funcionais

[Utilize o modelo de tabela abaixo para apresentar os requisitos não-funcionais]

|ID      | Descrição                 |Prioridade |
|--------|---------------------------|-----------|
| RNF-01 |A aplicação deve ser 	     |	 Alta	 |
|	 |construída de forma lúdica,| 		 |
|	 |intuitiva e de fácil 	     |		 |
|	 |compreensão. 		     |		 |
|--------|---------------------------|-----------|
| RNF-02 |A aplicação deve permanecer| 	 Alta	 | 
|	 |conectada até que o 	     |		 |
|        |usurário realize o logout. |		 |
|--------|---------------------------|-----------|
| RNF-03 |A aplicação deve funcionar |	 Alta	 |
|	 |24h por dia.		     |	   	 |	 
|--------|---------------------------|-----------|

**Prioridade: Alta / Média / Baixa. 

