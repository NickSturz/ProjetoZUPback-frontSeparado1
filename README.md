# ProjetoZUPback-frontSeparado
Projeto Zuppers com back-end e front-end separados.
## API com CRUD usando linguagem JAVA + Spring Boot + MySQL, JavaScript + HTML + CSS

### Protótipo do Projeto de Redes Sociais para a ZUP  ( Back-end )
Create
Read
Update
Delete

Para verificar a informação, poderá ser usado o Postman.

### Requisição - GET - Todos os usuários
Requisição feita no banco dentro do Localhost/usuario
Irá listar todos os cadastros de usuários feitos, não é necessário parametro, traz a informação no formato Application/JSON

*Localhost/usuario*

### Requisição - GET - Usuário específico
Requisição feita no banco dentro do Localhost 
Irá listar apenas o cadastro de um único usuário, precisa de parâmetro, no caso pelo Id, código fornecido no cadastro que está no bando de dados. 
Traz a informação no formato Application/JSON

*Localhost/usuarios/1*
....
 *Localhost/usuarios/3 ...*
 ....
 *Localhost/usuarios/560*
 
 ### Requisição - POST - Adicionar usuário
 Requisição feita no banco dentro do Localhost/usuario
 Necessário passsar todos os dados no body, nenhuma informação pode ser nula, pois é usado meto de validação. Caso algum campo não seja preenchido voltará erro.
 Traz a informação no formato Application/JSON
 
 *Localhost/usuario*
  ```
  "nome": "joao",
	"sobrenome": "feijao",
	"nascimento":"05/06/1970",
	"cpf": "45945945922",
	"email": "joao@feijao.com",
	"imagem": "img",
	"senha": "1111",
	"cargo": "empregado",
	"setor": "emprego",
   "employ": "04/04/1990"
   ```
   ### Requisição - PUT - Atualização de dados do usuário
   Requisição feita no banco dentro do Localhost/usuario
   Necessário passar todos os dados no body, nenhuma informação pode ser nula, mesmo que apenas uma informação precise ser alterada (assim que ajustar o método por item será atualizado aqui),
   pois é usado meto de validação. Caso algum campo não seja preenchido voltará erro.
    Traz a informação no formato Application/JSON
    
   ______________________________________________________________________________________________________________________________________________________________________
    
    
   ### Protótipo do Projeto de Redes Sociais para a ZUP  ( Front-end )
    
   Front-end básico com (incompletas) funções em JS, feito em HTML e estilizado com CSS básico, simples.
    
   ### LOGIN
   Página de login, contendo inserção de e-mail, senha (sem validação) e redirecionamento para página de cadastro.
    
   ### CREATE
   Página de cadastro, contendo inserção de informações necessárias para novos usuários (nome, sobrenome, data de nascimento, cpf, e-mail, foto perfil, senha, cargo, setor e dia de contratação).
   Pode-se inserir dados(botão quase funcional, bate na trave) ou limpar a página nos botões.
    
   ### INIT
   Página de entrada, ínicio pós login, onde há opção de editar o próprio perfil, e as opções de busca (usuário, cargo, setor, formação), log out por menu hamburguer ou menu aberto.
   (Precisa de funcionalidade, ainda incompleto)    
   
   ### PROFILE
   Página de perfil, com campos a serem preenchidos a cada novo usuário. (Funcionalidade também incompleta)
    
   PRECISA DE MANUTENÇÃO, porém é um protótipo cheio de superação. :)
 

