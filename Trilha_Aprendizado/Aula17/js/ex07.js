var nome, idade, cpf
nome=prompt("Qual é seu nome?")
idade=parseFloat(prompt("Qual é sua idade?"))
if(idade==1){
    alert("Bem-vindo "+nome+"! Você tem "+idade+" ano. Sai daqui bebê!!!")
}
else{
    alert("Bem-vindo "+nome+"! Você tem "+idade+" anos.")
}
if(idade>=18){
    cpf=prompt("Qual é seu CPF?")
    alert("Seu número de CPF é "+cpf)
}
else{
    alert("Você é menor de idade.")
}