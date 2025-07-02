
# 💰 goFinance Web

**goFinance Web** é uma aplicação web para controle de finanças pessoais, permitindo registrar entradas, saídas e visualizar o saldo total. Ideal para usuários que desejam acompanhar sua saúde financeira de forma simples, moderna e responsiva.


## 🚀 Funcionalidades

- ✅ Cadastro de transações (entradas e saídas)
- 📊 Cards com resumo financeiro: total de entradas, saídas e saldo
- 📅 Exibição da última entrada e saída
- 🧾 Tabela de todas as transações com categorias, datas e valores
- 🔄 Layout responsivo com carrossel horizontal de cards
- 🌙 Design limpo, moderno e leve

---

## 🛠️ Tecnologias Utilizadas

### Frontend
- HTML5
- CSS3 (com variáveis e responsividade)
- JavaScript (ES6+)
- Font Awesome (ícones)
- Fetch API

### Backend (API)
- Node.js
- Express.js
- PostgreSQL
- dotenv
- cors

---

## 🔧 Instalação e Execução

### 📦 Backend (API)

1. Clone o repositório da API:
```bash
git clone https://github.com/seu-usuario/goFinance-api.git
cd goFinance-api
```

2. Instale as dependências:
```bash
npm install
```

3. Configure o arquivo `.env`:
```env
DB_USER=postgres
DB_PASSWORD=admin
DB_HOST=localhost
DB_PORT=5432
DB_DATABASE=transacoes_db
```

4. Execute a API:
```bash
node app.js
```

A API rodará em: `http://localhost:3000/api/v1/transacoes`

---

### 🖥️ Frontend (Web)

1. Clone o repositório do frontend:
```bash
[git clone (https://github.com/LayanGabriel/Go_Finance.git)]
cd Go_Finance
```

2. Basta abrir o arquivo `index.html` no navegador (ou hospedar com um servidor local como Live Server no VSCode).

> Certifique-se de que a API esteja rodando em `http://localhost:3000`.

---

## 📂 Estrutura de Pastas

```
goFinance-web/
│
├── index.html
├── styles/
│   └── style.css
├── scripts/
│   └── script.js
└── assets/
    └── icons, imagens, etc.
```

---

## 🧠 Lógica dos Cards

Os cards exibem:

- **Total de Entradas:** soma das transações do tipo "entrada"
- **Total de Saídas:** soma das transações do tipo "saída"
- **Total:** saldo calculado pela diferença entre entradas e saídas
- Além disso, mostram a data da **última entrada** e **última saída**

---

## 🗃️ Exemplo de JSON da API

```json
[
  {
    "id": 1,
    "titulo": "Salário",
    "preco": 3000,
    "categoria": "Trabalho",
    "data": "2025-07-01T00:00:00.000Z",
    "tipo": "entrada"
  },
  {
    "id": 2,
    "titulo": "Mercado",
    "preco": 400,
    "categoria": "Alimentação",
    "data": "2025-07-02T00:00:00.000Z",
    "tipo": "saida"
  }
]
```

---

## 📌 Observações

- Os cards são renderizados dinamicamente com base na resposta da API
- Tabela é responsiva e apresenta bordas e hover
- Projeto 100% JS Vanilla no frontend

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

---


