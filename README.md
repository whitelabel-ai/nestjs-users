## Project setup

```bash
$ npm install
```

## Check .env file

Remember you need to setup your DATABASE_URL connection string in order to be able to connect to your local database instance
https://youtu.be/HLoTP_ZBEY4?t=756

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Seed command

```bash
npx prisma db seed
```

## Migrate

```bash
npx prisma migrate dev --name migration_name
```
