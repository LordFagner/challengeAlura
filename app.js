let amigos = [];



function adicionarAmigo() {
    console.log
    let conteudo = document.getElementById("amigo");
    console.log(conteudo.tagName);

    if (conteudo != null ) {
        let amigo = conteudo.value.trim();
        if(amigo == ""){
alert("insira um valor valido")
        }else{
        amigos.push(amigo);

        let lista = document.getElementById("listaAmigos");
        let item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
        conteudo.value = "";
    }

}

}