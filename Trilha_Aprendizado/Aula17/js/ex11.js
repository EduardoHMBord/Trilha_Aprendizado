var n, cont, tabuada
n=parseInt(prompt("Insira um valor"))
for(cont=0;cont<=10;cont++){
    tabuada=n*cont
    document.write(n+"x"+cont+"="+tabuada+"<br>")
}