
document.getElementById("toggleMode").addEventListener("click", function (){
    document.body.classList.toggle("dark-mode");
})

document.getElementById("calcular").addEventListener('click', function(){
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);

    if(isNaN(peso) || isNaN(altura) || altura === 0) {
        document.getElementById("resultado").textContent = "Por favor, insira valores válidos.";
        return;
    }

    let imc = peso / (altura * altura);
    //document.getElementById("resultado").textContent = "Seu IMC é: " + imc.toFixed(2) + ". " + verificarIMC (imc);
    document.getElementById("resultado").textContent = "Seu IMC é: " + imc.toFixed(2) + ". \n" + ("\n") + pesoIdeal (imc, altura) ;
   
});

function verificarIMC (imc) {
    
    if (imc < 17) {
        return "Muito abaixo do peso.";
    }
    else if (imc > 17 && imc <= 18.49) {
        return "Abaixo do peso.";
    }
    else if (imc >= 18.5 && imc <= 24.99) {
        return "Peso normal.";
    }
    else if (imc >= 25 && imc <= 29.99) {
        return "Acima do peso.";
    }
    else if (imc >= 30 && imc <= 34.99) {
        return "Obesidade de Classe 1.";
    }
    else {
        return "Obesidade de Classe 2.";
    }
}

function pesoIdeal (imc, altura) {
    
    let txtPesoIdeal = "Peso ideal " +  (18.5*altura*altura).toFixed(2) + " Kg - " + (24.99*altura*altura).toFixed(2) + " Kg";

    if (imc < 17) {
        return "Muito abaixo do peso. " + txtPesoIdeal;
    }
    else if (imc > 17 && imc <= 18.49) {
        return "Abaixo do peso. " + txtPesoIdeal;
    }
    else if (imc >= 18.5 && imc <= 24.99) {
        return "Peso normal. " + txtPesoIdeal;
    }
    else if (imc >= 25 && imc <= 29.99) {
        return "Acima do peso. " + txtPesoIdeal;
    }
    else if (imc >= 30 && imc <= 34.99) {
        return "Obesidade de Classe 1. " + txtPesoIdeal;
    }
    else {
        return "Obesidade de Classe 2. " + txtPesoIdeal;
    }
}


