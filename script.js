function calculate() {
    try {
        const num1 = parseFloat(document.getElementById("numberFirst").value);
        const num2 = parseFloat(document.getElementById("numberSecond").value);
        const operator = document.getElementById("operator").value;
        const resultsBox = document.getElementById("results");

        if (isNaN(num1) || isNaN(num2)) {
            throw new Error("Ошибка: числа некорректные.");
        }

        let result;
        switch (operator) {
            case "+":
                result = num1 + num2;
                break;
            case "-":
                result = num1 - num2;
                break;
            case "*":
                result = num1 * num2;
                break;
            case "/":
                if (num2 === 0) {
                    throw new Error("Ошибка: деление на ноль запрещено.");
                }
                result = (num1 / num2).toFixed(2);
                break;
            default:
                throw new Error("Неизвестная операция.");
        }
        const previousResults = resultsBox.getElementsByClassName("result-item");
        for (let item of previousResults) {
            item.classList.add("old-result");
        }
        const newResult = document.createElement("div");
        newResult.classList.add("result-item");
        newResult.innerHTML = "<b>" + num1 + operator + num2 + "=" + result + "</b>";
        resultsBox.append(newResult);
        if (resultsBox.children.length > 5) {
            resultsBox.removeChild(resultsBox.firstChild);
        }
    } catch (error) {
        alert(error.message);
    }
}