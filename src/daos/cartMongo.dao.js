import { carts } from "../models/carts.js";
import { MongoDao } from "./mongo.dao.js";

export class CartMongoDao extends MongoDao {
    constructor() {
        super(carts);
    }
}