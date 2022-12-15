import database from "../db/index.js";

const deleteProductsWhere = async () => {
    try {
        await database.from('products').del().where({brand: 'GoPro'})
        console.log('Products deleted.');
        database.destroy()        
    } catch (error) {
        console.log(error);
        database.destroy()
    }
}

deleteProductsWhere()