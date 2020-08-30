const btnSalvar = document.getElementById('salvarDados')


/*var params = {
    "nome": "joao",
	"sobrenome": "feijao",
	"nascimento":"05061999",
	"cpf": "45945945922",
	"email": "joao@feijao.com",
	"imagem": "img",
	"senha": "1111",
	"cargo": "empregado",
	"setor": "emprego",
    "employ": "04040404"
    }
*/
btnSalvar.addEventListener('click', (e)=>{
    var params ={
        nome = document.getElementById('nome').value
        sobrenome = document.getElementById('sobrenome').value;
        nascimento = document.getElementById('nascimento').value;
        cpf = document.getElementById('cpf').value;
        email = document.getElementById('email').value;
        senha = document.getElementById('senha').value;
        imagem = document.getElementById('imagem').value;
        cargo = document.getElementById('cargo').value;
        setor = document.getElementById('setor').value;
        employ = document.getElementById('employ').value;
        formacao = document.getElementById('formacao').value;
    }

    var url = "http://localhost/cadastrarUsuario/";

    var request = new XMLHttpRequest()
    request.open('POST', URL);
    request.send(JSON.stringify(params))
    console.log(request)
    request.onload = requestComplete;
    };
})