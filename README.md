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
