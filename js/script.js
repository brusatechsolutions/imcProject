import { modal } from "./modal.js";
import { alertError } from "./alertError.js";
import { calculateImc, clearInputs, notNumber } from "./utils.js";

const btnCalcImc = document.querySelector("#calcImc");

const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");

inputHeight.oninput = () => alertError.close()
inputWeight.oninput = () => alertError.close()

btnCalcImc.addEventListener("click", function (e) {
  const weight = Number(inputWeight.value);
  const height = Number(inputHeight.value);
  const weightOrHeightIsNotNumber = notNumber(weight) || notNumber(height);

  e.preventDefault();

  if (weightOrHeightIsNotNumber) {
    alertError.open();
    clearInputs();
  } else {
    alertError.element.classList.contains("open") ? alertError.close() : "";
    const imc = calculateImc(weight, height);
    modal.modalMsg.innerText = imc;
    modal.open();
    clearInputs();
  }
});
