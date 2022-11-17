//variaveis
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");
const randomNumber = Math.round(Math.random() * 10);
let xAttempt = 1;
//Eventos
btnTry.addEventListener("click", handleTryClick);
btnReset.addEventListener("click", handleResetClick);
document.addEventListener("keypress", function (e) {
  if (e.key == "Enter") handleTryClick();
});
//Funções
function handleTryClick(event) {
  event.preventDefault(); //não faça o padrao
  const inputNumber = document.querySelector("#inputNumber");

  if (Number(inputNumber.value) == randomNumber) {
    toggleScreen();
    screen2.querySelector("h2").innerText = `Acertou em ${xAttempt} tentativas`;
  }
  inputNumber.value = "";
  xAttempt++;
}
function handleResetClick() {
  toggleScreen();
  xAttempt = 1;
}
function toggleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}
