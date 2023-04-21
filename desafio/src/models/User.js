import { model, Schema } from "mongoose";

const userSchema = new Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
  cart: { type: Array },
});

const User = model("User", userSchema);

export default User;
