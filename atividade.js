listaDeHobbies = [];
let nomeCompleto = "";
let idadeDaPessoa = 0;
let maiorDeIdade = "";

function limparNome(){
    passatempo = document.querySelector("#hobbies");
    passatempo.value="";
}

function nome(){
    if (nomeCompleto !== ""){
        alert ("Nome já cadastrado como "+ nomeCompleto +", para inserir novo nome você deve atualizar a página");
    } else {
        nomeCompleto = document.querySelector("#nome").value;
    }
}

function idade(){
    if (idadeDaPessoa !==0) {
        alert("Idade já cadastada como "+idadeDaPessoa+" anos!");
    } else {
        idadeDaPessoa = document.querySelector("#idade").value;
        console.log(idadeDaPessoa);
    } if (idadeDaPessoa >= 18){
        maiorDeIdade = "você é maior de idade!";
    } else {
        maiorDeIdade = "você é menor de idade";
    }   
}

function adicionarHobbie(){
    if (listaDeHobbies.length <3){
        let passatempo = document.querySelector("#hobbies").value;
        listaDeHobbies.push(passatempo);
        limparNome();
    } else {
        alert("Seus 3 hobbies já foram definidos. São eles: "+listaDeHobbies);
    }
}

function mostrarMensagem(){
    alert("Olá " + nomeCompleto +" "+ maiorDeIdade + " e seus hobbies são " + listaDeHobbies);
}