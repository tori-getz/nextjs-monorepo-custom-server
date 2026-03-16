# test-monorepo

pnpm монорепо с Next.js приложением и кастомным Express-сервером.

## Структура

- **apps/next-app** — Next.js 15.3.9 (Pages Router)
- **apps/custom-server** — Express 4.17.1, собирается webpack 5.74.0

## Команды

```bash
# Установка зависимостей
pnpm install

# Dev-режим (запускается из next-app, один процесс)
pnpm dev

# Сборка
pnpm build

# Production (из custom-server)
cd apps/custom-server && pnpm start
```

## Express middleware

Middleware `requestIdMiddleware` экспортируется из `@myapp/next-app/express-middlewares` и используется в custom-server для добавления заголовка `X-Request-Id` к каждому запросу.
