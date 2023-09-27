function click_calcular(){
    let valorA = document.getElementById("txtValorA").value;
    let valorB = document.getElementById("txtValorB").value;
    let valorC = document.getElementById("txtValorC").value;

    if(valorA === ""){
        alert(`Insira um valor no A`);
    }
    else if(valorB === ""){
        alert(`Insira um valor no B`);
    }
    else if(valorC === ""){
        alert(`Insira um valor no C`);
    }
    else{
        if(valorA == 0 ){
            alert(`O valor A não pode ser ZERO.`)
        }
        else{
            const delta = (valorB * valorB) - 4 * valorA * valorC;

            if(delta < 0){
                alert(`Seu delta é NEGATIVO.`)
            }
            else{
                const x1 = (-valorB + Math.sqrt(delta)) / 2 * valorA;
                const x2 = (-valorB - Math.sqrt(delta)) / 2 * valorA;

                document.getElementById("txtResultado").innerHTML = `<h1><div id="palavra">Valores</div> <br> <span id="azul">X1 </span>: ${x1} <span id="vermelho">X2 </span > : ${x2}</h1>`;
            }
        }
    }
}
function click_limpar() {
    document.getElementById("txtValorA").value = "";
    document.getElementById("txtValorB").value = "";
    document.getElementById("txtValorC").value = "";
    document.getElementById("txtResultado").innerHTML = "";
    
}