# Hidroeng Infraestrutura

Site institucional da Hidroeng desenvolvido com React + Vite, com páginas de:

- Início
- Empresa
- Empreendimentos (com detalhes por rota)
- Depoimentos (com envio e avaliação por estrelas)
- Contato

## Acesso ao projeto

- Site em produção: [https://hidroeng.vercel.app/](https://hidroeng.vercel.app/)

## Tecnologias

- React
- Vite
- React Router DOM
- Tailwind CSS
- React Icons

## Como rodar localmente

1. Instale as dependências:

```bash
npm install
```

2. Inicie o projeto:

```bash
npm run dev
```

3. Acesse no navegador:

`http://localhost:5173`

## Depoimentos e armazenamento em JSON

Os depoimentos ficam salvos no navegador em formato JSON via `localStorage`:

- Chave: `hidroeng_testimonials_json`
- Seed inicial: `src/data/testimonialsSeed.json`
- Serviço de armazenamento: `src/services/testimonialsStorage.js`

## Deploy na Vercel

Configuração padrão:

- Build Command: `npm run build`
- Output Directory: `dist`

Para evitar erro 404 em rotas do React Router, este projeto usa `vercel.json` com rewrite SPA.

## Scripts disponíveis

- `npm run dev` - ambiente de desenvolvimento
- `npm run build` - build de produção
- `npm run preview` - preview local do build
- `npm run lint` - validação de lint
