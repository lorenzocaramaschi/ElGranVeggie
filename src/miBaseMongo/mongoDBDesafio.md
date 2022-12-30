// Cree base ecommerce
use ecommerce

//Agregué 10 documentos y creé cada collection
db.messages.insertMany([
  {    
    username: 'juan',
    message: 'Hola a todos',
    time: 1900
  },
  {    
    username: 'lolo',
    message: 'Hola',
    time: 1915
  },
  {    
    username: 'raul',
    message: 'Hola lolo',
    time: 1916
  },
  {    
    username: 'juan',
    message: 'Hoy quien viene a mi casa?',
    time: 1917
  },
  {    
    username: 'pepe',
    message: 'Yo',
    time: 1918
  },
  {    
    username: 'manuel',
    message: 'No voy a asistir',
    time: 1925
  },
  {    
    username: 'carmen',
    message: 'Me encantaria pero no puedo',
    time: 1935
  },
  {    
    username: 'jorge',
    message: 'Estaré presente',
    time: 1937
  },
  {    
    username: 'tomas',
    message: 'Yo voy más tarde',
    time: 1939
  },
  {    
    username: 'carlitos',
    message: 'No estoy en casa, mas tarde contesto',
    time: 1941
  },
  {    
    username: 'tobias',
    message: 'Voy para allá',
    time: 1942
  },
  {    
    username: 'marcos',
    message: 'Buen plan, yo tambien voy',
    time: 1945
  }])
db.productos.insertMany([
  {
    title: 'GoPro Hero 11 Black',
    price: 5000,
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnr_rn3D-_xza2uVycfL0CPtgm1m2yL4MAADwnKpwxX2k7S7GaCWRQgVOUf0t3WIHbgF0&usqp=CAU',    
  },
  {   
    title: 'GoPro Hero 9 Black',
    price: 4500,
    thumbnail: 'https://images.fravega.com/f500/0a8d6d6022e5591e9824aaf000870910.jpg',    
  },
  {
    title: 'Soporte tipo 3way',
    price: 4000,
    thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_728548-MLA48136978022_112021-O.jpg',    
  },
  {
    title: 'Clip de Montaje J Hook',
    price: 3500,
    thumbnail: 'https://gopro.com.ar/wp-content/uploads/1970/01/L1.jpg',    
  },
  {
    title: 'Kit Montaje Curvo para Casco',
    price: 3000,
    thumbnail: 'https://gopro.com.ar/wp-content/uploads/1970/01/xq.jpg',    
  },
  {
    title: 'Protector de Lente de Silicona para Carcasa Hero 3 4',
    price: 2500,
    thumbnail: 'https://gopro.com.ar/wp-content/uploads/1970/01/PLACAS-2.jpg',    
  },
  {
    title: 'Memoria Sandisk Extreme de 64 GB',
    price: 2000,
    thumbnail: 'https://gopro.com.ar/wp-content/uploads/1970/01/memoria-micro-sd-64gb-sandisk-extreme-a1-u3-v30-100mbs-4k-D_NQ_NP_823884-MLA26973148622_032018-F2.jpg',    
  },
  {
    title: 'GoPro Hero 7',
    price: 1500,
    thumbnail: 'https://gopro.com.ar/wp-content/uploads/1970/01/memoria-micro-sd-64gb-sandisk-extreme-a1-u3-v30-100mbs-4k-D_NQ_NP_823884-MLA26973148622_032018-F2.jpg',    
  },
  {
    title: 'GoPro Hero 6',
    price: 1000,
    thumbnail: 'https://gopro.com.ar/wp-content/uploads/1970/01/memoria-micro-sd-64gb-sandisk-extreme-a1-u3-v30-100mbs-4k-D_NQ_NP_823884-MLA26973148622_032018-F2.jpg',    
  },
  {
    title: 'GoPro Hero 5',
    price: 500,
    thumbnail: 'https://gopro.com.ar/wp-content/uploads/1970/01/memoria-micro-sd-64gb-sandisk-extreme-a1-u3-v30-100mbs-4k-D_NQ_NP_823884-MLA26973148622_032018-F2.jpg',    
  }
])

//Listé todos los documentos en cada collection
db.messages.find().pretty()
db.products.find().pretty()

//Mostré la cantidad de documentos almacenada en cada collection
db.messages.estimatedDocumentCount()
db.products.estimatedDocumentCount()

// Agregué un producto más a la collection de products

// Listé los productos con precios menores a 1000
db.products.insertOne({title:"GoPro Hero 3 Black",price: 2000,thumbnail:"https://www.nakaoutdoors.com.ar/img/articulos/gopro_hero_3_black_edition_imagen1.jpg"})

// Listé los productos con precios entre 1000 y 3000
db.products.find({$and:[{price: {$lte: 3000}},{price:{$gte: 1000}}]})

// Listé los productos con precios mayores a 3000
db.products.find({price: {$gt: 3000}})

//Realicé una consulta que traiga el nombre del tercer producto mas barato
db.products.find().sort({price: 1}).skip(2).limit(1)

//Hice una actualización sobre todos los productos, agregando el campo stock a todos ellos con un valor de 100
db.products.updateMany({}, {$set:{"stock": 100}})

//Cambié el stock a cero de los productos con precios mayores a 4000
db.products.updateMany({price: {$gt: 4000}}, {$set:{"stock": 0}})

//Borré todos los productos con precio menor a 1000
db.products.deleteMany({price: {$lt: 1000}})

//Creé un usuario 'pepe' con la clave: 'asd456' que solo puede leer la base de datos ecommerce
db.createUser({user: "pepe", pwd: "asd456", roles: [{role: "read", db: "ecommerce"}]})