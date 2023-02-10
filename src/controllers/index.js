import { dirname, join } from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const users = [];
const passwords = [];

const serverLogin = (req, res) => {
  res.sendFile(join(__dirname, "../../views/login.html"));
};

const login = (req, res) => {
  const { mail, password } = req.body;

  if (!users.includes(mail)) {
    return res.send("Invalid credentials");
  } else if (users.includes(mail) && !passwords.includes(password)) {
    return res.send("Wrong password");
  }

  req.session.user = mail;

  res.redirect("/welcome");
};

const serverResgister = (req, res) => {
  res.sendFile(join(__dirname, "../../views/register.html"));
};

const register = (req, res) => {
  const { mail, password } = req.body;

  if (users.includes(mail)) {
    return res.send("mail already in use");
  }

  users.push(mail);
  passwords.push(password);

  console.log(users);
  console.log(passwords);

  res.redirect("/login");
};

const logout = (req, res) => {
  const mail = req.session.user;
  req.session.destroy();

  res.render("logout", { mail });
};

const serverWelcome = (req, res) => {
  const mail = req.session.user;

  res.render("welcome", { mail });
};

export const authController = {
  serverLogin,
  login,
  serverResgister,
  register,
  logout,
  serverWelcome,
};
