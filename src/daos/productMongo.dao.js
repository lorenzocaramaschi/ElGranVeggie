import { products } from "../models/products.js";
import { MongoDao } from "./mongo.dao.js";

export class ProductMongoDao extends MongoDao {
    constructor() {
        super(products);
    }
}