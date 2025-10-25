const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const operator = document.getElementById('operator');
const result = document.getElementById('result');

document.getElementById('equals').addEventListener('click', () => {
  const n1 = parseFloat(num1.value);
  const n2 = parseFloat(num2.value);
  let res;

  if (isNaN(n1) || isNaN(n2)) {
    result.textContent = 'Please enter valid numbers';
    return;
  }

  switch (operator.value) {
    case '+': res = n1 + n2; break;
    case '-': res = n1 - n2; break;
    case 'x': res = n1 * n2; break;
    case '/':
      res = n2 !== 0 ? n1 / n2 : 'Cannot divide by zero';
      break;
    default: res = 'Invalid operator';
  }

  result.textContent = res;
});
