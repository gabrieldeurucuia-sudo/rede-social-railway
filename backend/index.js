const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost/rede-social");

const userSchema = new mongoose.Schema({
  email: String,
  password: String, // hash em produção!
  tipoConta: { type: String, enum: ["normal", "empresa"], default: "normal" },
  cnpj: String // opcional
});

const User = mongoose.model("User", userSchema);

// Cadastro
app.post("/api/register", async (req, res) => {
  const { email, password, tipoConta, cnpj } = req.body;
  if (tipoConta === "empresa" && cnpj) {
    return res.status(400).json({ msg: "Empresa SEM CNPJ não aceita CNPJ!" });
  }
  const user = new User({ email, password, tipoConta, cnpj: cnpj || "" });
  await user.save();
  res.json({ msg: "Usuário cadastrado!", user });
});

// Login
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });
  if (!user) return res.status(401).json({ msg: "Credenciais inválidas" });
  res.json({ msg: "Login OK!", user });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("API rodando na porta", PORT);
});