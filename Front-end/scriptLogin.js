const btnLogin = document.getElementById('login')

btnLogin.addEventListener('click', (e)=>{
    email = document.getElementById('email').value;
    senha = document.getElementById('senha').value;
    var url = "http://hmlbot.com.br/users/" + email;

    var request = new XMLHttpRequest()
    request.open('GET', URL);
    request.send()
    console.log(request)
    request.onload = () => {
        console.log(request)
        if(request.status === 200){
            console.log(JSON.parse(request.response));
        } else {
            console.log('error ${request.status} ${request.statusText}');
        }
    };
})