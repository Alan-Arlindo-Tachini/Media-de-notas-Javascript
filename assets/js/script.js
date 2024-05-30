function soma() {
    let name = document.getElementById('nome').value;
    let nota1 = parseFloat(document.getElementById('numb1').value);
    let nota2 = parseFloat(document.getElementById('numb2').value);
    let nota3 = parseFloat(document.getElementById('numb3').value);
    let resultado = parseFloat((nota1 + nota2 + nota3) / 3).toFixed(2);


    setTimeout(() => {
        document.getElementById('resultado').innerText = 'Calculando...';
    }, 500);
    setTimeout(() => {
        document.getElementById('resultado').innerText = 'A media do ' + name + ' foi: ' + resultado;
        window.alert('A media do(a) ' + name + ' foi: ' + resultado);
        console.log('A media do(a) ' + name + ' foi: ' + resultado);
    }, 2000);

}

function limpar() {
    setTimeout(() => {
        document.getElementById('resultado').innerText = 'Feito';
    }, 2000);

    setTimeout(() => {
        document.getElementById('nome').value = '';
        document.getElementById('numb1').value = '';
        document.getElementById('numb2').value = '';
        document.getElementById('numb3').value = '';
    }, 2000);
    setTimeout(() => {
        document.getElementById('resultado').innerText = 'Limpando...';
    }, 500);

}