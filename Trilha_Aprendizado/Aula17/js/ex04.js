var n1, n2, mult, div, sub
n1=parseFloat(prompt("Insira valor"))
n2=parseFloat(prompt("Insira outro valor"))
mult=n1*n2
div=n1/n2
sub=n1-n2
if (n2==0) {
    alert("How fucking dare you ask me about divisão por 0, what the fuck is wrong with you, do you have any idea, any idea at all how stupid a question that is, I'll have you know I—, multiplicação="+mult+" subtração="+sub)
}
else{
    alert("Divisão="+div+" multiplicação="+mult+" subtração="+sub)
}