const Contenedor = require("./desafios");

// Data

const item1 = {
  title: "Escuadra",
  price: 123.45,
  thumbnail:
    "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
  id: 1,
};

const item2 = {
  title: "Calculadora",
  price: 234.56,
  thumbnail:
    "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png",
  id: 2,
};

const item3 = {
  title: "Globo Terráqueo",
  price: 345.67,
  thumbnail:
    "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png",
  id: 3,
};

async function main() {
  const contenedor = new Contenedor("./productos.txt");

  //Muestro los datos del contenedor
  let datos = await contenedor.getAll();
  console.log(datos);

  // Guardo 2 items
  let id1 = await contenedor.save(item1);
  let id2 = await contenedor.save(item2);

  // Muestro denuevo
  console.log(datos);

  //Busco por id
  let busca1 = await contenedor.getById(1);
  console.log(busca1);

  //Borro el id 2
  await contenedor.deleteById(2);
  let delete1 = await contenedor.getAll();
  console.log(delete1);

  // Borro todo
  await contenedor.deleteAll();
  let delete2 = await contenedor.getAll();
  console.log(delete2);
}

main();
