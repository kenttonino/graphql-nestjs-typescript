## Description
- This is only a template for future projects.

## Technology Stack
- GraphQL
- TypeScript
- TypeORM
- NodeJS
- PostgreSQL
- Docker

## Setup Docker
1. Delete node_modules and Run the following commands:
```
docker volume rm $(docker volume ls -q)
docker system prune
docker compose up --build -d
```

<br />

2. Connect to PostgresSQL using a DBeaver (or any Database Client). Make sure to set settings to "Show all database".
```
Host: localhost
Database: postgres
Port: 5432
Username: root
Password: root
```

<br />

3. Run Migration
```
docker-compose exec backend npm run migration:run
```

## Recordings
https://user-images.githubusercontent.com/87509953/167245824-b2daaf03-bf8f-42e1-ac54-c8a22bf0911a.mp4
