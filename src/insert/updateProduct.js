import database from "../db/index.js";

const updateProduct = async () => {
    try {
        const productsFromDb = await database.from('products').select('price','id')

        await Promise.all(
            productsFromDb.map(async (product) => {
                await database.from('products').where('id','=',product.id).update('price', product.price*2)
            })
        )


        database.destroy()
    } catch (error) {
        console.log(error);
        database.destroy()
    }
}

updateProduct()