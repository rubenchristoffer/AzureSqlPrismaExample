# Azure SQL + Prisma Example
This is a sample project for using Azure SQL and Prisma together. It was created by following the Prisma [Getting Started](https://www.prisma.io/docs/getting-started/quickstart) documentation. 

## Setup ⚙️
- Start by running `npm install` to install all the dependencies
- Create a `.env` file (in the root of the project) to store the Prisma environment variables. This file is excluded from source control to ensure confidentiality of the credentials. 

Example `.env` template for Azure SQL development database:
```
DATABASE_URL="sqlserver://{DB_SERVER}.database.windows.net;database={DEVELOPMENT_DB_NAME};user={DB_USERNAME};password={DB_PASSWORD};encrypt=true"
SHADOW_DATABASE_URL="sqlserver://{DB_SERVER}.database.windows.net;database={SHADOW_DB_NAME};user={DB_USERNAME};password={DB_PASSWORD};encrypt=true"
```

- Run `npx prisma migrate dev` to apply the schema to the actual development database
	- This will generate the actual tables
- The last command should have generated the Prisma client for you, but in case it didn't you can run `npx prisma generate` to generate artifacts, including the Prisma client
	- The client is what you import in your code in order to get the programmatic representation of the Prisma schema that you use to write and fetch data for instance

❗When you are hosting the development database in the cloud (e.g. Azure SQL) you need to create a [shadow database](https://www.prisma.io/docs/concepts/components/prisma-migrate/shadow-database) in addition to the development database. Both the development database and the shadow database should be set to DTU-based -> Basic (NOT serverless), and you need two database resources for it to work. Only one database is needed for production though. 

## Run ▶️
Run `npm run dev` to run sample code that will insert some dummy data. Note that running it twice won't work as the email field has to be unique and trying to insert an existing email will result in an error. 
