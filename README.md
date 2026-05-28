# diary

pnpm workspace 기반 모노레포.

## 구조

```
apps/
  client/   # Remix 프론트엔드
  server/   # Express + Prisma API
packages/
  shared/   # 공유 타입 (@diary/shared)
docker-compose.yml  # PostgreSQL
```

## 빠른 시작

```bash
# 1. 의존성 설치
pnpm install

# 2. DB 띄우기 (Postgres)
pnpm db:up

# 3. 마이그레이션 + 시드 (apps/client/content/blog/*.md → DB)
pnpm db:migrate
pnpm db:seed

# 4. 개발 서버 (client + server 동시 실행)
pnpm dev
```

- Client: http://localhost:5173
- Server: http://localhost:8787 (GET /posts, GET /posts/:slug, GET /health)

## 개별 명령

```bash
pnpm dev:client       # Remix 만
pnpm dev:server       # API 만
pnpm typecheck
pnpm build
pnpm db:down          # Postgres 중지
```

## 환경 변수

`apps/server/.env`:

```
DATABASE_URL="postgresql://diary:diary@localhost:5432/diary?schema=public"
PORT=8787
```

Client에서 다른 API 주소를 쓰려면 `API_URL` 환경변수를 지정하세요 (기본값 `http://localhost:8787`).
