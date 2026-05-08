# Hidroeng Infraestrutura

Site institucional da Hidroeng desenvolvido com React + Vite, com páginas de:

- Início
- Empresa
- Empreendimentos (com detalhes por rota)
- Depoimentos (com envio e avaliação por estrelas)
- Contato

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

## Variáveis de ambiente

Crie um arquivo `.env` na raiz com:

```env
VITE_ADMIN_USERNAME=admin
VITE_ADMIN_PASSWORD=123456
```

> Importante: o `.env` está no `.gitignore` e não deve ser enviado para o repositório.

## Área administrativa de depoimentos

Login admin:

- Rota: `/admin/login`
- Usuário e senha: vindos do `.env`

Gestão de comentários:

- Rota protegida: `/admin/depoimentos`
- Permite apagar depoimentos inadequados.

## Depoimentos e armazenamento em JSON

Os depoimentos ficam salvos no navegador em formato JSON via `localStorage`:

- Chave: `hidroeng_testimonials_json`
- Seed inicial: `src/data/testimonialsSeed.json`
- Serviço de armazenamento: `src/services/testimonialsStorage.js`

## Deploy na Vercel

Configuração padrão:

- Build Command: `npm run build`
- Output Directory: `dist`

Adicione no painel da Vercel as variáveis:

- `VITE_ADMIN_USERNAME`
- `VITE_ADMIN_PASSWORD`

Para evitar erro 404 em rotas do React Router, este projeto usa `vercel.json` com rewrite SPA.

## Capturas de tela

### Home

![Home - Hidroeng](./src/assets/casas/Modern-Minimalist-House.png)

### Empresa

![Empresa - Hidroeng](./src/assets/empresa/EQUIPE.png)

### Empreendimentos

![Empreendimentos - Hidroeng](./src/assets/empreendimentos/pexels-claiton-13631997.jpg)

### Depoimentos

![Depoimentos - Hidroeng](./src/assets/depoimento/Luxurious%20Coastal%20House%20with%20Infinity%20Pool.png)

## Scripts disponíveis

- `npm run dev` - ambiente de desenvolvimento
- `npm run build` - build de produção
- `npm run preview` - preview local do build
- `npm run lint` - validação de lint
