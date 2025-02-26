
function appendNumber(num) {
    document.getElementById('display').value += num;
}

function appendOperator(op) {
    document.getElementById('display').value += ' ' + op + ' ';
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    let expression = document.getElementById('display').value;
    try {
        let result = eval(expression);
        document.getElementById('result').innerText = "Result: " + result;
    } catch {
        document.getElementById('result').innerText = "Error! Invalid expression";
    }
}
