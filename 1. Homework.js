// Switch con el clima:

const temperatura1 = 15;

switch (true) {
  case temperatura1 < 15:
    console.log("La temperatura es menor a 15°. Hace frío.");
    break;
  case temperatura1 === 15:
    console.log("La temperatura es de 15°. Está fresco.");
    break;
  case temperatura1 > 15:
    console.log("La temperatura es mayor a 15°. Hace calor.");
    break;
  default:
    console.log("No debería entrar acá.");
    break;
}

//*

const temperatura2 = {
  temp: 2,
};

switch (temperatura2.temp) {
  case 0:
    console.log("Hace frío.");
    break;
  case 1:
    console.log("Está fresco.");
    break;
  case 2:
    console.log("Hace calor.");
    break;
  default:
    console.log("Ola de calor: Alerta naranja.");
    break;
}

//**

// Switch con los sonidos de los animales:

const animales = {
  sonidos: "Guauguau",
};

switch (animales.sonidos) {
  case "Guauguau":
    console.log("Es un perro.");
    break;
  case "Meemee":
    console.log("Es una oveja.");
    break;
  case "Miaumiau":
    console.log("Es un gato.");
    break;
  default:
    console.log("Es una vaca.");
    break;
}
