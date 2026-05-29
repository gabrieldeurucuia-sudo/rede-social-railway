import { useState } from "react";
const URL = import.meta.env.VITE_API_URL || "http://localhost:3001";

function App() {
  const [form, setForm] = useState({ email: "", password: "", tipoConta: "normal" });
  const [resp, setResp] = useState("");
  return (
    <div>
      <h1>Cadastro Rede Social</h1>
      <select
        value={form.tipoConta}
        onChange={e => setForm(f => ({ ...f, tipoConta: e.target.value }))}
      >
        <option value="normal">Conta Normal</option>
        <option value="empresa">Empresa (sem CNPJ)</option>
      </select>
      <input
        placeholder="email"
        value={form.email}
        onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
      />
      <input
        placeholder="senha"
        type="password"
        value={form.password}
        onChange={e => setForm(f => ({ ...f, password: e.target.value }))}
      />
      <button
        onClick={async () => {
          const res = await fetch(`${URL}/api/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form)
          });
          const data = await res.json();
          setResp(data.msg);
        }}
      >Cadastrar</button>
      {resp && <div>{resp}</div>}
    </div>
  );
}

export default App;
