# Rede Social Railway

Rede social Node.js + React pronta para deploy no [Railway](https://railway.app).

## Como rodar

1. Clone o repositório e configure as variáveis de ambiente (backend e frontend).
2. Suba um cluster MongoDB no Railway e coloque o URI no `backend/.env`.
3. Instale dependências:

```bash
cd backend
npm install

cd ../frontend
npm install
```

4. Execute ambiente local:

```bash
# Backend
cd backend
node index.js

# Frontend
cd frontend
npm run dev
```

5. Faça o deploy de cada pasta como serviço no Railway.

## Estrutura
- `/backend`: API Express + MongoDB
- `/frontend`: React (Vite)

## Observações
- Exemplos são simplificados (sem autenticação JWT, hashing, etc.).
- Pronto para expansão dos recursos da rede social.

---
Deploy fácil no Railway:  
- Crie dois serviços (Node.js e React).  
- Configure variáveis de ambiente usando os arquivos `.env.example` como base.
