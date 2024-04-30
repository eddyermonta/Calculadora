
function agregar(valor){
    document.getElementById(`pantalla`).value += valor;
}

function limpiar(){
    document.getElementById(`pantalla`).value = ``;
}

function calcular(){
    const valorPantalla = document.getElementById(`pantalla`);
    const resultado = eval(valorPantalla.value);
    valorPantalla.value = resultado;
}