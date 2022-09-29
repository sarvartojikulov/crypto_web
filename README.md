# Example react project

- `packages/core/` - Core components
- `packages/components/` - UI Components
- `packages/lib/telegram` - Telegram bot
- `packages/lib/admin` - Admin data
- `packages/lib/binance` - Ticker and Calculator data

# How to run this application

## Telegram

### 1. Create `.env.local` file in `./app` directory

```
NEXT_TELEGRAM_TOKEN=<YOUR_TOKEN>
```

### 2. Setup Telegram Webhooks

```
https://api.telegram.org/bot<YOUR_TELEGRAM_TOKEN>/setWebhook?url=<YOUR_HTTPS_URL>/api/telegram
```

## Run Application

### 1. Install dependencies

```
yarn
```

### Start development server

```
yarn app:dev
```

### Build application

```
yarn app:build
```

## Extras

### Linting, typescript checks and analytics

```
yarn lint
yarn ts
```
