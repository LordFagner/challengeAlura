let amigos = [];
let lista = document.getElementById("listaAmigos");
let resultados = document.getElementById("resultado");


function adicionarAmigo() {
    console.log
    let conteudo = document.getElementById("amigo");
    // console.log(conteudo.tagName);

    if (conteudo != null ) {
        let amigo = conteudo.value.trim();
        if(amigo == ""){
alert("insira um valor valido")
        }else{
        amigos.push(amigo);

        let item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
        conteudo.value = "";
        resultados.innerHTML = "";
    }

}

}

function sortearAmigo(){

let Sorteio  = Math.floor(Math.random() * amigos.length); 
// console.log(Sorteio);

let SorteadoMensagem ="o amigo secreto Sorteado foi : " + amigos[Sorteio];
let item = document.createElement("li");
item.textContent = SorteadoMensagem;
resultados.appendChild(item);
lista.innerHTML = "";

}