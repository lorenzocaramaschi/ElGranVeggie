import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    items: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Product',
          required: true
        },
        quantity: {
          type: Number,
          required: true
        }
      }
    ],
    date: {
      type: Date,
      default: Date.now
    },
    mail: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    }
  });
  
  const Cart = mongoose.model('Cart', cartSchema);

  export default Cart