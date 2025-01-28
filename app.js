 let amigos = [];



function adicionarAmigo(){

let conteudo = document.querySelector('input').value;
if(conteudo != null){
amigos.push(conteudo);

let lista = document.getElementById("listaAmigos"); 
let item = document.createElement("li"); 
item.textContent(conteudo);
lista.appendChild(item);


conteudo.value = " ";
conteudo.focus(); 
}else{
    alert("Por Favor Insira Um Nome Valido !!!!!"); 

}





}