function calculateImc(weight, height) {
  return (weight / height ** 2).toFixed(2);
}

function notNumber(value) {
  return isNaN(value) || value == "";
}

function clearInputs() {
  const inputs = document.querySelectorAll("input");
  for (let input of inputs) {
    input.value = "";
  }
}

export { calculateImc, notNumber, clearInputs };
