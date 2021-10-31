const temperature = 50;

switch (true) {
  case temperature < 10:
    console.log("Está frío.");
    break;
  case temperature >= 10 && temperature < 20:
    console.log("Está fresco.");
    break;
  case temperature >= 20 && temperature < 30:
    console.log("Está lindo.");
    break;
  case temperature >= 30 && temperature < 40:
    console.log("Hace calor.");
    break;
  case temperature >= 40 && temperature < 50:
    console.log("Hace mucho calor.");
    break;
  default:
    console.log("Gran ola de calor: Alerta naranja.");
    break;
}
