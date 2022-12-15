import database from "../db/index.js";

const deleteProducts = async () => {
    try {
        await database.from('products').del()
        console.log('Products deleted.');
        database.destroy()        
    } catch (error) {
        console.log(error);
        database.destroy()
    }
}

deleteProducts()