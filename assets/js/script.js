let decInp = document.getElementById("dec");
let binInp = document.getElementById("bin");
let error = document.getElementById("error");

decInp.addEventListener("input", () => {
    let valorDec = parseInt(decInp.value);
    binInp.value = valorDec.toString(2);
});

binInp.addEventListener("input", () => {
    let valorBin = binInp.value;

    if (binValidador(binValue)) {
        decInp.value = parseInt(valorBin, 2);
        error.textContent = "";
    } else {
        error.textContent = "Por favor, insira um número binário válido";
    }

    function binValidador(num) {
        for (let i = 0; i < num.length; i++) {
            if (num[i] != "0" && num[i] != "1") {
                return false;
            }
        }
        return true;
    }
});
