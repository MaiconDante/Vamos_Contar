function contagem() {
    var inicio = document.getElementById('inicio');
    var fim = document.getElementById('fim');
    var passo = document.getElementById('passo');
    let resultado = document.getElementById('resultado');

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        document.getElementById("inicio").value = "";
        document.getElementById("fim").value = "";
        document.getElementById("passo").value = "";
        resultado.innerHTML = "IMPOSSIVEL CALCULAR";
        window.alert('[ERRO] Digite corretamente, faltam dados');
    } else {
        resultado.innerHTML = " ";
        let i = Number(inicio.value);
        let f = Number(fim.value);
        let p = Number(passo.value);

        if (p <= 0) {
            window.alert("|Passo INVÁLIDO| - Considerando passo 1");
            p = 1
        }

        if (i < f) {
            for (let c = i; c <= f; c += p) {
                resultado.innerHTML += ` ${c} \u{1F449}`;
            }
        } else {
            for (let c = i; c >= f; c -= p) {
                resultado.innerHTML += ` ${c} \u{1F449}`;
            }
        }
        resultado.innerHTML += `\u{1F3c1}`;
    }
    document.getElementById("inicio").value = "";
    document.getElementById("fim").value = "";
    document.getElementById("passo").value = "";
}