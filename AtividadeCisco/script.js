function calcular(){
    /* parseFloat: converte a string recebida como argumento e a retorna como um número */
    const k = 8.9875 * Math.pow(10, 9);
    const q1 = parseFloat(document.getElementById('q1').value);
    const q2 = parseFloat(document.getElementById('q2').value);
    const D = parseFloat(document.getElementById('D').value);


    const result = k * Math.abs(q1 * q2) / Math.pow(D, 2);

    document.getElementById('result').innerText = result.toExponential(2);
}

function calcular1(){
    const V = parseFloat(document.getElementById('V').value);
    const Q = parseFloat(document.getElementById('Q').value);
    const B = parseFloat(document.getElementById('B').value);
    const Seno = parseFloat(document.getElementById('Seno').value);

    const result1 = Q * B * V * Seno;

    document.getElementById('result1').innerText = result1.toExponential(2);
}

