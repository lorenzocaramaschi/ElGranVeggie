import { config } from "../config/config.js";
import { CartMongoDao } from "./cartMongo.dao.js";
import { ProductMongoDao } from "./productMongo.dao.js";
import { CartFirebaseDao } from "./cartFirebase.dao.js";
import { ProductFirebaseDao } from "./productFirebase.dao.js";

let CartDao;
let ProductDao;

if (config.database === "MONGO") {
    CartDao = CartMongoDao;
    ProductDao = ProductMongoDao;
} else {
    CartDao = CartFirebaseDao;
    ProductDao = ProductFirebaseDao;
}

export const Daos = { CartDao, ProductDao };