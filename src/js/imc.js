export const Caucular = (peso, altura) => {
    let Imc = peso / (altura ** 2);

    document.getElementById("info").innerHTML = "Seu IMC é Aproximadamente: " + Imc.toFixed(1);

    if (Imc <= 18.5){
        document.getElementById("classificacao").innerHTML = "CLASSIFICAÇÃO: MAGREZA";
        document.getElementById("grau").innerHTML = "OBESIDADE (Grau): 0";
    }
    if (Imc >= 18.6 && Imc <= 24.9){
        document.getElementById("classificacao").innerHTML = "CLASSIFICAÇÃO: NORMAL";
        document.getElementById("grau").innerHTML = "OBESIDADE (Grau): 0";
    }
    if (Imc >= 25 && Imc <= 29.9){
        document.getElementById("classificacao").innerHTML = "CLASSIFICAÇÃO: SOBREPESO";
        document.getElementById("grau").innerHTML = "OBESIDADE (Grau): 1";
    }
    if (Imc >= 30 && Imc <= 39.9){
        document.getElementById("classificacao").innerHTML = "CLASSIFICAÇÃO: OBESIDADE";
        document.getElementById("grau").innerHTML = "OBESIDADE (Grau): 2";
    }
    if (Imc >= 40){
        document.getElementById("classificacao").innerHTML = "CLASSIFICAÇÃO: OBESIDADE GRAVE";
        document.getElementById("grau").innerHTML = "OBESIDADE (Grau): 3";
    }
    
    let modal = document.getElementById("resultado");
    modal.show()
}
