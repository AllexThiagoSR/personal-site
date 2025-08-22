# Personal Site – Allex Thiago

> Minha página pessoal com informações sobre mim e projetos que publiquei.  
> **Live:** https://allex-thiago.vercel.app

## ✨ Visão geral

- **Framework:** Next.js (estrutura típica de `src/`, `public/`, `next.config.js`, `jsconfig.json`, `.eslintrc.json`)  
- **Linguagens no repositório:** JavaScript e CSS
- **Hospedagem/Deploy:** Vercel

## 📁 Estrutura do projeto

Confirmado no repositório:

```
personal-site/
├─ public/          
├─ src/             
├─ .eslintrc.json   
├─ .gitignore
├─ jsconfig.json    
├─ next.config.js   
├─ package-lock.json
├─ package.json     
├─ README.md
└─ READMENext.md
```

> A pasta `src/` contém as páginas/componentes do Next, e `public/` armazena os assets estáticos.

## 🚀 Como rodar localmente

```bash
# 1) Clonar
git clone https://github.com/AllexThiagoSR/personal-site.git
cd personal-site

# 2) Instalar dependências
npm install
# ou: yarn
# ou: pnpm install

# 3) Ambiente de desenvolvimento
npm run dev
# Acesse http://localhost:3000

# 4) Build de produção
npm run build

# 5) Rodar o build
npm run start

# 6) Lint (opcional)
npm run lint
```

## 📦 Deploy

O projeto está publicado na **Vercel** em **allex-thiago.vercel.app**.

## 🧩 Rotas

- **Rotas**
  - `/` – apresenta o nome e o resumo
  - `/about` – rota para a seção “Sobre” (texto de apresentação)  
  - `/projects` – rota para a seção “Projetos” (cards/lista)  


- **Scripts do `package.json`**
  - `dev`
  - `build`
  - `start`
  - `lint`


## 🖼️ Screenshots

- **Home / Sobre** – captura do hero e da seção de tecnologias (a partir do deploy atual).  
- **Projetos** – captura da grade/lista de projetos.

## 🔒 Licença

Defina a licença (ex.: MIT). Se quiser, crio o arquivo `LICENSE`.

## 👤 Autor

**Allex Thiago Santos Rosa** – [LinkedIn](https://www.linkedin.com/in/allexthiagosantosrosa)
