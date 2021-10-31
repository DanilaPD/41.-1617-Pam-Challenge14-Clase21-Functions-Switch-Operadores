function hola(nombreDelAnimal1) {
  console.log(`Hola, ${nombreDelAnimal1}`);
}

hola("señor Gato.");
hola("señora Vaca.");
hola("señor Perro.");
hola("señora Oveja.");

//*

chau = (nombreDelAnimal2) => console.log(`${nombreDelAnimal2}, is that you?`);

chau("Señor Gato");
chau("Señora Vaca");
chau("Señor Perro");
chau("Señora Oveja");

//*

const buenas = (nombreDelAnimal3) =>
  console.log(`¡Buenas, ${nombreDelAnimal3}!`);

buenas("señor Gato");
buenas("señora Vaca");
buenas("señor Perro");
buenas("señora Oveja");

//*****

function temperatura1(temperature1) {
  console.log(`1. Hoy ${temperature1}.`);
}

temperatura1("hace frío");
temperatura1("está fresco");
temperatura1("hace calor");

//*

temperatura2 = (temperature2) => console.log(`2. Hoy ${temperature2}.`);

temperatura2("hace frío");
temperatura2("está fresco");
temperatura2("hace calor");

//*
const temperatura3 = (temperature3) => console.log(`3. Hoy ${temperature3}.`);

temperatura3("hace frío");
temperatura3("está fresco");
temperatura3("hace calor");

//*****

function saludo1(hello1) {
  console.log(`A. Buenas, ${hello1}.`);
}

saludo1("Mabel");
saludo1("Martina");
saludo1("Cándida");

//*

saludo2 = (hello2) => console.log(`B. Buenas, ${hello2}.`);

saludo2("Mabel");
saludo2("Martina");
saludo2("Cándida");

//*

const saludo3 = (hello3) => console.log(`C. Buenas, ${hello3}.`);

saludo3("Mabel");
saludo3("Martina");
saludo3("Cándida");

//*****

const checkItOut = (num1, num2) => {
  if (typeof num1 === typeof num2) {
    if (num1 > num2) {
      console.log(`${num1} es mayor a ${num2}.`);
    } else if (num1 < num2) {
      console.log(`${num1} es menor a ${num2}.`);
    } else if ((num1 = num2)) {
      console.log(`${num1} es igual a ${num2}.`);
    }
  } else {
    console.log(
      `${num1} es un ${typeof num1}, mientras que "${num2}" es un ${typeof num2}.`
    );
  }
};

checkItOut(7, "7");
checkItOut(2, 5);
checkItOut(11, 10);
