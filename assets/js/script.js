let decInp = document.getElementById("dec");
let binInp = document.getElementById("bin");
let error = document.getElementById("error");

decInp.addEventListener("input", () => {
    let decValue = parseInt(decInp.value);
    if (decValue < 0) {
        error.textContent = "Por favor, insira um número positivo";
        decInp.value = "";
        return;
    } else {
        error.textContent = "";
        binInp.value = decValue.toString(2);
    }
});

binInp.addEventListener("input", () => {
    let binValue = binInp.value;
    if (validadorBin(binValue)) {
        decInp.value = parseInt(binValue, 2);
        error.textContent = "";
    } else {
        error.textContent = "Por favor, insira um número binário válido";
    }
    function validadorBin(num) {
        for (let i = 0; i < num.length; i++) {
            if (num[i] != "0" && num[i] != "1") {
                return false;
            }
        }
        return true;
    }
});
