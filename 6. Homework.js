const num1 = 10;
const num2 = "10";

if (typeof num1 === typeof num2 && num1 > num2) {
  console.log(`${num1} es mayor a ${num2}.`);
} else if (typeof num1 === typeof num2 && num1 < num2) {
  console.log(`${num1} es menor a ${num2}.`);
} else if (num1 === num2) {
  console.log(`${num1} es igual a ${num2}.`);
} else {
  console.log("Los tipos no coinciden.");
}

//***

if (num1 === 10 || num1 === 9) {
  console.log("Es verdad.");
} else {
  console.log("No es verdad.");
}
