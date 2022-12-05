var num
num=parseFloat(prompt("Insira valor"))

if(num%7==0 && num%3==0){
    alert("O número é divisível por 3 e por 7")
}
else{
if(num%7==0){
    alert("O número é divisível por 7")
} else{
    if(num%3==0){
        alert("O número é divisível por 3")
    }
    else{
        alert("O número não é divisível por 3 e nem por 7")
    }
}
}