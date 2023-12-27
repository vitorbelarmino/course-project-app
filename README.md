# Chat Play For a Cause

## 💻 Projeto
  Um projeto que simula uma platafoma de cursos online, onde é possivel realizar cadastro e login, filtar cursos pela barra de pesquisa e por categoria, acesar o curso e suas aulas. Desenvolvido de forma FullStack, o projeto abrange o repositório do back-end, acessível ao clicar [aqui](https://github.com/vitorbelarmino/course-project-service).
</br>

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

-  **[React](https://react.dev/)**
-  **[Next.js](https://nextjs.org/)**
-  **[TypeScript](https://www.typescriptlang.org/)**
-  **[Tailwind](https://tailwindcss.com/)**
-  **[Zod](https://zod.dev/)**
-  **[Axios](https://axios-http.com/ptbr/)**
-  **[Eslint](https://eslint.org/)**
-  **[WebSocket](https://developer.mozilla.org/pt-BR/docs/Web/API/WebSockets_API/)**
</br>

## 📌 Implementações
Cadastro:

Possibilita o registro de novos usuários, que são automaticamente autenticados ao finalizar o cadastro e redirecionados para a página de cursos.
- Login: Ao realizar o login, um token de autenticação é gerado e armazenado nos cookies. Esse token é utilizado para verificar se o usuário está logado e para realizar outras requisições ao backend, permitindo a recuperação das informações do usuário.
- Middleware de Validação: Implementa um middleware de validação para impedir que usuários acessem rotas não autorizadas sem estar logados. A escolha por esse middleware ocorre porque ele realiza a validação antes do acesso à página, evitando acesso não autorizado.
- Navegação pelos Cursos: Na página principal da aplicação, todos os cursos estão disponíveis, permitindo que os usuários filtrem os cursos por categoria ou diretamente pela barra de pesquisa.
- Acesso às Aulas: Ao selecionar um curso, os usuários são direcionados para as aulas, que podem ser apresentadas em formato de vídeo ou texto.

## ⬇️ Como executar o projeto

```bash

# Clone este repositório
$ git clone git@github.com:vitorbelarmino/course-project-app.git

# Acesse a pasta do projeto no terminal/cmd
$ cd course-project-app

# Instale as dependências
$ npm install

# Execute a aplicação
$ npm run dev

# O App inciará na porta:3000 - acesse http://localhost:3000 
```

> Github: https://github.com/vitorbelarmino

> Linkedin: https://www.linkedin.com/in/vitor-belarmino/

> Email: vitor.belarmino@hotmail.com
