# Avaliação Back-End

Este é um projeto de API para gerenciamento de produtos, desenvolvido utilizando **Node.js**, **Prisma** e **SQLite**. A API permite realizar operações CRUD (Create, Read, Update, Delete) em produtos.

---

## 🚀 Tecnologias Utilizadas

- **Node.js**: Plataforma para execução de JavaScript no servidor.
- **Express**: Framework para criação de APIs REST.
- **Prisma**: ORM para manipulação do banco de dados.
- **SQLite**: Banco de dados leve e embutido.
- **Thunder Client**: Ferramenta para testar endpoints (opcional).

---

## 📋 Pré-requisitos

- **Node.js** (versão 16 ou superior)
- **npm** (gerenciador de pacotes do Node.js)
- **SQLite** (embutido no Prisma, não é necessária instalação adicional)

---

## 🛠️ Instalação e Execução

1. **Clone o repositório**:
   ```bash
   git clone "link do repositório"
   cd avaliacao-back
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

3. **Crie o arquivo `.env`**:
   - Adicione a URL do banco de dados no campo `DATABASE_URL`. Exemplo:
     ```bash
     DATABASE_URL="file:./dev.db"
     ```
   - Um arquivo de exemplo chamado `.env.example` foi criado para facilitar a configuração. Ele contém o seguinte conteúdo:
     ```bash
     DATABASE_URL=
     ```

4. **Execute as migrações do banco de dados**:
   ```bash
   npx prisma migrate dev --name init
   ```

5. **Inicie o servidor**:
   ```bash
   npm start
   ```

   O servidor estará disponível em `http://localhost:3000`.

---

## 📚 Exemplos de Requisições

### 1. **Listar todos os produtos**
   **Endpoint**: `GET /produtos`

   **Exemplo de resposta**:
   ```json
   [
     {
       "id": 1,
       "name": "Produto Exemplo",
       "price": 99.99,
       "category": "Eletrônicos",
       "brand": "Marca Exemplo",
       "stock": 50,
       "imageUrl": "https://exemplo.com/imagem-produto.jpg",
       "isActive": true,
       "createAt": "2025-04-10T12:00:00.000Z",
       "updateAt": "2025-04-10T12:00:00.000Z"
     }
   ]
   ```

### 2. **Buscar produto por ID**
   **Endpoint**: `GET /produtos/:id`

   **Exemplo de resposta**:
   ```json
   {
     "id": 1,
     "name": "Produto Exemplo",
     "price": 99.99,
     "category": "Eletrônicos",
     "brand": "Marca Exemplo",
     "stock": 50,
     "imageUrl": "https://exemplo.com/imagem-produto.jpg",
     "isActive": true,
     "createAt": "2025-04-10T12:00:00.000Z",
     "updateAt": "2025-04-10T12:00:00.000Z"
   }
   ```

### 3. **Criar um novo produto**
   **Endpoint**: `POST /produtos`

   **Body**:
   ```json
   {
     "name": "Produto Exemplo",
     "price": 99.99,
     "category": "Eletrônicos",
     "brand": "Marca Exemplo",
     "stock": 50,
     "imageUrl": "https://exemplo.com/imagem-produto.jpg",
     "isActive": true
   }
   ```

   **Exemplo de resposta**:
   ```json
   {
     "id": 2,
     "name": "Produto Exemplo",
     "price": 99.99,
     "category": "Eletrônicos",
     "brand": "Marca Exemplo",
     "stock": 50,
     "imageUrl": "https://exemplo.com/imagem-produto.jpg",
     "isActive": true,
     "createAt": "2025-04-10T12:00:00.000Z",
     "updateAt": "2025-04-10T12:00:00.000Z"
   }
   ```

### 4. **Atualizar um produto**
   **Endpoint**: `PUT /produtos/:id`

   **Body**:
   ```json
   {
     "name": "Produto Atualizado",
     "price": 149.99,
     "category": "Informática",
     "brand": "Nova Marca",
     "stock": 30,
     "imageUrl": "https://exemplo.com/imagem-atualizada.jpg",
     "isActive": false
   }
   ```

   **Exemplo de resposta**:
   ```json
   {
     "id": 1,
     "name": "Produto Atualizado",
     "price": 149.99,
     "category": "Informática",
     "brand": "Nova Marca",
     "stock": 30,
     "imageUrl": "https://exemplo.com/imagem-atualizada.jpg",
     "isActive": false,
     "createAt": "2025-04-10T12:00:00.000Z",
     "updateAt": "2025-04-10T12:30:00.000Z"
   }
   ```

### 5. **Deletar um produto**
   **Endpoint**: `DELETE /produtos/:id`

   **Exemplo de resposta**:
   ```json
   {
     "message": "Produto deletado com sucesso!"
   }
   ```

---

## 🏗️ Decisões de Design e Arquitetura

1. **Prisma ORM**:
   - Escolhido para simplificar a manipulação do banco de dados e garantir consistência nos dados.

2. **SQLite**:
   - Utilizado como banco de dados por ser leve e fácil de configurar, ideal para projetos pequenos ou testes.

3. **Estrutura de Pastas**:
   - `src/controllers`: Contém os controladores responsáveis por lidar com as requisições.
   - `src/models`: Contém os modelos que interagem com o banco de dados.
   - `prisma/schema.prisma`: Define o esquema do banco de dados.

4. **Validações**:
   - Validações básicas foram implementadas nos controladores para garantir que os dados enviados pelo cliente sejam válidos.

---

## 🧪 Testes

- Utilize o **Thunder Client** ou outra ferramenta como **Postman** para testar os endpoints.
- Certifique-se de que o servidor está rodando antes de realizar os testes.

---
