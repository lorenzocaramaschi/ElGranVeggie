import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const jwtSecret = "elgranveggie";

const registerHandler = async (req, res) => {
  const { name, email, password, phone } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, phone, password: hashedPassword });
    const savedUser = await user.save();
    res.redirect("/login"); 
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const loginHandler = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const result = await bcrypt.compare(password, user.password);
    if (result) {
      const token = jwt.sign({ userId: user._id }, jwtSecret, {
        expiresIn: 500,
      });
      res.redirect("/productos"); 
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export default { registerHandler, loginHandler };
