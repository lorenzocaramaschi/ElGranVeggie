const fs = require("fs");
const express = require("express")

class Contenedor {
  constructor(ruta) {
    this.ruta = ruta;
  }

  async save(obj) {
    const listado = await this.getAll();

   /*  if (
      listado.length > 0 &&
      JSON.parse(response).some((el) => el.title === object.title)
    ) {
      console.log("El producto ya se encuentra en el catálogo");
    } */

    let nuevoId;

    if (listado.length == 0) {
      nuevoId = 1;
    } else {
      nuevoId = listado[listado.length - 1].id + 1;
    }

    const nuevoObjConId = { ...obj, id: nuevoId };

    listado.push(nuevoObjConId);

    try {
      await fs.promises.writeFile(this.ruta, JSON.stringify(listado, null, 2));
      return nuevoId;
    } catch (error) {
      throw new Error(`Error al guardar el objeto: ${error}`);
    }
  }

  async getAll() {
    try {
      const data = await fs.promises.readFile(this.ruta, "utf8");
      return JSON.parse(data);
    } catch (error) {
      return [];
    }
  }

  async getById(id) {
    try {
      const listado = await this.getAll();
      return listado.find((item) => item.id == id) ?? null;
    } catch (error) {
      throw new Error(`Error al obtener el objeto: ${error}`);
    }
  }

  async deleteById(id) {
    const listado = await this.getAll();

    const nuevoListado = listado.filter((item) => item.id != id);

    try {
      await fs.promises.writeFile(
        this.ruta,
        JSON.stringify(nuevoListado, null, 2)
      );
    } catch (error) {
      throw new Error(`Error al borrar el objeto: ${error}`);
    }
  }

  async deleteAll() {
    try {
      await fs.promises.writeFile(this.ruta, JSON.stringify([], null, 2));
    } catch (error) {
      throw new Error(`Error al borrar los objetos: ${error}`);
    }
  }
}

let productos = []
let datosTexto = fs.readFileSync("./productos.txt", "utf-8");
productos = JSON.parse(datosTexto)
let indexRandom = Math.floor(Math.random() * 6)


const app = express()
const PORT = 8080

const server = app.listen(PORT,()=>{
  console.log("Server working in port 8080");
})

server.on("error",err => console.log(`Error en el servidor: ${err}`))

app.get('/',(req,res)=>{
  res.send('Inicio de la pagina')
})

app.get('/productos',(req,res)=>{
  res.send(productos)
})

app.get('/productoRandom',(req,res)=>{
  res.send(productos[indexRandom])
})

console.log(indexRandom);

module.exports = Contenedor;