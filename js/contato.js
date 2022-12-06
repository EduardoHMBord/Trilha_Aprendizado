function Enviar(){
    var nome= document.getElementById("nome")
    var email= document.getElementById("email")
    if(nome.value!=""){
        alert(nome.value+", agradecemos o seu contato.")
    }
    else{
        alert("Preencha o seu nome.")
    }
}