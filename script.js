function borrar() {
    document.getElementById('screen').value = "";
}
function erase(){
    let a = document.getElementById('screen').value;
    document.getElementById('screen').value = a.substring(0, a.length -1);
}
function escribir(btn) {
    document.getElementById('screen').value += btn;
}
function calcular() {
    var opercion = document.getElementById('screen').value;
    var result = eval(opercion);

    if (result === undefined) {
        document.getElementById('screen').value = "";
    } else {
        document.getElementById('screen').value = result;
    }
}