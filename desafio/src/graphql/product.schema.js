import { buildSchema } from "graphql";

const schema = buildSchema(`
    input ProductInput {
        title: String,
        price: Int,
        category: String,
        description: String,
    }
    type Product {
        title: String,
        price: Int,
        category: String,
        description: String,
        _id: ID!
    }
    type Query {
        getProduct(id: ID!): Product,
        getProducts: [Product],
    }
    type Mutation {
        createProduct(productData: ProductInput): Product,
        updateProduct(updateProductData: ProductInput, id: ID!): Product,
        deleteProduct(id: ID!): Product,
    }
`);

export default schema;
