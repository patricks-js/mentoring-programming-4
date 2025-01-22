# Estrutura Básica de Pastas, Configuração do Biome e ECMAScript Modules

## Estrutura Básica de Pastas

Exemplo básico para um projeto com Express:

```txt
projeto/
├── src/                # Código-fonte do projeto
│   ├── controllers/    # Controladores (lógica dos endpoints)
│   ├── routes/         # Rotas do Express
│   ├── services/       # Serviços (lógica de negócios)
│   ├── config/         # Configurações do projeto
│   ├── models/         # Modelos (se estiver usando ORM como Mongoose ou Sequelize)
│   ├── middlewares/    # Middlewares personalizados
│   ├── app.js          # Configuração principal do Express
│   └── server.js       # Ponto de entrada para o servidor
├── .env                # Variáveis de ambiente
├── .gitignore          # Arquivos/diretórios ignorados pelo Git
├── package.json        # Configurações e dependências do projeto
└── README.md           # Documentação do projeto
```

### Detalhes

- **`src/`**: Diretório principal para o código-fonte.
- **`app.js`**: Configuração principal do Express, como middlewares globais e rotas.
- **`server.js`**: Inicia o servidor (geralmente importa `app.js`).

## Configuração do Biome

O Biome é uma ferramenta de formatação e lint para JavaScript. Siga os passos para configurá-lo:

### Instalação

- Instalar o Biome como dependência de desenvolvimento:

   ```bash
   npm install -D --save-exact @biomejs/biome
   ```

### Configuração

- Rodar o seguinte comando para criar o arquivo de configuração:

  ```bash
  npx biome init
  ```

- Adicione scripts no `package.json` para facilitar o uso:

   ```json
   "scripts": {
     "format": "biome check --write ."
   }
   ```

### Uso

- **Formatar arquivos automaticamente:**

  ```bash
  npm run format
  ```

## ECMAScript Modules (ESM)

### O que são?

ECMAScript Modules (ESM) são a forma nativa de trabalhar com módulos em JavaScript, substituindo o sistema CommonJS (`require` e `module.exports`). Eles permitem importar/exportar código de forma mais clara e moderna.

### Exemplo Básico

1. **Exportação** (arquivo `math.js`):

   ```javascript
   export const add = (a, b) => a + b;
   export function subtract(a, b) {
     return a - b;
   }
   ```

2. **Importação** (arquivo `app.js`):

   ```javascript
   import { add, subtract } from './math.js';

   console.log(add(2, 3)); // 5
   console.log(subtract(5, 3)); // 2
   ```

### Configuração no Node.js

1. Adicione no `package.json`:

   ```json
   {
     "type": "module"
   }
   ```

2. Agora, você pode usar `import` e `export` diretamente.

## Hoisting

O **hoisting** é um comportamento padrão em JavaScript onde variáveis e declarações de funções são "elevadas" ao topo do escopo antes de o código ser executado.

- **Variáveis:** Não são inicializadas antes da declaração.
- **Funções:** Declarações de funções completas são elevadas, permitindo chamá-las antes de sua definição.

**Exemplo:**

```javascript
console.log(sum(2, 3)) // 5

function sum(a, b) { // * Faz hoisting
  return a + b;
}

console.log(sum2(2, 3)) // error

const sum2 = (a, b) => { // Não faz hoisting
  return a + b;
}
```

## Funções Puras

Uma função pura é uma função que:

1. Sempre retorna o mesmo resultado para os mesmos argumentos.
2. Não tem efeitos colaterais (não modifica variáveis fora de seu escopo ou interage com o mundo externo).

**Exemplo:**

```javascript
// Função pura
const sum = (a, b) => a + b;

// Não é pura (modifica uma variável externa)
let total = 0;
function sumAndChange(a, b) {
  total += a + b;
  return total;
}
```

## Imutabilidade

A **imutabilidade** significa que os dados não são alterados após serem criados. Em vez disso, você cria novos dados com base nos existentes.

**Exemplo:**

```javascript
// Exemplo com objetos
const pessoa = { nome: "João", idade: 30 };

// Imutável
const novaPessoa = { ...pessoa, idade: 31 };

// Mutável (evitar)
pessoa.idade = 31;
```

### Por que é útil?

- Evita bugs relacionados a alterações inesperadas de dados.

---

## ORMs (Object-Relational Mapping)

Os ORMs são ferramentas que mapeiam tabelas de bancos de dados relacionais para objetos no código, simplificando o acesso e manipulação de dados.

**Exemplo:**

- **Sequelize**: Para bancos de dados como MySQL, PostgreSQL, e SQLite.
- **Mongoose**: Para trabalhar com MongoDB.

### Vantagens

- Facilita consultas complexas sem SQL.
- Abstrai operações comuns, como CRUD.
- Ajuda a manter o código organizado e reutilizável.

## Inversão de Dependência

A **Inversão de Dependência (DI)** é um princípio onde módulos de alto nível não dependem de módulos de baixo nível, mas ambos dependem de abstrações.

**Exemplo simples:**

Sem DI:

```javascript
class Service {
  execute() {
    console.log("Executando o serviço...");
  }
}

const service = new Service();
service.execute();
```

Com DI:

```javascript
class Service {
  execute() {
    console.log("Executando o serviço...");
  }
}

class Controller {
  constructor(service) {
    this.service = service;
  }

  execute() {
    this.service.execute();
  }
}

const service = new Service();
const controller = new Controller(service);
controller.execute();
```

### Benefícios

- Facilita testes (Mock de dependências).
- Reduz o acoplamento no código.
- Torna o sistema mais flexível para mudanças.

## Middlewares no Express

Middlewares são funções executadas durante o ciclo de requisição/resposta no Express. Eles podem:

- Modificar o objeto `req` ou `res`.
- Encerrar a requisição.
- Passar o controle para o próximo middleware.

**Exemplo:**

```javascript
const express = require("express");
const app = express();

// Middleware global
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Middleware para rota específica
app.get("/rota", (req, res, next) => {
  res.send("Middleware em ação!");
});

// Iniciar servidor
app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
```

### Por que são úteis?

- Implementação de autenticação e autorização.
- Validação de entrada de dados.
- Gerenciamento de erros.
