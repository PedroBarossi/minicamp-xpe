function start() {
    var buttonCalculateImc = document.querySelector('#button-calculate-imc');
    buttonCalculateImc.addEventListener('click', handleButtonClick);

    var inputWeight = document.querySelector('#input-weight');
    var inputHeight = document.querySelector('#input-height');

    inputHeight.addEventListener('input', handleButtonClick);
    inputWeight.addEventListener('input', handleButtonClick);

    handleButtonClick();
}

function calculateImc(weight, height) {
    return weight / (height * height);
}

function handleButtonClick() {
    var inputWeight = document.querySelector('#input-weight');
    var inputHeight = document.querySelector('#input-height');
    var imcResult = document.querySelector('#imc-result');
    var imcLevel = document.querySelector('#imc-level');

    var weight = Number (inputWeight.value);
    var height = Number (inputHeight.value);

    var imc = calculateImc(weight, height);
    var formattedImc = imc.toFixed(2).replace('.', ',');

    imcResult.textContent = formattedImc;

    var level = setLevel(imc);

    imcLevel.textContent = level;

}

function setLevel(imc) {
    if (imc < 16) {
        return "inválido";
    } else if (imc < 17) {
        return "Muito abaixo do peso";
    } else if (imc < 18.5) {
        return "Abaixo do peso";
    } else if (imc < 25) {
        return "Peso normal";
    } else if (imc < 30) {
        return "Acima do peso";
    } else if (imc < 35) {
        return "Obesidade grau I";
    } else if (imc <= 40) {
        return "Obesidade grau II";
    } else {
        return "Obesidade grau III";
    }

}

start();