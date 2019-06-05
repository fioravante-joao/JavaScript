//alert('deu bom');

let formulario = document.querySelector('#form-cadastro');
let erros = document.querySelector('#erros');

formulario.onsubmit = function(evento){
    evento.preventDefault(); // interrompe envio do form
    let inputNome = document.querySelector('#nome');
    let inputEmail = document.querySelector('#email');
    let inputSenha = document.querySelector('#senha');
    let listaErros = document.querySelector('#erros');
    let erros = [];

    if(inputNome.value == ""){
        erros.push('Preencha o campo nome');
    }

    if(inputEmail.value == ""){
        erros.push('preencha o campo email');
    }

    if(inputSenha.value == ""){
        erros.push('Preencha o campo Senha');
    }

    if(inputSenha.value.length < 5){
        erros.push('O campo senha precisa ter no mínimo 5 caracteres');
    }
    console.log(erros);

    listaErros.innerHTML = "";  //limpa a lista de erros
    if (erros.length > 0){
        listaErros.classList.add('alert', 'alert-danger');
            erros.forEach(function(valor){
            let erro = document.createElement('li'); //cria elemento html
            erro.innerHTML = valor; //adiciona msg de erro no <li>
            listaErros.appendChild(erro); //adiciona li no DOM html
        });
    }

    // if(inputNome.value == ""){
    //     erros.innerHTML = "<li>Preencha o campo nome</li>";
    // } else if(inputEmail.value == ""){
    //     erros.innerHTML = "<li>Preencha o campo email</li>";
    // } else if(inputSenha.value == ""){
    //     erros.innerHTML = "<li>Preencha o campo senha</li>";
    // }else{
    //     erros.remove();
    // }
    
}