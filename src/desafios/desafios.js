// Creamos la clase usuario
class Usuario {
  // Le asignamos a la clase atributos dentro de un constructor
  constructor(nombre, apellido, libros, mascotas) {
    (this.nombre = nombre),
      (this.apellido = apellido),
      (this.libros = [libros]),
      (this.mascotas = [mascotas]);
  }
  // Buscamos el nombre y apellido y lo mostramos usando template strings
  getFullName() {
    return `${this.nombre} ${this.apellido}`;
  }
  // Pusheamos al array de mascotas la mascota que recibimos
  addMascotas(mascota) {
    this.mascotas.push(mascota);
  }
  // Mostramos la cantidad de mascotas, a través de la longitud del array que las contiene
  countMascotas() {
    return this.mascotas.length;
  }
  // Pusheamos un objeto con el nombre y el autor del libro que ingrese el usuario
  addBook(nombre, autor) {
    this.libros.push({
      nombre: nombre,
      autor: autor,
    });
  }
  // Creamos un array vacío en donde guardaremos los nombres de los libros, iteramos sobre el array y por cada indice pusheamos el nombre de cada libro
  getBookNames() {
    let nombreLibros = [];
    for (let i = 0; i < this.libros.length; i++) {
      const element = this.libros[i].nombre;
      nombreLibros.push(element);
    }
    // Retornamos el array con los nombres de los libros
    return nombreLibros;
  }
}

// Creo un nuevo usuario con la clase Usuario, con atributos arbitrariamente seleccionados
let usuario = new Usuario(
  "Lorenzo",
  "Caramaschi",
  {
    nombre: "Amor en los tiempos del cólera",
    autor: "Gabriel Garcia Marquez",
  },
  "Perro"
);

// Muestro por consola el usuario antes de sufrir alteraciones
console.log(usuario);
// Le realizo alteraciones al usuario creado
usuario.getFullName();
usuario.addMascotas("Tucán");
usuario.countMascotas();
usuario.addBook("Cortázar", "Rayuela");
usuario.getBookNames();
// Muestro como esas alteraciones ahora se ven en el usuario
console.log(usuario);
// Muestro los otros datos que se pueden obtener con los metodos de la clase
console.log(
  `Nombre completo del usuario: ${usuario.getFullName()} \nContador de mascotas: ${usuario.countMascotas()} \nNombre de los libros: ${usuario.getBookNames()}`
);
