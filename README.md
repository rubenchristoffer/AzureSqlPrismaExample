# Azure SQL + Prisma Integration Example
This is a sample project for using Azure SQL and Prisma together. It was created by following the Prisma [Getting Started](https://www.prisma.io/docs/getting-started/quickstart) documentation. 

## Setup
- You need to create a `.env` file to store the Prisma environment variables. This file is excluded from source control to protect potential secrets. 

Example `.env` template for Azure SQL development database:
```
DATABASE_URL="sqlserver://{DB_SERVER}.database.windows.net;database={DEVELOPMENT_DB_NAME};user={DB_USERNAME};password={DB_PASSWORD};encrypt=true"
SHADOW_DATABASE_URL="sqlserver://{DB_SERVER}.database.windows.net;database={SHADOW_DB_NAME};user={DB_USERNAME};password={DB_PASSWORD};encrypt=true"
```

❗If you are hosting the development database in cloud (e.g. Azure SQL) you need to create a [shadow database](https://www.prisma.io/docs/concepts/components/prisma-migrate/shadow-database) in addition to the development database. Both the development database and the shadow database can be serverless. 

## Run
Run `npm run dev` to run sample code that will insert some dummy data. Note that running it twice won't work as the email field has to be unique and trying to insert an existing email will result in an error. 
