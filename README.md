## Description
- This is only a guide for future projects.

## Technology Stack
- GraphQL
- TypeScript
- TypeORM
- NodeJS
- PostgresSQL

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

## Sample Request
URL: http://localhost:11000/graphql

<br />

1. Create User
![createUser](https://user-images.githubusercontent.com/87509953/167245892-ee36c107-c41b-4c0f-95da-f3790aa3b51e.png)

<br />

2. Update User
![updateUser](https://user-images.githubusercontent.com/87509953/167245908-551157e7-fdf7-4ed4-9e35-96337b2620fc.png)

<br />

3. Get Users
![getUsers](https://user-images.githubusercontent.com/87509953/167245914-a11fa44a-f9d5-4906-af8e-a91ef9ae7f5b.png)

<br />

4. Get User
![getUser](https://user-images.githubusercontent.com/87509953/167245925-ab6bdf1b-e9e8-4d42-93f3-45c03a3c81a2.png)

<br />

5. Delete User
![deleteUser](https://user-images.githubusercontent.com/87509953/167245931-2ee67535-f7c5-4f1e-9c28-c8921213b01f.png)

<br />

## Recordings
https://user-images.githubusercontent.com/87509953/167245824-b2daaf03-bf8f-42e1-ac54-c8a22bf0911a.mp4
